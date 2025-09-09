import React from "react";
import { state, subscribe, unassignUnit, assignUnitToBuilding, idleUnits, setSelectedBuilding } from "../game/state";
import { BUILDING_DEFS } from "../game/content/buildings";

export default function Inspector(){
  const [, force] = React.useReducer(x=>x+1,0);
  React.useEffect(()=>{ const u = subscribe(()=>force()); return u; },[]);
  const selId = state.ui.selectedBuildingId; if(!selId) return null;
  const b = state.buildings[selId]; if(!b) return null;
  const def = BUILDING_DEFS[b.type]||{};
  const workers = (b.workers||[]).map(id=>state.units[id]).filter(Boolean);
  const cap = b.capacity||0;
  const assignable = idleUnits();

  const onAssign = (uid)=>{ assignUnitToBuilding(uid, b.id); };
  const onUnassign = (uid)=>{ unassignUnit(uid); };

  return (
    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur rounded-2xl shadow-lg p-3 w-[520px] text-sm">
      <div className="flex items-center justify-between">
        <div className="font-semibold">{def.name||b.type} Lv.{b.level||1}</div>
        <div className="text-xs text-slate-600">HP {b.hp||0}/{b.hpMax||0} · XP {Math.floor(b.xp||0)}/{b.xpToNext||0}</div>
      </div>
      <div className="mt-1 text-right">
        <button className="text-xs text-slate-600 hover:underline" onClick={()=>setSelectedBuilding(null)}>닫기</button>
      </div>
      {b.construct?.active && (
        <div className="mt-2 text-xs text-emerald-700">공사 중 · 남은 시간 {Math.max(0,b.construct?.eta||0).toFixed(1)}s · 진행 {(Math.min(1,b.construct?.progress||0)*100).toFixed(0)}%</div>
      )}
      <div className="mt-2 grid grid-cols-2 gap-3">
        <div>
          <div className="text-xs text-slate-600 mb-1">배치 인원 {workers.length}/{cap}</div>
          <div className="space-y-1 max-h-32 overflow-auto pr-1">
            {workers.map(u=> (
              <div key={u.id} className="flex items-center justify-between border rounded-lg px-2 py-1">
                <span>{u.name}</span>
                <button className="text-red-600 hover:underline" onClick={()=>onUnassign(u.id)}>해제</button>
              </div>
            ))}
            {workers.length===0 && <div className="text-xs text-slate-400">배치된 인원이 없습니다</div>}
          </div>
        </div>
        <div>
          <div className="text-xs text-slate-600 mb-1">유휴 인원</div>
          <div className="space-y-1 max-h-32 overflow-auto pr-1">
            {assignable.slice(0,20).map(u=> (
              <div key={u.id} className="flex items-center justify-between border rounded-lg px-2 py-1">
                <span>{u.name}</span>
                <button className="text-emerald-700 hover:underline disabled:text-slate-400" disabled={(b.workers||[]).length>=cap} onClick={()=>onAssign(u.id)}>배치</button>
              </div>
            ))}
            {assignable.length===0 && <div className="text-xs text-slate-400">유휴 인원이 없습니다</div>}
          </div>
        </div>
      </div>
    </div>
  );
}


