import React from "react";
import { state, uid, addBuilding, canAfford, spend, assignUnitToBuilding, idleUnits, setPlacing } from "../game/state";
import { BUILDING_DEFS } from "../game/content/buildings";

export default function BuildMenu(){
  const [, force] = React.useReducer(x=>x+1,0);
  React.useEffect(()=>{
    const h = setInterval(()=>force(), 500);
    return ()=>clearInterval(h);
  },[]);

  const tryBuild = (type)=>{
    const def = BUILDING_DEFS[type]; if(!def) return;
    const cost = def.build?.cost || {};
    if(!canAfford(cost)) return; // 비용 부족 시 고스트 진입하지 않음
    // 수동 배치 모드 진입: 맵 클릭 시 배치 확정
    setPlacing(type);
  };

  const res = state.res;
  return (
    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur rounded-xl shadow-lg p-3 text-sm w-56">
      <div className="font-semibold mb-2">건설 메뉴</div>
      <div className="space-y-2 max-h-[50vh] overflow-auto pr-1">
        {Object.keys(BUILDING_DEFS).filter(t=>!["monster_den", "goblin_den", "orc_den"].includes(t)).map((t)=>{
          const d = BUILDING_DEFS[t]; const cost = d.build?.cost || {}; const affordable = canAfford(cost);
          return (
            <button key={t} onClick={()=>tryBuild(t)} disabled={!affordable}
              className={`w-full flex items-center justify-between border rounded-lg px-2 py-1 ${affordable?"bg-emerald-50 hover:bg-emerald-100 border-emerald-300":"bg-gray-100 text-gray-400 border-gray-200"}`}>
              <span>{d.name}</span>
              <span className="text-[11px] tabular-nums">
                {Object.entries(cost).map(([k,v])=>`${k}:${v}`).join(" ")||"무료"}
              </span>
            </button>
          );
        })}
      </div>
      {state.ui.placing && (
        <div className="mt-2 text-xs text-emerald-700">
          배치 모드: {BUILDING_DEFS[state.ui.placing]?.name} — 지도에서 위치를 클릭하세요
        </div>
      )}
    </div>
  );
}


