import { state } from "../state";

export function runBuildingXP(){
  for(const id in state.buildings){
    const b = state.buildings[id];
    if(b.construct?.active) continue;
    if(typeof b.xp !== "number") b.xp = 0;
    if(typeof b.level !== "number") b.level = 1;
    if(typeof b.xpToNext !== "number") b.xpToNext = 50;
    
    // 패시브 증가 제거 - 생산/수련 완료 시에만 경험치 증가
    // b.xp += 0.2; // 제거됨
    
    // 레벨업 체크
    while(b.xp >= b.xpToNext){
      b.xp -= b.xpToNext; 
      b.level += 1; 
      b.capacity = (b.capacity||1) + 1; 
      b.hpMax = Math.round((b.hpMax||100) * 1.1); 
      if(b.hp) b.hp = Math.min(b.hp, b.hpMax);
      b.xpToNext = Math.round(b.xpToNext * 1.35);
    }
  }
}


