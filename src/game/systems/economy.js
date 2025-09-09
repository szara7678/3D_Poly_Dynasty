import { state, setRes } from "../state";

export function runTaxes(){
  const pop = state.population; if(!pop) return;
  const town = Object.values(state.buildings).find(b=>b.type==="town_hall");
  const adminAvg = adminAverage();
  const townLvl = town?.level||1; const mult = 1 + adminAvg*0.005 + 0.1*(townLvl-1);
  const base = 1.0; const gain = Math.floor(pop * base * mult);
  setRes({ gold: gain });
}

function adminAverage(){
  const workers = Object.values(state.units).filter(u=>u.assignedBuildingId && (u.skills?.Admin||0)>0);
  if(!workers.length) return 0; let s=0; for(const u of workers) s += (u.skills.Admin||0); return s/workers.length;
}


