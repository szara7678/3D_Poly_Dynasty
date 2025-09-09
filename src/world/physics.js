// 간단한 물리/경계 유틸
export function clampToBounds(agent, bounds = 140){
  if(agent.x < -bounds){ agent.x = -bounds; agent.dir = Math.atan2(agent.z, agent.x) + Math.PI; }
  if(agent.x > bounds){ agent.x = bounds; agent.dir = Math.atan2(agent.z, agent.x) + Math.PI; }
  if(agent.z < -bounds){ agent.z = -bounds; agent.dir = Math.atan2(agent.z, agent.x) + Math.PI; }
  if(agent.z > bounds){ agent.z = bounds; agent.dir = Math.atan2(agent.z, agent.x) + Math.PI; }
}


