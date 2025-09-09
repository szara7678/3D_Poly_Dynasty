import { state, setRes } from "../state";
import { BUILDING_DEFS } from "../content/buildings";

// 간단 생산 루프 — 배치 인원/스킬/레벨 보정 포함(초안)
export function runProduction(){
  for(const id in state.buildings){
    const b = state.buildings[id]; const def = BUILDING_DEFS[b.type]; if(!def) continue;
    if(def.produces && b.workers?.length){
      const workers = b.workers.map(wid => state.units[wid]).filter(Boolean);
      const skillKey = def.skill; const levelMult = 1 + 0.08*(b.level-1);
      const cap = Math.max(1, b.capacity||1);
      let mult = levelMult;
      for(const u of workers){
        const s = (u.skills?.[skillKey]||0)/100; mult += (s*0.6)/cap;
        const { STR=0,AGI=0,VIT=0,INT=0 } = u.stats||{};
        mult += (STR*0.02 + AGI*0.01 + VIT*0.02 + INT*0.03)/100;
      }
      for(const rk in def.produces){
        const base = def.produces[rk].base; const amt = base * mult * 0.5; // 0.5 = FIXED_DT 보정
        setRes({ [rk]: amt });
      }
    }
  }
}


