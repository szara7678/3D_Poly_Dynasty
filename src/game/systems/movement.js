import { state, notify, addUnit } from "../state";
import { createRandomCitizen } from "../factory/citizen";
import { getGroundHeight } from "../../world/physics";

// 엔티티별 시각적 위치 캐시
const visualPositions = new Map();
const previousDirections = new Map();

// 중앙 이동 함수 - 시민과 몬스터 모두 사용
export function moveEntity(entity, targetPosition, deltaTime, entityType = 'citizen') {
  if (!entity || !targetPosition) return false;
  
  const pos = entity.pos || entity.position || { x: 0, y: 0, z: 0 };
  const dx = targetPosition.x - pos.x;
  const dz = targetPosition.z - pos.z;
  const dist = Math.hypot(dx, dz);
  
  // 도달 판정
  if (dist < 0.05) {
    pos.x = targetPosition.x;
    pos.z = targetPosition.z;
    
    // 땅 높이 적용
    pos.y = getGroundHeight(pos.x, pos.z);
    
    if (entity.moveTo) entity.moveTo = null;
    if (entity.squadTarget) entity.squadTarget = null;
    
    // 시민 특별 처리
    if (entityType === 'citizen') {
      if (entity.__callTarget) {
        const buildingId = entity.__callTarget;
        const b = state.buildings[buildingId];
        if (b && b.tile) {
          entity.state = "hidden";
          entity.hidden = true;
          entity.hiddenBuildingId = buildingId;
        }
        entity.__callTarget = null;
      } else {
        entity.state = "idle";
      }
    }
    
    return false; // 이동 완료
  }
  
  // 속도 계산
  const speedBase = 2.2; // m/s 기준
  const dt = deltaTime || 0.5; // FIXED_DT
  const agility = entity.stats?.AGI || 5;
  const speed = speedBase * (0.8 + agility * 0.04);
  
  // 이동 계산
  const step = Math.min(dist, speed * dt);
  const nx = pos.x + (dx / dist) * step;
  const nz = pos.z + (dz / dist) * step;
  
  // 위치 업데이트
  pos.x = nx;
  pos.z = nz;
  pos.y = getGroundHeight(nx, nz);
  
  // 방향 업데이트
  entity.dir = Math.atan2(dx, dz);
  
  // 상태 업데이트
  if (entityType === 'citizen' && !entity.assignedBuildingId) {
    entity.state = "moving";
  } else if (entityType === 'monster') {
    entity.state = entity.state || "moving";
  }
  
  return true; // 이동 중
}

// 시각적 위치 스무딩 함수
export function getSmoothedPosition(entityId, actualPosition, deltaTime) {
  const current = visualPositions.get(entityId) || { ...actualPosition };
  
  // 스무딩 계수
  const smoothFactor = 0.28; // 정지 상태
  const movingSmoothFactor = 0.2; // 이동 중
  
  // 거리 계산
  const dx = actualPosition.x - current.x;
  const dz = actualPosition.z - current.z;
  const distance = Math.hypot(dx, dz);
  
  // 이동 중인지 판단
  const isMoving = distance > 0.01;
  const factor = isMoving ? movingSmoothFactor : smoothFactor;
  
  // 위치 보간
  const smoothed = {
    x: current.x + (actualPosition.x - current.x) * factor,
    y: current.y + (actualPosition.y - current.y) * (isMoving ? movingSmoothFactor : factor),
    z: current.z + (actualPosition.z - current.z) * factor
  };
  
  visualPositions.set(entityId, smoothed);
  return smoothed;
}

// 방향 스무딩 함수
export function getSmoothedDirection(entityId, targetDirection) {
  const prevDir = previousDirections.get(entityId) || targetDirection;
  
  // 방향 차이 계산 (-π ~ π 범위로 정규화)
  const angleDiff = ((targetDirection - prevDir + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
  const smoothedDir = prevDir + angleDiff * 0.15;
  
  previousDirections.set(entityId, smoothedDir);
  return smoothedDir;
}

// 캐시 정리 함수
export function clearMovementCache(entityId) {
  visualPositions.delete(entityId);
  previousDirections.delete(entityId);
}

// 기존 시민 이동 시스템 (하위 호환성 유지)
export function runMovement(){
  const dt = 0.5; // FIXED_DT
  let moved = false;
  
  for(const id in state.units){
    const u = state.units[id]; 
    if (!u) continue;
    
    const target = u.moveTo; 
    if (!target) continue;
    
    // 새로운 통합 이동 함수 사용
    const isMoving = moveEntity(u, target, dt, 'citizen');
    if (isMoving || !u.moveTo) {
      moved = true;
    }
  }
  
  if(moved) notify();
}



