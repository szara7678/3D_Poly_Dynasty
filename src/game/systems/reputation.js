import { state } from "../state";

export function runReputation(){
  while(state.res.reputation >= state.nextPopRepReq){
    state.res.reputation -= state.nextPopRepReq;
    state.population += 1; state.popCap += 1; // 기본 증가
    state.nextPopRepReq = Math.round(state.nextPopRepReq * 1.2);
  }
}


