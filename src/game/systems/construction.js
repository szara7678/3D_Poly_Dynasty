import { state, uid, addUnit, notify } from "../state";
import { createRandomCitizen } from "../factory/citizen";

export function runConstruction(){
  for(const id in state.buildings){
    const b = state.buildings[id]; if(!b.construct) continue;
    if(!b.construct.active) continue;
    const eta = b.construct.eta||0; const prog = b.construct.progress||0;
    const dt = 0.5; // FIXED_DT
    // Admin/회관 레벨 기반 건설 가속
    const town = Object.values(state.buildings).find(tb=>tb.type==="town_hall" && !tb.construct?.active);
    const townLvl = town?.level||1;
    let adminAvg = 0, n=0;
    if(town?.workers?.length){
      for(const wid of town.workers){ const u = state.units[wid]; if(!u) continue; adminAvg += (u.skills?.Admin||0); n++; }
      if(n>0) adminAvg/=n; else adminAvg=0;
    }
    const speedMult = 1 + adminAvg*0.005 + 0.1*(townLvl-1);
    const dtEff = dt * speedMult;
    const buildTime = Math.max(1, (b.build?.time ?? 10));
    if(eta>0){ b.construct.eta = Math.max(0, eta - dtEff); }
    b.construct.progress = Math.min(1, prog + dtEff/buildTime);
    if(b.construct.progress>=1){
      b.construct.active=false;
      // 건설 완료 효과: 마을 회관이면 인구 +3
      if(b.type === "town_hall"){
        state.population = (state.population||0) + 3;
        // 회관 주변에 시민 3명 스폰(유휴) — 무작위 생성 유틸 사용
        for(let i=0;i<3;i++){
          // 회관에서 더 멀리, 기존 건물과 겹치지 않게 스폰(반경 5~7m)
          let ux=0, uz=0; let tries=0;
          while(true){
            const r = 5 + Math.random()*2; const a = Math.random()*Math.PI*2;
            ux = (b.tile?.x||0) + Math.cos(a)*r; uz = (b.tile?.z||0) + Math.sin(a)*r;
            let overlaps=false; for(const id2 in state.buildings){ const ob=state.buildings[id2]; const dx=(ob.tile?.x||0)-ux; const dz=(ob.tile?.z||0)-uz; if(dx*dx+dz*dz < 4.0){ overlaps=true; break; } }
            if(!overlaps || tries++>10) break;
          }
          const citizen = createRandomCitizen({ x: ux, y: 0, z: uz });
          addUnit(citizen);
        }
        state.res.reputation = (state.res.reputation||0) + 5;
        // 명시적으로 상태 변경 알림
        notify();
      }
    }
  }
}


