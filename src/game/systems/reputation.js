import { state } from "../state";

export function runReputation(){
  // 건물 레벨에 따른 명성 증가
  let totalReputationGain = 0;
  
  for(const id in state.buildings){
    const b = state.buildings[id];
    if(b.construct?.active) continue; // 건설 중인 건물은 제외
    
    // 건물 레벨에 따른 명성 증가
    const reputationPerLevel = 0.01; // 레벨당 0.01명성
    totalReputationGain += (b.level || 1) * reputationPerLevel;
  }
  
  // 명성 증가
  state.res.reputation += totalReputationGain;
}


