import React, { useRef, useEffect } from "react";
import { state, subscribe, unassignUnit, assignUnitToBuilding, idleUnits, setSelectedBuilding, setSelectedUnit, callUnitToBuilding, exportUnitFromBuilding, setUnitName, setBuildingName } from "../game/state";
import { BUILDING_DEFS } from "../game/content/buildings";

export default function Inspector(){
  const [, force] = React.useReducer(x=>x+1,0);
  const [editingName, setEditingName] = React.useState(null);
  const [tempName, setTempName] = React.useState("");
  const inspectorRef = useRef(null);
  
  React.useEffect(()=>{ const u = subscribe(()=>force()); return u; },[]);
  
  // 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inspectorRef.current && !inspectorRef.current.contains(event.target)) {
        // 인스펙터 외부 클릭 시 선택 해제
        if (state.ui.selectedBuildingId) {
          setSelectedBuilding(null);
        }
        if (state.ui.selectedUnitId) {
          setSelectedUnit(null);
        }
      }
    };

    const selBId = state.ui.selectedBuildingId;
    const selUId = state.ui.selectedUnitId;
    if (selBId || selUId) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [state.ui.selectedBuildingId, state.ui.selectedUnitId]);

  const selBId = state.ui.selectedBuildingId;
  const selUId = state.ui.selectedUnitId;
  if(!selBId && !selUId) return null;

  const handleNameEdit = (type, id, currentName) => {
    setEditingName(type === 'unit' ? `unit_${id}` : `building_${id}`);
    setTempName(currentName);
  };

  const handleNameSave = () => {
    if (editingName?.startsWith('unit_')) {
      const unitId = editingName.replace('unit_', '');
      setUnitName(unitId, tempName);
    } else if (editingName?.startsWith('building_')) {
      const buildingId = editingName.replace('building_', '');
      setBuildingName(buildingId, tempName);
    }
    setEditingName(null);
    setTempName("");
  };

  const handleNameCancel = () => {
    setEditingName(null);
    setTempName("");
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleNameSave();
    } else if (e.key === 'Escape') {
      handleNameCancel();
    }
  };

  if(selUId){
    const u = state.units[selUId]; if(!u) return null;
    const stats = u.stats||{}; const talents = u.talents||{}; const practice = u.practice||{}; const inv = u.inventory||{ items:{}, equipment:{} };
    const skillOrder = ['Sword', 'Magic', 'Admin', 'Farming', 'Woodcutting', 'Mining', 'Gathering', 'Smithing'];
    const skillEntries = skillOrder.map(skill => [skill, talents[skill] || 0]).filter(([_, value]) => value > 0);
    const invEntries = Object.entries(inv.items||{});

    return (
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur rounded-2xl shadow-lg p-3 w-[720px] text-sm" ref={inspectorRef}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {editingName === `unit_${u.id}` ? (
              <input
                type="text"
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
                onKeyDown={handleKeyPress}
                onBlur={handleNameSave}
                className="font-semibold bg-transparent border-b border-slate-300 focus:border-slate-500 outline-none"
                autoFocus
              />
            ) : (
              <div className="font-semibold">{u.name}</div>
            )}
            <button 
              className="text-slate-400 hover:text-slate-600 text-sm"
              onClick={() => handleNameEdit('unit', u.id, u.name)}
            >
              ✏️
            </button>
          </div>
          <button className="text-slate-400 hover:text-slate-600 text-lg font-bold" onClick={()=>setSelectedUnit(null)}>×</button>
        </div>
        <div className="mt-2 grid grid-cols-3 gap-3">
          <div className="border rounded-lg p-2 h-56 flex flex-col">
            <div className="font-medium text-slate-700 mb-1">기본 정보</div>
            <div className="flex-1 overflow-auto space-y-1">
              <div className="text-xs">
                <div className="font-semibold">레벨: {u.level||1}</div>
                <div className="font-semibold">HP: {u.hp||0}/{u.hpMax||0}</div>
                <div className="font-semibold">MP: {u.mp||0}/{u.mpMax||0}</div>
              </div>
              <div className="space-y-1 text-xs mt-2">
                <div>공격력: <span className="font-semibold">{u.combatStats?.attack||0}</span></div>
                <div>방어력: <span className="font-semibold">{u.combatStats?.defense||0}</span></div>
                <div>마법공격: <span className="font-semibold">{u.combatStats?.magicAttack||0}</span></div>
                <div className="grid grid-cols-2">
                  <span>STR: <span className="font-semibold">{stats.STR||0}</span></span>
                  <span className="text-left">AGI: <span className="font-semibold">{stats.AGI||0}</span></span>
                </div>
                <div className="grid grid-cols-2">
                  <span>VIT: <span className="font-semibold">{stats.VIT||0}</span></span>
                  <span className="text-left">INT: <span className="font-semibold">{stats.INT||0}</span></span>
                </div>
              </div>
            </div>
          </div>
          <div className="border rounded-lg p-2 h-56 flex flex-col">
            <div className="font-medium text-slate-700 mb-1">스킬(재능) · 수련치</div>
            <div className="flex-1 overflow-auto pr-1 space-y-1">
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
          <div className="border rounded-lg p-2 h-56 flex flex-col">
            <div className="font-medium text-slate-700 mb-1">인벤토리</div>
            <div className="flex-1 overflow-auto pr-1 space-y-1">
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
    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur rounded-2xl shadow-lg p-3 w-[520px] text-sm" ref={inspectorRef}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {editingName === `building_${b.id}` ? (
            <input
              type="text"
              value={tempName}
              onChange={(e) => setTempName(e.target.value)}
              onKeyDown={handleKeyPress}
              onBlur={handleNameSave}
              className="font-semibold bg-transparent border-b border-slate-300 focus:border-slate-500 outline-none"
              autoFocus
            />
          ) : (
            <div className="font-semibold">{b.name || def.name || b.type} Lv.{b.level||1}</div>
          )}
          <button 
            className="text-slate-400 hover:text-slate-600 text-sm"
            onClick={() => handleNameEdit('building', b.id, b.name || def.name || b.type)}
          >
            ✏️
          </button>
        </div>
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


