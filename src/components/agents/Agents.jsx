import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { clampToBounds } from "../../world/physics";
import { computeBodyBounce, computeWalkSwing } from "./behaviors";

export function Agents({ threeRef, units, count = 260, maxCount = 800 }){
  // 최신 units를 유지하여 메인 렌더 루프가 재마운트 없이 참조
  const unitsRef = useRef(units);
  const [isReady, setIsReady] = React.useState(false);
  
  useEffect(()=>{ 
    console.log(`Agents units prop 변경 감지: ${units.length}개`);
    unitsRef.current = units; 
    
    // 유닛 상태 출력 (간소화)
    if (units.length > 0) {
      console.log(`Agents 렌더링할 유닛: ${units.length}개`);
    }
  }, [units]);

  useEffect(() => {
    const three = threeRef.current; if(!three) return;
    const { scene } = three;
    
    console.log('Agents Three.js 씬 초기화 시작');

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

    function onFrame(){
      const t = performance.now()*0.001;
      const curUnits = unitsRef.current;
      const sourceUnits = Array.isArray(curUnits) ? curUnits.filter(u=>!u.assignedBuildingId) : [];
      const usedCount = sourceUnits.length;
      
      // 디버깅용 로그 (15초마다 출력)
      if(Math.floor(t) % 15 === 0 && Math.floor(t*10) % 10 === 0){
        console.log(`Agents onFrame: 총 유닛 ${curUnits?.length || 0}개, 렌더링할 유닛 ${usedCount}개`);
      }

      // 1) 외부 상태 유닛을 우선 배치
      if(usedCount>0){
        for(let i=0;i<usedCount;i++){
          const u = sourceUnits[i]; if(!u) continue;
          const id = u.id ?? i;
          const prev = prevById.get(id) || { x: u.pos?.x ?? 0, z: u.pos?.z ?? 0 };
          const ux = u.pos?.x ?? 0; const uz = u.pos?.z ?? 0; const uy = (u.pos?.y ?? 0);
          const dx = ux - prev.x; const dz = uz - prev.z;
          const moveDir = Math.atan2(dx, dz);
          const size = (u.size ?? 1.0) * 1.0;
          const prevDir = prevById.get(id)?.dir ?? (Number.isFinite(u.dir) ? u.dir : moveDir);
          const targetDir = Number.isFinite(u.dir) ? u.dir : moveDir;
          // 방향 스무딩
          const angleDiff = ((targetDir - prevDir + Math.PI*3) % (Math.PI*2)) - Math.PI;
          const dir = prevDir + angleDiff * 0.2;
          prevById.set(id, { x: ux, z: uz, dir });

          const facing = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0), dir||0);
          const tBounce = computeBodyBounce(t, size, i*0.37);
          const baseY = Math.max(0.1, 0.7*size) + uy;
          const bodyPos = new THREE.Vector3(ux, baseY + tBounce, uz);
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
        }
      }

      // 내부 배회자는 비활성화(테스트용 비주얼 제거)
      // 사용 개수만 렌더(잔상/깜빡임 방지)
      for(const k in parts){ parts[k].count = usedCount; parts[k].instanceMatrix.needsUpdate = true; }
    }

    // hook into parent's loop
    // 메인 루프에 합류: renderer 프레임 끝에 개입
    let raf;
    const step = ()=>{ onFrame(); raf = requestAnimationFrame(step); };
    raf = requestAnimationFrame(step);
    
    // 초기화 완료 표시
    setIsReady(true);
    console.log('Agents Three.js 씬 초기화 완료');

    return ()=>{ 
      cancelAnimationFrame(raf); 
      for(const k in parts){ scene.remove(parts[k]); parts[k].geometry.dispose(); } 
      setIsReady(false);
    };
  }, [threeRef, count, maxCount]);

  return null;
}

