import { state, notify, addUnit } from "../state";
import { createRandomCitizen } from "../factory/citizen";

// 간단 이동 시스템: moveTo가 지정된 유닛을 목표로 이동
export function runMovement(){
  const dt = 0.5; // FIXED_DT
  const speedBase = 2.2; // m/s 기준(게임 스케일)
  let moved = false;
  
  for(const id in state.units){
    const u = state.units[id]; if(!u) continue;
    const target = u.moveTo; if(!target) continue;
    const pos = u.pos || { x:0, y:0, z:0 };
    const dx = target.x - pos.x; const dz = target.z - pos.z;
    const dist = Math.hypot(dx, dz);
    
    if(dist < 0.05){ 
      u.pos.x = target.x; u.pos.z = target.z; u.moveTo = null; 
      
      // 부르기 목표가 있으면 도착 후 처리
      if(u.__callTarget){
        const buildingId = u.__callTarget;
        const b = state.buildings[buildingId];
        if(b && b.tile){
          // 시민을 숨김 상태로 변경 (삭제하지 않음)
          u.state = "hidden";
          u.hidden = true;
          u.hiddenBuildingId = buildingId;
        }
        u.__callTarget = null;
      } else {
        u.state = "idle";
      }
      moved = true;
      continue; 
    }
    
    const spd = speedBase * (0.8 + (u.stats?.AGI||5)*0.04); // AGI 강하게 반영
    const step = Math.min(dist, spd * dt);
    const nx = pos.x + (dx/dist) * step; const nz = pos.z + (dz/dist) * step;
    u.pos.x = nx; u.pos.z = nz; u.dir = Math.atan2(nx - pos.x, nz - pos.z);
    if(!u.assignedBuildingId) u.state = "moving";
    moved = true;
  }
  
  if(moved) notify();
}


