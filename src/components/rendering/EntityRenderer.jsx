// 통합 엔티티 렌더러 - 시민과 몬스터를 InstancedMesh 방식으로 효율적 렌더링

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { clampToBounds, getGroundHeight } from "../../world/physics";
import { computeBodyBounce, computeWalkSwing } from "../agents/behaviors";
import { state, subscribe } from "../../game/state";
import { 
  createLabelSprite, 
  createSelectionHalo, 
  createForestNestMesh, 
  createDesertNestMesh,
  getMonsterColor,
  getColorFromAppearance,
  getUnitJobEmoji
} from "./RenderingUtils";

export function EntityRenderer({ threeRef, units, monsters, nests, count = 260, maxCount = 800 }) {
  const unitsRef = useRef(units);
  const monstersRef = useRef(monsters);
  const nestsRef = useRef(nests);
  const [isReady, setIsReady] = React.useState(false);
  
  // 군락지 관리용 refs (useEffect 밖에서 접근 가능하도록)
  const nestGroupRef = useRef(null);
  const nestInstancesRef = useRef(new Map());
  const [nestGroupReady, setNestGroupReady] = React.useState(false);
  
  // 중요: 실시간 업데이트
  useEffect(() => { 
    unitsRef.current = units; 
  }, [units]);
  
  useEffect(() => { 
    monstersRef.current = monsters; 
  }, [monsters]);
  
  useEffect(() => { 
    nestsRef.current = nests; 
  }, [nests]);

  // 군락지 전용 useEffect - 동적 추가/제거
  useEffect(() => {
    if (!nestGroupRef.current || !nestGroupReady) {
      return;
    }
    
    const nestGroup = nestGroupRef.current;
    const nestInstances = nestInstancesRef.current;
    const validNests = Array.isArray(nests) ? nests : Object.values(nests || {});
    const filteredNests = validNests.filter(n => n && n.id);
    
    // 새로운 군락지 추가
    for (const nest of filteredNests) {
      if (!nestInstances.has(nest.id)) {
        let nestMesh;
        if (nest.biomeType === 'forest') {
          nestMesh = createForestNestMesh();
        } else if (nest.biomeType === 'desert') {
          nestMesh = createDesertNestMesh();
        } else {
          nestMesh = createForestNestMesh(); // 기본값
        }
        
        if (nest.position) {
          const nestGroundY = getGroundHeight(nest.position.x, nest.position.z);
          nestMesh.position.set(nest.position.x, nestGroundY, nest.position.z);
        }
        
        nestGroup.add(nestMesh);
        nestInstances.set(nest.id, nestMesh);
      }
    }
    
    // 존재하지 않는 군락지 제거
    const activeNestIds = new Set(filteredNests.map(n => n.id));
    for (const [nestId, nestMesh] of nestInstances) {
      if (!activeNestIds.has(nestId)) {
        nestGroup.remove(nestMesh);
        nestInstances.delete(nestId);
      }
    }
  }, [nests, nestGroupReady]); // nests나 nestGroupReady가 변경될 때마다 실행

  useEffect(() => {
    const three = threeRef.current; 
    if (!three) return;
    
    const { scene, camera, renderer } = three;
    
    // Materials
    const mat = new THREE.MeshStandardMaterial({ vertexColors: true, metalness: 0.0, roughness: 0.5 });
    const monsterMat = new THREE.MeshStandardMaterial({ vertexColors: true, metalness: 0.1, roughness: 0.8 });

    // 시민 지오메트리
    const bodyCylinder = new THREE.CylinderGeometry(0.35, 0.35, 1.2, 22, 1, false);
    const headGeo = new THREE.SphereGeometry(0.35, 24, 20);
    const armGeo = new THREE.CapsuleGeometry(0.10, Math.max(0.01, 0.34 - 2 * 0.10), 12, 12);
    const BASE_ARM_LEN = 0.34; // 캡슐 총 높이 기준
    const handGeo = new THREE.SphereGeometry(0.12, 14, 12);
    
    // 몬스터는 시민과 동일한 지오메트리 사용 (색상만 다름)
    
    [bodyCylinder, headGeo, armGeo, handGeo].forEach((geo)=>{
      const pos = geo.attributes.position; if(!geo.getAttribute('color')){ const arr=new Float32Array(pos.count*3); for(let i=0;i<pos.count;i++){ arr[i*3+0]=1; arr[i*3+1]=1; arr[i*3+2]=1; } geo.setAttribute('color', new THREE.BufferAttribute(arr,3)); }
    });

    const parts = {
      // 시민과 몬스터 공통 파트 (동일한 메쉬 사용)
      body: new THREE.InstancedMesh(bodyCylinder, mat, maxCount),
      head: new THREE.InstancedMesh(headGeo, mat, maxCount),
      lArm: new THREE.InstancedMesh(armGeo, mat, maxCount),
      rArm: new THREE.InstancedMesh(armGeo, mat, maxCount),
      lHand: new THREE.InstancedMesh(handGeo, mat, maxCount),
      rHand: new THREE.InstancedMesh(handGeo, mat, maxCount),
    };
    // 카메라 근접 시 클리핑 방지: depthTest 유지, depthWrite 유지, 투명도 사용 안함
    for(const k in parts){ parts[k].frustumCulled = false; parts[k].castShadow = false; parts[k].receiveShadow = false; }
    for(const k in parts){ parts[k].instanceMatrix.setUsage(THREE.DynamicDrawUsage); parts[k].count = 0; scene.add(parts[k]); }
    
    // 몬스터 군락지 관리
    const nestGroup = new THREE.Group();
    nestGroup.name = 'MonsterNests'; // 디버깅용 이름
    scene.add(nestGroup);
    
    // ref에 저장하여 외부에서 접근 가능하게 함
    nestGroupRef.current = nestGroup;
    const nestInstances = nestInstancesRef.current;
    
    // nestGroup 준비 완료 신호
    setNestGroupReady(true);

    // 시민별 외형 정보 활용 - units.js의 appearance 정보 사용
    const appearanceById = new Map(); // 시민 ID별 외형 정보 저장
    const monsterAppearanceById = new Map(); // 몬스터 ID별 외형 정보 저장
    
    // 시민 ID별 고정 색상 저장 (한 번 계산되면 절대 변하지 않음)
    const citizenColorById = new Map(); // 시민 ID -> THREE.Color 매핑
    const monsterColorById = new Map(); // 몬스터 ID -> THREE.Color 매핑
    
    // 색상 관련 함수들은 RenderingUtils에서 가져옴
    
    // 시민 ID별 고정 색상 계산 함수 (한 번만 실행)
    function getOrCreateCitizenColor(citizenId, appearance) {
      if (!citizenColorById.has(citizenId)) {
        const color = getColorFromAppearance(appearance, 'top');
        citizenColorById.set(citizenId, color);
      }
      return citizenColorById.get(citizenId);
    }
    
    // 색상 적용 함수 (현재 렌더링 인덱스에 고정 색상 적용)
    function applyCitizenColor(citizenId, instanceIndex) {
      const color = citizenColorById.get(citizenId);
      if (color) {
        const citizenParts = ['body', 'head', 'lArm', 'rArm', 'lHand', 'rHand'];
        citizenParts.forEach(partName => {
          if (parts[partName]) parts[partName].setColorAt(instanceIndex, color);
        });
      }
    }
    
    // 몬스터 ID별 고정 색상 계산 함수 (한 번만 실행)
    function getOrCreateMonsterColor(monsterId, type) {
      if (!monsterColorById.has(monsterId)) {
        const color = new THREE.Color('#4a5d23'); // 고블린 초록색 (나중에 타입별로 확장 가능)
        monsterColorById.set(monsterId, color);
      }
      return monsterColorById.get(monsterId);
    }
    
    // 몬스터 색상 적용 함수
    function applyMonsterColor(monsterId, instanceIndex) {
      const color = monsterColorById.get(monsterId);
      if (color) {
        const citizenParts = ['body', 'head', 'lArm', 'rArm', 'lHand', 'rHand'];
        citizenParts.forEach(partName => {
          if (parts[partName]) parts[partName].setColorAt(instanceIndex, color);
        });
      }
    }
    
    // 군락지 생성 함수들은 RenderingUtils에서 가져옴
    
    // 초기 색상 설정 (기본 회색)
    const defaultColor = new THREE.Color('#6b705c');
    
    for(let i=0;i<maxCount;i++){
      // 시민과 몬스터 공통 파트 기본 색상
      const citizenParts = ['body', 'head', 'lArm', 'rArm', 'lHand', 'rHand'];
      citizenParts.forEach(partName => {
        if (parts[partName]) parts[partName].setColorAt(i, defaultColor);
      });
    }
    for(const k in parts){ if(parts[k].instanceColor) parts[k].instanceColor.needsUpdate = true; }

    // animate loop bound to renderer loop from parent
    const tmpMat = new THREE.Matrix4(); const tmpQ = new THREE.Quaternion();
    const place = (mesh,i,pos,rot,scale)=>{ tmpMat.compose(pos, rot, scale); mesh.setMatrixAt(i,tmpMat); };

    // 외부 상태 유닛의 이전 위치(방향 계산) 캐시
    const prevById = new Map();
    const monsterPrevById = new Map();
    // 렌더 스무싱용 가시 위치 캐시(틱 사이 보간)
    const visById = new Map();
    const monsterVisById = new Map();

    // 렌더 프레임 간 dt 추적(예측 이동에 사용)
    let lastRenderT = performance.now()*0.001;

    // 라벨 및 할로 관리
    const labelById = new Map();
    const haloSprite = createSelectionHalo(scene);

    // 선택 상태 구독
    let selectedUnitId = state.ui.selectedUnitId;
    const unsubSel = subscribe(()=>{ selectedUnitId = state.ui.selectedUnitId; });

    // 작업 이모지는 RenderingUtils에서 가져옴

    function onFrame(){
      const aStart = performance.now();
      const now = performance.now()*0.001;
      const dtRender = Math.max(0, Math.min(0.05, now - lastRenderT));
      const t = now;
      
      // 시민 데이터
      const curUnits = unitsRef.current;
      const sourceUnits = Array.isArray(curUnits) ? curUnits.filter(u => !u.hidden) : [];
      const usedCount = sourceUnits.length;
      
      // 몬스터 데이터
      const curMonsters = monstersRef.current;
      const sourceMonsters = Array.isArray(curMonsters) 
        ? curMonsters.filter(m => m && !m.hidden) 
        : Object.values(curMonsters || {}).filter(m => m && !m.hidden);
      const monsterCount = sourceMonsters.length;
      
      // 군락지 데이터
      const curNests = nestsRef.current;
      const sourceNests = Array.isArray(curNests) ? curNests : Object.values(curNests || {});
      const validNests = sourceNests.filter(n => n && n.id);
      
      // // 간단한 디버깅
      // if (Math.floor(t) % 15 === 0 && Math.floor(t*10) % 10 === 0) {
      //   console.log('📊 EntityRenderer 상태:', {
      //     시민: usedCount,
      //     몬스터: monsterCount,
      //     군락지: validNests.length,
      //     몬스터데이터: sourceMonsters.length > 0 ? sourceMonsters[0] : '없음'
      //   });
      // }
      
      // 1) 시민 렌더링
      const seenIds = new Set();
      if(usedCount>0){
        for(let i=0;i<usedCount;i++){
          const u = sourceUnits[i]; if(!u) continue;
          const id = u.id ?? i;
          seenIds.add(id);
          
          const ux = u.pos?.x ?? 0; const uz = u.pos?.z ?? 0; 
          // 지상 높이 계산으로 시민이 뜨는 문제 해결
          const groundY = getGroundHeight(ux, uz);
          const uy = Math.max(groundY, u.pos?.y ?? groundY);
          
          const vis = visById.get(id) || { x: ux, z: uz, y: uy };
          let vx = vis.x, vz = vis.z, vy = vis.y;
          if (u.moveTo && Number.isFinite(u.moveTo.x) && Number.isFinite(u.moveTo.z)){
            // 예측 이동: 렌더 프레임마다 목표로 전진
            const { AGI=5 } = u.stats||{};
            const spd = 2.2 * (0.9 + AGI*0.02);
            const dxT = u.moveTo.x - vx; const dzT = u.moveTo.z - vz; const dT = Math.hypot(dxT, dzT);
            if (dT > 1e-4){
              const step = Math.min(dT, spd * dtRender);
              vx = vx + (dxT/dT) * step;
              vz = vz + (dzT/dT) * step;
            } else {
              vx = u.moveTo.x; vz = u.moveTo.z;
            }
            // 목표 지점의 지상 높이 계산
            const targetGroundY = getGroundHeight(vx, vz);
            vy = vy + (targetGroundY - vy) * 0.15; // 부드럽게 지상 높이로 수렴
          } else {
            // 정지/상태 기반: 상태 좌표로 천천히 수렴
            vx = vis.x + (ux - vis.x) * 0.28;
            vz = vis.z + (uz - vis.z) * 0.28;
            const currentGroundY = getGroundHeight(vx, vz);
            vy = vy + (currentGroundY - vy) * 0.2; // 현재 위치의 지상 높이로 수렴
          }
          visById.set(id, { x: vx, z: vz, y: vy });
          const prev = prevById.get(id) || { x: vx, z: vz };
          const dx = vx - prev.x; const dz = vz - prev.z;
          const moveDir = Math.atan2(dx, dz);
          const size = (u.size ?? 1.0) * 1.0;
          const prevDir = prevById.get(id)?.dir ?? moveDir;
          const targetDir = moveDir;
          // 방향 스무딩
          const angleDiff = ((targetDir - prevDir + Math.PI*3) % (Math.PI*2)) - Math.PI;
          const dir = prevDir + angleDiff * 0.15;
          prevById.set(id, { x: vx, z: vz, dir });

          const facing = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0), dir||0);
          const tBounce = computeBodyBounce(t, size, i*0.37);
          const baseY = Math.max(0.1, 0.7*size) + vy;
          const bodyPos = new THREE.Vector3(vx, baseY + tBounce, vz);
          const tiltZ = Math.sin(t*4 + (i*0.37)) * 0.08;
          // 기울임 스무딩(미세)
          const bodyTilt = facing.clone().multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1,0,0), tiltZ*0.8));

          // 시민별 외형 정보 활용 - 숨겨진 상태와 관계없이 초기 외형 사용
          const appearance = u.originalAppearance || u.appearance || null;
          
          // 1. 시민 ID 기반 고유 색상 생성 (한 번만 실행)
          getOrCreateCitizenColor(id, appearance);
          
          // 2. 현재 렌더링 인덱스에 고정 색상 적용 (매 프레임)
          applyCitizenColor(id, i);
          
          // 색상 버퍼 업데이트 표시
          for(const k in parts){ if(parts[k].instanceColor) parts[k].instanceColor.needsUpdate = true; }
          
          place(parts.body,i,bodyPos,bodyTilt,new THREE.Vector3(1,1,1).multiplyScalar(size));
          const headPos = bodyPos.clone().add(new THREE.Vector3(0,1.05*size,0));
          place(parts.head,i,headPos,facing,new THREE.Vector3(size,size,size));
          const shoulder = bodyPos.clone().add(new THREE.Vector3(0,0.46*size,0));
          const right = new THREE.Vector3(1,0,0).applyQuaternion(facing);
          const forward = new THREE.Vector3(0,0,1).applyQuaternion(facing);
          const armOut = 0.50*size;
          const shoulderL = shoulder.clone().addScaledVector(right,-armOut).addScaledVector(forward, 0.12*size);
          const shoulderR = shoulder.clone().addScaledVector(right, armOut).addScaledVector(forward, 0.12*size);
          const moving = (Math.abs(dx) + Math.abs(dz)) > 1e-4;
          const { walkCycle, swingFwd, swingUp } = computeWalkSwing(t, size, i*0.37, moving);
          const handL = shoulderL.clone()
            .addScaledVector(forward,  (moving ? walkCycle : 0) * swingFwd)
            .addScaledVector(right,   -0.02*size)
            .add(new THREE.Vector3(0, -0.35*size + (moving ? Math.abs(walkCycle) : 0)*swingUp, 0));
          const handR = shoulderR.clone()
            .addScaledVector(forward, (moving ? -walkCycle : 0) * swingFwd)
            .addScaledVector(right,    0.02*size)
            .add(new THREE.Vector3(0, -0.35*size + (moving ? Math.abs(walkCycle) : 0)*swingUp, 0));

          const armPosL = shoulderL.clone().lerp(handL, 0.5);
          const armPosR = shoulderR.clone().lerp(handR, 0.5);
          const armDirL = new THREE.Vector3().subVectors(handL, shoulderL);
          const armDirR = new THREE.Vector3().subVectors(handR, shoulderR);
          const armLenL = Math.max(0.001, armDirL.length());
          const armLenR = Math.max(0.001, armDirR.length());
          armDirL.normalize(); armDirR.normalize();
          const armRotL = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,-1,0), armDirL);
          const armRotR = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,-1,0), armDirR);
          const armScaleL = new THREE.Vector3(size*0.85, (armLenL/BASE_ARM_LEN)*size*0.85, size*0.85);
          const armScaleR = new THREE.Vector3(size*0.85, (armLenR/BASE_ARM_LEN)*size*0.85, size*0.85);

          place(parts.lArm,i,armPosL,armRotL,armScaleL);
          place(parts.rArm,i,armPosR,armRotR,armScaleR);
          place(parts.lHand,i,handL,facing,new THREE.Vector3(0.8,0.8,0.8));
          place(parts.rHand,i,handR,facing,new THREE.Vector3(0.8,0.8,0.8));

          // 라벨 업데이트
          const labelText = `${u.name || '시민'} ${getUnitJobEmoji(u, state.buildings)}`;
          let entry = labelById.get(id);
          if(!entry){ entry = createLabelSprite(labelText, scene); labelById.set(id, entry); }
          if(entry.lastText !== labelText){ entry.draw(labelText); entry.tex.needsUpdate = true; entry.lastText = labelText; }
          entry.sprite.position.copy(headPos.clone().add(new THREE.Vector3(0, 1.5*size, 0))); // 라벨을 더 높게 배치
          entry.sprite.visible = true;

          // 선택된 유닛 할로
          if(selectedUnitId && selectedUnitId === id){
            haloSprite.position.copy(headPos.clone().add(new THREE.Vector3(0, 0.2*size, 0)));
            haloSprite.scale.set(1.6*size, 1.6*size, 1);
            haloSprite.visible = true;
          }
        }
      }

      // 2) 몬스터 렌더링 (시민과 동일한 방식)
      const seenMonsterIds = new Set();
      if(monsterCount > 0){
        for(let i = 0; i < monsterCount; i++){
          const m = sourceMonsters[i]; if(!m) continue;
          const id = m.id ?? `monster_${i}`;
          seenMonsterIds.add(id);
          
          // 몬스터 위치 처리 (시민과 동일한 스무딩 적용)
          const mx = m.pos?.x ?? 0; const mz = m.pos?.z ?? 0; // pos 속성 사용
          // 지상 높이 계산으로 몬스터가 뜨는 문제 해결
          const groundY = getGroundHeight(mx, mz);
          const my = Math.max(groundY, m.pos?.y ?? groundY);
          
          // 시민과 동일한 방식으로 위치 스무딩 적용
          const monsterVis = monsterVisById.get(id) || { x: mx, z: mz, y: my };
          let mvx = monsterVis.x, mvz = monsterVis.z, mvy = monsterVis.y;
          
          if (m.moveTo && Number.isFinite(m.moveTo.x) && Number.isFinite(m.moveTo.z)){
            // 시민과 동일한 예측 이동: 렌더 프레임마다 목표로 전진
            const { AGI=5 } = m.stats||{};
            const spd = 2.2 * (0.9 + AGI*0.02);
            const dxT = m.moveTo.x - mvx; const dzT = m.moveTo.z - mvz; const dT = Math.hypot(dxT, dzT);
            if (dT > 1e-4){
              const step = Math.min(dT, spd * dtRender);
              mvx = mvx + (dxT/dT) * step;
              mvz = mvz + (dzT/dT) * step;
            } else {
              mvx = m.moveTo.x; mvz = m.moveTo.z;
            }
            // 목표 지점의 지상 높이 계산
            const targetGroundY = getGroundHeight(mvx, mvz);
            mvy = mvy + (targetGroundY - mvy) * 0.15; // 부드럽게 지상 높이로 수렴
          } else {
            // 정지/상태 기반: 상태 좌표로 천천히 수렴
            mvx = mvx + (mx - mvx) * 0.28;
            mvz = mvz + (mz - mvz) * 0.28;
            const currentGroundY = getGroundHeight(mvx, mvz);
            mvy = mvy + (currentGroundY - mvy) * 0.2; // 현재 위치의 지상 높이로 수렴
          }
          
          monsterVisById.set(id, { x: mvx, z: mvz, y: mvy });
          
          const monsterPrev = monsterPrevById.get(id) || { x: mvx, z: mvz };
          const mdx = mvx - monsterPrev.x; const mdz = mvz - monsterPrev.z;
          const monsterMoveDir = Math.atan2(mdx, mdz);
          const monsterSize = (m.size ?? 1.0) * 1.0; // 시민과 동일한 크기
          const monsterPrevDir = monsterPrevById.get(id)?.dir ?? monsterMoveDir;
          
          // 부드러운 방향 회전 (시민과 동일한 방식)
          const monsterAngleDiff = ((monsterMoveDir - monsterPrevDir + Math.PI*3) % (Math.PI*2)) - Math.PI;
          const monsterDir = monsterPrevDir + monsterAngleDiff * 0.15; // 시민과 동일한 회전 속도
          monsterPrevById.set(id, { x: mvx, z: mvz, dir: monsterDir });

          const monsterFacing = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0), monsterDir||0);
          const monsterBounce = computeBodyBounce(t, monsterSize, i*0.37);
          const monsterBaseY = Math.max(0.1, 0.7*monsterSize) + mvy;
          const monsterBodyPos = new THREE.Vector3(mvx, monsterBaseY + monsterBounce, mvz);
          const tiltZ = Math.sin(t*4 + (i*0.37)) * 0.08;
          // 기울임 스무딩(미세)
          const monsterBodyTilt = monsterFacing.clone().multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1,0,0), tiltZ*0.8));
          
          // 몬스터 색상 설정 (몬스터 ID 기준)
          const monsterInstanceIndex = usedCount + i; // 시민 다음 인덱스 사용
          
          // 1. 몬스터 ID 기반 고유 색상 생성 (한 번만 실행)
          getOrCreateMonsterColor(id, m.type || 'goblin');
          
          // 2. 현재 렌더링 인덱스에 고정 색상 적용 (매 프레임)
          applyMonsterColor(id, monsterInstanceIndex);
          
          // 색상 버퍼 업데이트 표시
          const citizenParts = ['body', 'head', 'lArm', 'rArm', 'lHand', 'rHand'];
          citizenParts.forEach(partName => {
            if(parts[partName] && parts[partName].instanceColor) parts[partName].instanceColor.needsUpdate = true;
          });
          
          // 몬스터 몸체 (시민과 동일한 방식)
          place(parts.body, monsterInstanceIndex, monsterBodyPos, monsterBodyTilt, new THREE.Vector3(1,1,1).multiplyScalar(monsterSize));
          const monsterHeadPos = monsterBodyPos.clone().add(new THREE.Vector3(0,1.05*monsterSize,0));
          place(parts.head, monsterInstanceIndex, monsterHeadPos, monsterFacing, new THREE.Vector3(monsterSize,monsterSize,monsterSize));
          const monsterShoulder = monsterBodyPos.clone().add(new THREE.Vector3(0,0.46*monsterSize,0));
          const monsterRight = new THREE.Vector3(1,0,0).applyQuaternion(monsterFacing);
          const monsterForward = new THREE.Vector3(0,0,1).applyQuaternion(monsterFacing);
          const monsterArmOut = 0.50*monsterSize;
          const monsterShoulderL = monsterShoulder.clone().addScaledVector(monsterRight,-monsterArmOut).addScaledVector(monsterForward, 0.12*monsterSize);
          const monsterShoulderR = monsterShoulder.clone().addScaledVector(monsterRight, monsterArmOut).addScaledVector(monsterForward, 0.12*monsterSize);
          const monsterMoving = (Math.abs(mdx) + Math.abs(mdz)) > 1e-4;
          const { walkCycle, swingFwd, swingUp } = computeWalkSwing(t, monsterSize, i*0.37, monsterMoving);
          const monsterHandL = monsterShoulderL.clone()
            .addScaledVector(monsterForward,  (monsterMoving ? walkCycle : 0) * swingFwd)
            .addScaledVector(monsterRight,   -0.02*monsterSize)
            .add(new THREE.Vector3(0, -0.35*monsterSize + (monsterMoving ? Math.abs(walkCycle) : 0)*swingUp, 0));
          const monsterHandR = monsterShoulderR.clone()
            .addScaledVector(monsterForward, (monsterMoving ? -walkCycle : 0) * swingFwd)
            .addScaledVector(monsterRight,    0.02*monsterSize)
            .add(new THREE.Vector3(0, -0.35*monsterSize + (monsterMoving ? Math.abs(walkCycle) : 0)*swingUp, 0));

          const monsterArmPosL = monsterShoulderL.clone().lerp(monsterHandL, 0.5);
          const monsterArmPosR = monsterShoulderR.clone().lerp(monsterHandR, 0.5);
          const monsterArmDirL = new THREE.Vector3().subVectors(monsterHandL, monsterShoulderL);
          const monsterArmDirR = new THREE.Vector3().subVectors(monsterHandR, monsterShoulderR);
          const monsterArmLenL = Math.max(0.001, monsterArmDirL.length());
          const monsterArmLenR = Math.max(0.001, monsterArmDirR.length());
          monsterArmDirL.normalize(); monsterArmDirR.normalize();
          const monsterArmRotL = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,-1,0), monsterArmDirL);
          const monsterArmRotR = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,-1,0), monsterArmDirR);
          const monsterArmScaleL = new THREE.Vector3(monsterSize*0.85, (monsterArmLenL/BASE_ARM_LEN)*monsterSize*0.85, monsterSize*0.85);
          const monsterArmScaleR = new THREE.Vector3(monsterSize*0.85, (monsterArmLenR/BASE_ARM_LEN)*monsterSize*0.85, monsterSize*0.85);

          place(parts.lArm, monsterInstanceIndex, monsterArmPosL, monsterArmRotL, monsterArmScaleL);
          place(parts.rArm, monsterInstanceIndex, monsterArmPosR, monsterArmRotR, monsterArmScaleR);
          place(parts.lHand, monsterInstanceIndex, monsterHandL, monsterFacing, new THREE.Vector3(0.8,0.8,0.8));
          place(parts.rHand, monsterInstanceIndex, monsterHandR, monsterFacing, new THREE.Vector3(0.8,0.8,0.8));

          // 몬스터 라벨 (실제 몬스터 이름 사용)
          const monsterLabelText = m.name || '몬스터';
          let monsterEntry = labelById.get(id);
          if(!monsterEntry){ monsterEntry = createLabelSprite(monsterLabelText, scene); labelById.set(id, monsterEntry); }
          if(monsterEntry.lastText !== monsterLabelText){ monsterEntry.draw(monsterLabelText); monsterEntry.tex.needsUpdate = true; monsterEntry.lastText = monsterLabelText; }
          // 오크는 더 크므로 라벨을 더 높게 배치
          const labelHeight = m.type === 'orc' ? 2.0*monsterSize : 1.5*monsterSize;
          monsterEntry.sprite.position.copy(monsterHeadPos.clone().add(new THREE.Vector3(0, labelHeight, 0)));
          monsterEntry.sprite.visible = true;
        }
      }


      // 보이지 않는 라벨 정리 (시민과 몬스터 모두)
      for(const [id, entry] of labelById){ 
        if(!seenIds.has(id) && !seenMonsterIds.has(id)) { 
          entry.sprite.visible = false; 
        } 
      }
      if(!selectedUnitId){ haloSprite.visible = false; }

      // InstancedMesh 카운트 설정 (시민 + 몬스터)
      const totalEntityCount = usedCount + monsterCount;
      
      // 시민과 몬스터 공통 파트 (동일한 메쉬 사용)
      const citizenParts = ['body', 'head', 'lArm', 'rArm', 'lHand', 'rHand'];
      citizenParts.forEach(partName => {
        if(parts[partName]){
          parts[partName].count = totalEntityCount; // 시민과 몬스터 합계
          parts[partName].instanceMatrix.needsUpdate = true;
        }
      });
      
      lastRenderT = now;
      // 계측 기록(HUD에서 읽음)
      if (typeof window !== 'undefined'){
        window.__INSU_METRICS = window.__INSU_METRICS || {};
        window.__INSU_METRICS.agentsMs = Math.max(0, performance.now() - aStart);
        window.__INSU_METRICS.totalEntities = totalEntityCount;
        window.__INSU_METRICS.citizens = usedCount;
        window.__INSU_METRICS.monsters = monsterCount;
        window.__INSU_METRICS.nests = sourceNests.length;
      }
    }

    // hook into parent's loop
    // 메인 루프에 합류: renderer 프레임 끝에 개입
    let raf;
    const step = ()=>{ onFrame(); raf = requestAnimationFrame(step); };
    raf = requestAnimationFrame(step);
    
    // 초기화 완료 표시
    setIsReady(true);

    return ()=>{ 
      cancelAnimationFrame(raf); 
      for(const k in parts){ scene.remove(parts[k]); parts[k].geometry.dispose(); }
      // 라벨/할로 정리
      for(const [id,entry] of labelById){ scene.remove(entry.sprite); if(entry.sprite.material?.map) entry.sprite.material.map.dispose(); entry.sprite.material.dispose(); }
      scene.remove(haloSprite); haloSprite.material.dispose();
      // 군락지 정리
      if (nestGroupRef.current) {
        scene.remove(nestGroupRef.current);
        nestGroupRef.current = null;
      }
      if (nestInstancesRef.current) {
        nestInstancesRef.current.clear();
      }
      setNestGroupReady(false);
      unsubSel();
      setIsReady(false);
    };
  }, [threeRef, count, maxCount]);

  return null;
}
