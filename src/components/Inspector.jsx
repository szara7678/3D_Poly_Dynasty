import React from "react";
import { state, subscribe, unassignUnit, assignUnitToBuilding, idleUnits, setSelectedBuilding, setSelectedUnit, callUnitToBuilding, exportUnitFromBuilding } from "../game/state";
import { BUILDING_DEFS } from "../game/content/buildings";

export default function Inspector(){
  const [, force] = React.useReducer(x=>x+1,0);
  React.useEffect(()=>{ const u = subscribe(()=>force()); return u; },[]);
  const selBId = state.ui.selectedBuildingId;
  const selUId = state.ui.selectedUnitId;
  if(!selBId && !selUId) return null;

  if(selUId){
    const u = state.units[selUId]; if(!u) return null;
    const stats = u.stats||{}; const talents = u.talents||{}; const practice = u.practice||{}; const inv = u.inventory||{ items:{}, equipment:{} };
    const skillEntries = Object.entries(talents).sort((a,b)=>b[1]-a[1]);
    const invEntries = Object.entries(inv.items||{});

    return (
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur rounded-2xl shadow-lg p-3 w-[720px] text-sm relative">
        <div className="flex items-center justify-between pr-6">
          <div className="font-semibold">{u.name}</div>
        </div>
        <button
          className="absolute right-2 top-2 text-slate-500 hover:text-slate-800"
          aria-label="닫기"
          onClick={()=>setSelectedUnit(null)}
        >
          ✕
        </button>
        <div className="mt-2 grid grid-cols-3 gap-3">
          <div className="border rounded-lg p-2">
            <div className="space-y-1 text-xs">
              <div>레벨: <span className="font-semibold">{u.level||1}</span></div>
              <div>HP: <span className="font-semibold">{u.hp||0}/{u.hpMax||0}</span></div>
              <div>MP: <span className="font-semibold">{u.mp||0}/{u.mpMax||0}</span></div>
              <div>STR: <span className="font-semibold">{stats.STR||0}</span></div>
              <div>AGI: <span className="font-semibold">{stats.AGI||0}</span></div>
              <div>VIT: <span className="font-semibold">{stats.VIT||0}</span></div>
              <div>INT: <span className="font-semibold">{stats.INT||0}</span></div>
              <div>공격력: <span className="font-semibold">{u.combatStats?.attack||0}</span></div>
              <div>방어력: <span className="font-semibold">{u.combatStats?.defense||0}</span></div>
              <div>마법공격: <span className="font-semibold">{u.combatStats?.magicAttack||0}</span></div>
            </div>
          </div>
          <div className="border rounded-lg p-2">
            <div className="font-medium text-slate-700 mb-1">스킬(재능) · 수련치</div>
            <div className="max-h-56 overflow-auto pr-1 space-y-1">
              {skillEntries.map(([k,v])=> {
                const p = practice[k] ?? 0;
                return (
                  <div key={k} className="flex items-center justify-between">
                    <span>{k} (<span className="text-slate-600">{v}</span>)</span>
                    <span className="font-semibold">{p}</span>
                  </div>
                );
              })}
              {skillEntries.length===0 && <div className="text-xs text-slate-400">스킬 없음</div>}
            </div>
          </div>
          <div className="border rounded-lg p-2">
            <div className="font-medium text-slate-700 mb-1">인벤토리</div>
            <div className="max-h-56 overflow-auto pr-1 space-y-1">
              {invEntries.map(([k,c])=> (
                <div key={k} className="flex items-center justify-between">
                  <span>{k}</span>
                  <span className="font-semibold">{c}</span>
                </div>
              ))}
              {invEntries.length===0 && <div className="text-xs text-slate-400">아이템 없음</div>}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const b = state.buildings[selBId]; if(!b) return null;
  const def = BUILDING_DEFS[b.type]||{};
  const workers = (b.workers||[]).map(id=>state.units[id]).filter(Boolean);
  const cap = b.capacity||0;
  const assignable = idleUnits();

  const onAssign = (uid)=>{ assignUnitToBuilding(uid, b.id); };
  const onUnassign = (uid)=>{ unassignUnit(uid); };
  const onCall = (uid)=>{ callUnitToBuilding(uid, b.id); };
  const onExport = (uid)=>{ exportUnitFromBuilding(uid, b.id); };

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
              <div key={u.id} className={`flex items-center justify-between border rounded-lg px-2 py-1 ${u.hidden ? 'bg-slate-100' : ''}`}>
                <span className={u.hidden ? 'text-slate-500' : ''}>{u.name}</span>
                <div className="flex gap-1">
                  {u.hidden ? (
                    <button className="text-green-600 hover:underline text-xs" onClick={()=>onExport(u.id)}>내보내기</button>
                  ) : (
                    <button className="text-blue-600 hover:underline text-xs" onClick={()=>onCall(u.id)}>부르기</button>
                  )}
                  <button className="text-red-600 hover:underline text-xs" onClick={()=>onUnassign(u.id)}>해제</button>
                </div>
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


