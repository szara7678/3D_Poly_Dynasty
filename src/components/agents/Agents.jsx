import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { clampToBounds } from "../../world/physics";
import { computeBodyBounce, computeWalkSwing } from "./behaviors";
import { state, subscribe } from "../../game/state";

export function Agents({ threeRef, units, count = 260, maxCount = 800 }){
  // 최신 units를 유지하여 메인 렌더 루프가 재마운트 없이 참조
  const unitsRef = useRef(units);
  const [isReady, setIsReady] = React.useState(false);
  
  useEffect(()=>{ 
    unitsRef.current = units; 
  }, [units]);

  useEffect(() => {
    const three = threeRef.current; if(!three) return;
    const { scene } = three;
    

    // Materials
    const mat = new THREE.MeshStandardMaterial({ vertexColors: true, metalness: 0.0, roughness: 0.5 });

    const bodyCylinder = new THREE.CylinderGeometry(0.35, 0.35, 1.2, 22, 1, false);
    const headGeo = new THREE.SphereGeometry(0.35, 24, 20);
    const armGeo = new THREE.CapsuleGeometry(0.10, Math.max(0.01, 0.34 - 2 * 0.10), 12, 12);
    const BASE_ARM_LEN = 0.34; // 캡슐 총 높이 기준
    const handGeo = new THREE.SphereGeometry(0.12, 14, 12);
    [bodyCylinder, headGeo, armGeo, handGeo].forEach((geo)=>{
      const pos = geo.attributes.position; if(!geo.getAttribute('color')){ const arr=new Float32Array(pos.count*3); for(let i=0;i<pos.count;i++){ arr[i*3+0]=1; arr[i*3+1]=1; arr[i*3+2]=1; } geo.setAttribute('color', new THREE.BufferAttribute(arr,3)); }
    });

    const parts = {
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

    // simple color per agent
    // 현실적인 톤(어스톤) 고정 팔레트에서 순환
    const palette = [
      '#6b705c','#a5a58d','#b7b7a4','#cb997e','#ddbea9','#b08968','#7f5539','#9c6644'
    ];
    for(let i=0;i<maxCount;i++){ const c=new THREE.Color(palette[i%palette.length]); for(const k in parts){ parts[k].setColorAt(i,c); } }
    for(const k in parts){ if(parts[k].instanceColor) parts[k].instanceColor.needsUpdate=true; }

    // animate loop bound to renderer loop from parent
    const tmpMat = new THREE.Matrix4(); const tmpQ = new THREE.Quaternion();
    const place = (mesh,i,pos,rot,scale)=>{ tmpMat.compose(pos, rot, scale); mesh.setMatrixAt(i,tmpMat); };

    // 내부 배회자(혼합 모드용)
    const agents = new Array(maxCount).fill(0).map(()=>({ x: (Math.random()*2-1)*70, z:(Math.random()*2-1)*70, y:0, dir:Math.random()*Math.PI*2, speed:0.3+Math.random()*0.35, size:0.9+Math.random()*0.3, phase:Math.random()*Math.PI*2 }));
    // 외부 상태 유닛의 이전 위치(방향 계산) 캐시
    const prevById = new Map();
    // 렌더 스무싱용 가시 위치 캐시(틱 사이 보간)
    const visById = new Map();

    // 렌더 프레임 간 dt 추적(예측 이동에 사용)
    let lastRenderT = performance.now()*0.001;

    // 라벨(이름 + 작업 이모지) 스프라이트 풀
    const labelById = new Map();
    function makeLabelSprite(text){
      const canvas = document.createElement('canvas');
      canvas.width = 256; canvas.height = 96;
      const ctx = canvas.getContext('2d');
      const draw = (t)=>{
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.font = 'bold 36px system-ui, -apple-system, Segoe UI, Roboto, sans-serif';
        const metrics = ctx.measureText(t);
        const w = Math.min(240, Math.max(80, metrics.width + 24));
        const h = 48; const x = (canvas.width - w)/2; const y = (canvas.height - h)/2;
        ctx.fillStyle = 'rgba(17,24,39,0.75)';
        ctx.strokeStyle = 'rgba(255,255,255,0.9)';
        ctx.lineWidth = 2;
        ctx.beginPath(); ctx.roundRect(x, y, w, h, 10); ctx.fill(); ctx.stroke();
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillStyle = '#ffffff';
        ctx.fillText(t, canvas.width/2, canvas.height/2);
      };
      draw(text);
      const tex = new THREE.CanvasTexture(canvas); tex.needsUpdate = true;
      const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false, depthWrite: false });
      const sprite = new THREE.Sprite(mat);
      sprite.scale.set(2.6, 0.9, 1);
      scene.add(sprite);
      return { sprite, canvas, ctx, tex, draw, lastText: text };
    }

    // 선택된 유닛 헤드 할로(아웃라인 유사 효과)
    const haloTexCanvas = document.createElement('canvas');
    haloTexCanvas.width = 256; haloTexCanvas.height = 256;
    const haloCtx = haloTexCanvas.getContext('2d');
    const grad = haloCtx.createRadialGradient(128,128,10, 128,128,120);
    grad.addColorStop(0, 'rgba(59,130,246,0.75)');
    grad.addColorStop(0.4, 'rgba(59,130,246,0.25)');
    grad.addColorStop(1, 'rgba(59,130,246,0.0)');
    haloCtx.fillStyle = grad; haloCtx.beginPath(); haloCtx.arc(128,128,120,0,Math.PI*2); haloCtx.fill();
    const haloTex = new THREE.CanvasTexture(haloTexCanvas); haloTex.needsUpdate = true;
    const haloMat = new THREE.SpriteMaterial({ map: haloTex, transparent: true, depthTest: false, depthWrite: false });
    const haloSprite = new THREE.Sprite(haloMat); haloSprite.scale.set(1.8, 1.8, 1);
    haloSprite.visible = false; scene.add(haloSprite);

    // 선택 상태 구독
    let selectedUnitId = state.ui.selectedUnitId;
    const unsubSel = subscribe(()=>{ selectedUnitId = state.ui.selectedUnitId; });

    // 작업 이모지 매핑
    const JOB_EMOJI = { town_hall:'🏛️', farm:'🌾', hunter:'🏹', gatherer:'🍃', mine:'⛏️', barracks:'⚔️', mage_tower:'🔮', smithy:'🔨', monster_den:'👾' };
    const IDLE_EMOJI = '💤';
    function unitEmoji(u){
      const bid = u.assignedBuildingId; if(!bid){ return IDLE_EMOJI; }
      const b = state.buildings[bid]; if(!b) return IDLE_EMOJI;
      return JOB_EMOJI[b.type] || '⚙️';
    }

    function onFrame(){
      const now = performance.now()*0.001;
      const dtRender = Math.max(0, Math.min(0.05, now - lastRenderT));
      const t = now;
      const curUnits = unitsRef.current;
      const sourceUnits = Array.isArray(curUnits) ? curUnits.filter(u => !u.hidden) : [];
      const usedCount = sourceUnits.length;
      
      // 디버깅용 로그 (15초마다 출력)
      if(Math.floor(t) % 15 === 0 && Math.floor(t*10) % 10 === 0){
      }

      // 1) 외부 상태 유닛을 우선 배치
      const seenIds = new Set();
      if(usedCount>0){
        for(let i=0;i<usedCount;i++){
          const u = sourceUnits[i]; if(!u) continue;
          const id = u.id ?? i;
          seenIds.add(id);
          const ux = u.pos?.x ?? 0; const uz = u.pos?.z ?? 0; const uy = (u.pos?.y ?? 0);
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
            // 높이는 부드럽게 추종
            vy = vy + (uy - vy) * 0.2;
          } else {
            // 정지/상태 기반: 상태 좌표로 천천히 수렴
            vx = vis.x + (ux - vis.x) * 0.28;
            vz = vis.z + (uz - vis.z) * 0.28;
            vy = vis.y + (uy - vis.y) * 0.28;
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
          const labelText = `${u.name || '시민'} ${unitEmoji(u)}`;
          let entry = labelById.get(id);
          if(!entry){ entry = makeLabelSprite(labelText); labelById.set(id, entry); }
          if(entry.lastText !== labelText){ entry.draw(labelText); entry.tex.needsUpdate = true; entry.lastText = labelText; }
          entry.sprite.position.copy(headPos.clone().add(new THREE.Vector3(0, 0.9*size, 0)));
          entry.sprite.visible = true;

          // 선택된 유닛 할로
          if(selectedUnitId && selectedUnitId === id){
            haloSprite.position.copy(headPos.clone().add(new THREE.Vector3(0, 0.2*size, 0)));
            haloSprite.scale.set(1.6*size, 1.6*size, 1);
            haloSprite.visible = true;
          }
        }
      }

      // 보이지 않는 라벨 정리
      for(const [id, entry] of labelById){ if(!seenIds.has(id)) { entry.sprite.visible = false; } }
      if(!selectedUnitId){ haloSprite.visible = false; }

      // 내부 배회자는 비활성화(테스트용 비주얼 제거)
      // 사용 개수만 렌더(잔상/깜빡임 방지)
      for(const k in parts){ parts[k].count = usedCount; parts[k].instanceMatrix.needsUpdate = true; }
      lastRenderT = now;
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
      unsubSel();
      setIsReady(false);
    };
  }, [threeRef, count, maxCount]);

  return null;
}

