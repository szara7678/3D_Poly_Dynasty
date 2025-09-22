// 시민 애니메이션 시스템 - 시민 전용 애니메이션 로직

import * as THREE from "three";
import { computeBodyBounce, computeWalkSwing } from "../agents/behaviors";

export class CitizenAnimations {
  
  // 시민 메쉬 생성
  static createCitizenMesh() {
    const group = new THREE.Group();
    
    // Materials
    const mat = new THREE.MeshStandardMaterial({ 
      vertexColors: true, 
      metalness: 0.0, 
      roughness: 0.5 
    });

    // Geometries
    const bodyCylinder = new THREE.CylinderGeometry(0.35, 0.35, 1.2, 22, 1, false);
    const headGeo = new THREE.SphereGeometry(0.35, 24, 20);
    const armGeo = new THREE.CapsuleGeometry(0.10, Math.max(0.01, 0.34 - 2 * 0.10), 12, 12);
    const handGeo = new THREE.SphereGeometry(0.12, 14, 12);
    
    // Add color attributes
    [bodyCylinder, headGeo, armGeo, handGeo].forEach((geo) => {
      const pos = geo.attributes.position; 
      if (!geo.getAttribute('color')) { 
        const arr = new Float32Array(pos.count * 3); 
        for (let i = 0; i < pos.count; i++) { 
          arr[i * 3 + 0] = 1; 
          arr[i * 3 + 1] = 1; 
          arr[i * 3 + 2] = 1; 
        } 
        geo.setAttribute('color', new THREE.BufferAttribute(arr, 3)); 
      }
    });

    // Create meshes
    const body = new THREE.Mesh(bodyCylinder, mat.clone());
    const head = new THREE.Mesh(headGeo, mat.clone());
    const lArm = new THREE.Mesh(armGeo, mat.clone());
    const rArm = new THREE.Mesh(armGeo, mat.clone());
    const lHand = new THREE.Mesh(handGeo, mat.clone());
    const rHand = new THREE.Mesh(handGeo, mat.clone());
    
    // Add to group
    group.add(body);
    group.add(head);
    group.add(lArm);
    group.add(rArm);
    group.add(lHand);
    group.add(rHand);
    
    // Store references for animation
    group.userData = {
      body, head, lArm, rArm, lHand, rHand,
      BASE_ARM_LEN: 0.34
    };
    
    return group;
  }
  
  // 시민 애니메이션 업데이트
  static updateCitizenAnimation(mesh, renderData, citizenData, time) {
    if (!mesh || !mesh.userData) return;
    
    const { position, direction, moving } = renderData;
    const { body, head, lArm, rArm, lHand, rHand, BASE_ARM_LEN } = mesh.userData;
    const size = citizenData.size || 1.0;
    const citizenIndex = citizenData.index || 0;
    
    // 기본 위치 및 회전
    const facing = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), direction);
    
    // 몸체 애니메이션
    const tBounce = computeBodyBounce(time, size, citizenIndex * 0.37);
    const baseY = Math.max(0.1, 0.7 * size);
    const bodyPos = new THREE.Vector3(position.x, position.y + baseY + tBounce, position.z);
    
    // 기울임 효과
    const tiltZ = Math.sin(time * 4 + (citizenIndex * 0.37)) * 0.08;
    const bodyTilt = facing.clone().multiply(
      new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), tiltZ * 0.8)
    );
    
    // 몸체 위치 설정
    body.position.copy(bodyPos);
    body.quaternion.copy(bodyTilt);
    body.scale.setScalar(size);
    
    // 머리 위치 설정
    const headPos = bodyPos.clone().add(new THREE.Vector3(0, 1.05 * size, 0));
    head.position.copy(headPos);
    head.quaternion.copy(facing);
    head.scale.setScalar(size);
    
    // 팔 애니메이션
    const shoulder = bodyPos.clone().add(new THREE.Vector3(0, 0.46 * size, 0));
    const right = new THREE.Vector3(1, 0, 0).applyQuaternion(facing);
    const forward = new THREE.Vector3(0, 0, 1).applyQuaternion(facing);
    const armOut = 0.50 * size;
    
    const shoulderL = shoulder.clone()
      .addScaledVector(right, -armOut)
      .addScaledVector(forward, 0.12 * size);
    const shoulderR = shoulder.clone()
      .addScaledVector(right, armOut)
      .addScaledVector(forward, 0.12 * size);
    
    // 걷기 애니메이션
    const { walkCycle, swingFwd, swingUp } = computeWalkSwing(time, size, citizenIndex * 0.37, moving);
    
    const handL = shoulderL.clone()
      .addScaledVector(forward, (moving ? walkCycle : 0) * swingFwd)
      .addScaledVector(right, -0.02 * size)
      .add(new THREE.Vector3(0, -0.35 * size + (moving ? Math.abs(walkCycle) : 0) * swingUp, 0));
      
    const handR = shoulderR.clone()
      .addScaledVector(forward, (moving ? -walkCycle : 0) * swingFwd)
      .addScaledVector(right, 0.02 * size)
      .add(new THREE.Vector3(0, -0.35 * size + (moving ? Math.abs(walkCycle) : 0) * swingUp, 0));

    // 팔 위치 및 회전 계산
    const armPosL = shoulderL.clone().lerp(handL, 0.5);
    const armPosR = shoulderR.clone().lerp(handR, 0.5);
    const armDirL = new THREE.Vector3().subVectors(handL, shoulderL);
    const armDirR = new THREE.Vector3().subVectors(handR, shoulderR);
    const armLenL = Math.max(0.001, armDirL.length());
    const armLenR = Math.max(0.001, armDirR.length());
    
    armDirL.normalize(); 
    armDirR.normalize();
    
    const armRotL = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, -1, 0), armDirL);
    const armRotR = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, -1, 0), armDirR);
    
    // 팔 설정
    lArm.position.copy(armPosL);
    lArm.quaternion.copy(armRotL);
    lArm.scale.set(size * 0.85, (armLenL / BASE_ARM_LEN) * size * 0.85, size * 0.85);
    
    rArm.position.copy(armPosR);
    rArm.quaternion.copy(armRotR);
    rArm.scale.set(size * 0.85, (armLenR / BASE_ARM_LEN) * size * 0.85, size * 0.85);
    
    // 손 설정
    lHand.position.copy(handL);
    lHand.quaternion.copy(facing);
    lHand.scale.set(0.8, 0.8, 0.8);
    
    rHand.position.copy(handR);
    rHand.quaternion.copy(facing);
    rHand.scale.set(0.8, 0.8, 0.8);
    
    // 전체 메쉬 위치는 (0,0,0)으로 유지 (개별 파트들이 이미 월드 좌표 사용)
    mesh.position.set(0, 0, 0);
    mesh.quaternion.set(0, 0, 0, 1);
    
    return {
      headPosition: headPos,
      bodyPosition: bodyPos
    };
  }
  
  // 시민 색상 설정
  static setCitizenColor(mesh, appearance) {
    if (!mesh || !mesh.userData) return;
    
    const { body, head, lArm, rArm, lHand, rHand } = mesh.userData;
    
    // 기본 색상
    let topColor = '#6b705c';
    let bottomColor = '#5c677d';
    let skinColor = '#ddbea9';
    
    if (appearance && appearance.outfit) {
      topColor = appearance.outfit.topColor || topColor;
      bottomColor = appearance.outfit.bottomColor || bottomColor;
    }
    
    const topColorObj = new THREE.Color(topColor);
    const bottomColorObj = new THREE.Color(bottomColor);
    const skinColorObj = new THREE.Color(skinColor);
    
    // 색상 적용
    body.material.color.copy(topColorObj);
    head.material.color.copy(skinColorObj);
    lArm.material.color.copy(topColorObj);
    rArm.material.color.copy(topColorObj);
    lHand.material.color.copy(skinColorObj);
    rHand.material.color.copy(skinColorObj);
  }
}
