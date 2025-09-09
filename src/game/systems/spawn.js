import { state, uid } from "../state";

let cooldown = 12; let timer = 0;

export function runSpawn(){
  // 간단 스텁: 아직 실제 몬스터/전투 없음. 주기적으로 명성 +1
  timer += 0.5; // FIXED_DT
  if(timer >= cooldown){
    timer = 0; cooldown = Math.max(4, cooldown * 0.98);
    state.res.reputation = (state.res.reputation||0) + 1;
    // 향후: monster_den 기준으로 유닛 스폰/배회
  }
}


