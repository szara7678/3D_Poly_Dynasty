// 간단한 물리/경계 유틸
export function clampToBounds(agent, bounds = 140){
  if(agent.x < -bounds){ agent.x = -bounds; agent.dir = Math.atan2(agent.z, agent.x) + Math.PI; }
  if(agent.x > bounds){ agent.x = bounds; agent.dir = Math.atan2(agent.z, agent.x) + Math.PI; }
  if(agent.z < -bounds){ agent.z = -bounds; agent.dir = Math.atan2(agent.z, agent.x) + Math.PI; }
  if(agent.z > bounds){ agent.z = bounds; agent.dir = Math.atan2(agent.z, agent.x) + Math.PI; }
}

// 땅 높이 계산 함수 (노이즈 기반 지형)
export function getGroundHeight(x, z) {
  // 간단한 노이즈 기반 지형 높이 계산
  const scale = 0.01;
  const height = Math.sin(x * scale) * 2 + Math.cos(z * scale) * 1.5 + Math.sin(x * scale * 2 + z * scale) * 0.5;
  return Math.max(0, height); // 최소 0 이상 유지
}

// 객체를 땅 위에 배치
export function placeOnGround(object, offset = 0) {
  if (object && object.position) {
    const groundY = getGroundHeight(object.position.x, object.position.z);
    object.position.y = groundY + offset;
  }
}

// 객체가 땅 위에 있는지 확인
export function isOnGround(object, tolerance = 0.1) {
  if (!object || !object.position) return false;
  const groundY = getGroundHeight(object.position.x, object.position.z);
  return Math.abs(object.position.y - groundY) <= tolerance;
}


