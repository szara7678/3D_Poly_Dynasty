import React, { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { state, subscribe, unassignUnit, assignUnitToBuilding, idleUnits, setSelectedBuilding, setSelectedUnit, callUnitToBuilding, exportUnitFromBuilding, setUnitName, setBuildingName, removeBuilding, setSelectedItem, setPlacing } from "../game/state";
import { BUILDING_DEFS } from "../game/content/buildings";
import { getEquipmentQualityColor } from "../game/content/items";
import { getCitizenEquipment } from "../game/systems/warehouse";
import { updateCitizenCombatStats } from "../game/factory/citizen";
import ItemInspector from "./ItemInspector";
import CraftingInspector from "./CraftingInspector";
import { ITEM_DEFINITIONS } from "../game/content/items";
import { showNotification } from "../utils/notificationManager";

export default function Inspector(){
  const [, force] = React.useReducer(x=>x+1,0);
  const [editingName, setEditingName] = React.useState(null);
  const [tempName, setTempName] = React.useState("");
  const [showDemolishModal, setShowDemolishModal] = React.useState(false);
  const [buildingMoveMode, setBuildingMoveMode] = useState(null);
  const inspectorRef = useRef(null);
  
  React.useEffect(()=>{ const u = subscribe(()=>force()); return u; },[]);
  
  const selBId = state.ui.selectedBuildingId;
  const selUId = state.ui.selectedUnitId;
  const selItemId = state.ui.selectedItemId;
  
  // 건물 선택이 바뀔 때 모달 상태 초기화
  React.useEffect(() => {
    setShowDemolishModal(false);
    setBuildingMoveMode(null);
  }, [selBId]);
  
  // 외부 클릭 감지 (모달 열렸을 때는 무시, 우클릭은 무시)
  useEffect(() => {
    const handleClickOutside = (event) => {
      // 우클릭(mouseup e.button===2 에 대응)이나 모달 열림 시에는 외부클릭 처리하지 않음
      if (event.button === 2 || showDemolishModal) return;
      if (inspectorRef.current && !inspectorRef.current.contains(event.target)) {
        // 인스펙터 외부 클릭 시 선택 해제
        if (state.ui.selectedBuildingId) {
          setSelectedBuilding(null);
        }
        if (state.ui.selectedUnitId) {
          setSelectedUnit(null);
        }
        if (state.ui.selectedItemId) {
          setSelectedItem(null);
        }
      }
    };

    if (selBId || selUId || selItemId) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selBId, selUId, selItemId, showDemolishModal]);
  if(!selBId && !selUId && !selItemId) return null;

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

  const handleDemolish = () => {
    console.log('철거 버튼 클릭됨');
    setShowDemolishModal(true);
    if (typeof window !== 'undefined') window.__INSU_UI_MODAL_OPEN__ = true;
    console.log('모달 상태 변경:', true);
  };

  const handleBuildingMove = (buildingId) => {
    const building = state.buildings[buildingId];
    if (!building) return;
    
    // HP가 최대치가 아니면 이동 불가
    if (!building.construct?.active && (building.hp || 0) < (building.hpMax || 0)) {
      // 화면 중앙에 알림 표시
      showNotification('건물의 HP가 최대치여야 합니다', {
        color: '#ef4444',
        fontSize: '18px',
        duration: 3000
      });
      return;
    }
    
    // 건물 이동 모드 진입
    setBuildingMoveMode(buildingId);
    setPlacing(building.type); // 청사진 모드로 진입
    window.__INSU_BUILDING_MOVE_MODE__ = buildingId; // 전역 변수로 이동 모드 표시
    setSelectedBuilding(null); // 인스펙터 닫기
  };

  const confirmDemolish = () => {
    const selBId = state.ui.selectedBuildingId;
    console.log('철거 확인 - 선택된 건물 ID:', selBId);
    if (selBId) {
      console.log('건물 철거 실행:', selBId);
      removeBuilding(selBId);
      console.log('건물 철거 완료');
    }
    setShowDemolishModal(false);
    if (typeof window !== 'undefined') window.__INSU_UI_MODAL_OPEN__ = false;
  };

  const cancelDemolish = () => {
    setShowDemolishModal(false);
    if (typeof window !== 'undefined') window.__INSU_UI_MODAL_OPEN__ = false;
  };

  if(selUId){
    const u = state.units[selUId]; if(!u) return null;
    
    // 장비 효과를 반영한 시민 스탯 업데이트
    const updatedCitizen = updateCitizenCombatStats(u, state.warehouse);
    
    const stats = updatedCitizen.stats||{}; const talents = updatedCitizen.talents||{}; const practice = updatedCitizen.practice||{}; const inv = updatedCitizen.inventory||{ items:{}, equipment:{} };
    const skillOrder = ['Sword', 'Magic', 'Admin', 'Farming', 'Woodcutting', 'Mining', 'Gathering', 'Smithing'];
    const skillEntries = skillOrder.map(skill => [skill, talents[skill] || 0]).filter(([_, value]) => value > 0);
    const invEntries = Object.entries(inv.items||{});

    const jobName = (()=>{
      const bid = u.assignedBuildingId;
      if(!bid) return "무소속";
      const b = state.buildings[bid];
      if(!b) return "무소속";
      return b.name || BUILDING_DEFS[b.type]?.name || b.type;
    })();
    return (
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur rounded-2xl shadow-lg p-2 w-[500px] md:w-[500px] w-[95vw] text-xs" ref={inspectorRef}>
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            {editingName === `unit_${u.id}` ? (
              <input
                type="text"
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
                onKeyDown={handleKeyPress}
                onBlur={handleNameSave}
                className="font-semibold bg-transparent border-b border-slate-300 focus:border-slate-500 outline-none text-xs"
                autoFocus
              />
            ) : (
              <div className="font-semibold text-xs">{u.name}</div>
            )}
            <button 
              className="text-slate-400 hover:text-slate-600 text-xs"
              onClick={() => handleNameEdit('unit', u.id, u.name)}
            >
              ✏️
            </button>
            <span className="text-xs bg-slate-200 px-2 py-0.5 rounded-full">{jobName}</span>
          </div>
          <button className="text-slate-400 hover:text-slate-600 text-sm font-bold" onClick={()=>setSelectedUnit(null)}>×</button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="border rounded-lg p-1.5 h-40 flex flex-col">
            <div className="text-xs text-slate-500 mb-1 font-medium">스탯</div>
            <div className="flex-1 overflow-auto space-y-0.5">
              <div className="text-xs">
                <div className="font-semibold">HP: {u.hp||0}/{u.hpMax||0}</div>
                <div className="font-semibold">MP: {u.mp||0}/{u.mpMax||0}</div>
              </div>
              <div className="text-xs">
                <div>공격력: <span className="font-semibold">{updatedCitizen.combatStats?.attack||0}</span></div>
                <div>마법공격: <span className="font-semibold">{updatedCitizen.combatStats?.magicAttack||0}</span></div>
                <div>방어력: <span className="font-semibold">{updatedCitizen.combatStats?.defense||0}</span></div>
                <div>STR: <span className="font-semibold">{updatedCitizen.enhancedStats?.STR||updatedCitizen.stats.STR||0}</span> AGI: <span className="font-semibold">{updatedCitizen.enhancedStats?.AGI||updatedCitizen.stats.AGI||0}</span></div>
                <div>VIT: <span className="font-semibold">{updatedCitizen.enhancedStats?.VIT||updatedCitizen.stats.VIT||0}</span> INT: <span className="font-semibold">{updatedCitizen.enhancedStats?.INT||updatedCitizen.stats.INT||0}</span></div>
              </div>
            </div>
          </div>
          <div className="border rounded-lg p-1.5 h-40 flex flex-col">
            <div className="text-xs text-slate-500 mb-1 font-medium">스킬(재능) 수련치</div>
            <div className="flex-1 overflow-auto pr-1 space-y-0.5">
              {skillEntries.map(([k,v])=> {
                const p = practice[k] ?? 0;
                return (
                  <div key={k} className="flex items-center justify-between text-xs">
                    <span>{k} (<span className="text-slate-600">{v}</span>)</span>
                    <span className="font-semibold">{p}</span>
                  </div>
                );
              })}
              {skillEntries.length===0 && <div className="text-xs text-slate-400">스킬 없음</div>}
            </div>
          </div>
          <div className="border rounded-lg p-1.5 h-40 flex flex-col">
            <div className="text-xs text-slate-500 mb-1 font-medium">장착된 장비</div>
            <div className="flex-1 overflow-auto pr-1 space-y-0.5">
              {(() => {
                const equippedItems = getCitizenEquipment(state.warehouse, u.id);
                
                const slots = ['weapon', 'helmet', 'armor', 'boots', 'necklace', 'ring'];
                const slotNames = {
                  weapon: '무기',
                  helmet: '투구', 
                  armor: '갑옷',
                  boots: '신발',
                  necklace: '목걸이',
                  ring: '반지'
                };
                
                return slots.map(slot => {
                  const uniqueItemId = equippedItems[slot];
                  if (!uniqueItemId) {
                    return (
                      <div key={slot} className="flex items-center justify-between text-xs text-slate-400 px-0.5 py-0.5">
                        <span>{slotNames[slot]}</span>
                        <span>미착용</span>
                      </div>
                    );
                  }
                  
                  const equipment = state.warehouse.equipment[uniqueItemId];
                  if (!equipment) return null;
                  
                  const specialAbilitiesCount = equipment.specialAbilities ? equipment.specialAbilities.length : 0;
                  const qualityColor = getEquipmentQualityColor(specialAbilitiesCount);
                  
                  return (
                    <div 
                      key={slot} 
                      className="flex items-center justify-between cursor-pointer hover:bg-slate-100 rounded px-0.5 py-0.5"
                      onClick={() => setSelectedItem(uniqueItemId)}
                    >
                      <div className="flex flex-col">
                        <span className="text-xs text-slate-500">
                          {slotNames[slot]}
                        </span>
                        <div className="flex items-center gap-1">
                          <span className={`text-xs font-medium ${qualityColor}`}>
                            {equipment.name}
                          </span>
                          {equipment.baseStats && (
                            <span className="text-xs text-slate-600">
                              {Object.entries(equipment.baseStats).map(([stat, value]) => 
                                `${stat === 'attack' ? '공격' : stat === 'defense' ? '방어' : stat === 'health' ? '체력' : stat}+${value}`
                              ).join(' ')}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                });
              })()}
              
              {/* 기존 인벤토리 아이템 */}
              {invEntries.map(([k,c])=> (
                <div key={k} className="flex items-center justify-between text-xs">
                  <span>{k}</span>
                  <span className="font-semibold">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 아이템 선택된 경우
  if (selItemId) {
    // 제작 탭에서 선택된 아이템인지 확인 (ITEM_DEFINITIONS에 있는 아이템이지만 창고에 없는 경우)
    const isCraftingItem = ITEM_DEFINITIONS[selItemId] && 
                          !state.warehouse.items[selItemId] && 
                          !state.warehouse.equipment[selItemId];
    
    return (
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[400px] md:w-[400px] w-[95vw]" ref={inspectorRef}>
        {isCraftingItem ? <CraftingInspector /> : <ItemInspector />}
      </div>
    );
  }

  const b = state.buildings[selBId]; if(!b) return null;
  const def = BUILDING_DEFS[b.type]||{};
  const computeProductivity = (u)=>{
    // 생산 전용 미리보기: production.js의 효율 공식을 단순화하여 표시
    const skillKey = def.skill; if(!skillKey) return null;
    const levelMult = 1 + 0.08*((b.level||1)-1);
    const talent = (u.talents?.[skillKey]||0)/10;
    const practice = Math.max(0, Math.min(500, (u.practice?.[skillKey]||0)));
    const practiceBonus = practice * 0.04;
    const { STR=0,AGI=0,VIT=0,INT=0 } = u.stats||{};
    let relevantStatBonus = 0;
    switch(skillKey){
      case 'Farming': relevantStatBonus = VIT * 0.05; break;
      case 'Woodcutting': relevantStatBonus = (STR + VIT) * 0.03; break;
      case 'Gathering': relevantStatBonus = AGI * 0.05; break;
      case 'Mining': relevantStatBonus = (STR + VIT) * 0.03; break;
      case 'Sword': relevantStatBonus = (STR + AGI + VIT) * 0.02; break;
      case 'Magic': relevantStatBonus = INT * 0.05; break;
      case 'Smithing': relevantStatBonus = (STR + VIT) * 0.03; break;
      case 'Admin': relevantStatBonus = (INT + AGI) * 0.03; break;
      default: relevantStatBonus = 0;
    }
    const statBonus = (STR*0.02 + AGI*0.01 + VIT*0.02 + INT*0.03)/100;
    const efficiency = levelMult + talent*0.4 + practiceBonus + statBonus + relevantStatBonus;
    const resourceKey = def.produces ? Object.keys(def.produces)[0] : null;
    const base = resourceKey ? (def.produces[resourceKey].base||1) : 1;
    // 실제 틱당/사이클당이 아닌 상대치 미리보기. 숫자만 간단히.
    return { eff: efficiency, res: resourceKey, base };
  };
  const workers = (b.workers||[]).map(id=>state.units[id]).filter(Boolean);
  const cap = b.capacity||0;
  const assignable = idleUnits();

  const onAssign = (uid)=>{ assignUnitToBuilding(uid, b.id); };
  const onUnassign = (uid)=>{ unassignUnit(uid); };
  const onCall = (uid)=>{ callUnitToBuilding(uid, b.id); };
  const onExport = (uid)=>{ exportUnitFromBuilding(uid, b.id); };

  return (
    <>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur rounded-2xl shadow-lg p-3 w-[520px] md:w-[520px] w-[95vw] text-sm" ref={inspectorRef}>
        {/* 닫기 버튼을 맨 위로 */}
        <div className="flex justify-end mb-2">
          <button className="text-xs text-slate-600 hover:underline" onClick={()=>setSelectedBuilding(null)}>✕</button>
        </div>
        
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
              className="text-slate-400 hover:text-slate-600 text-sm flex items-center gap-1"
              onClick={() => handleNameEdit('building', b.id, b.name || def.name || b.type)}
            >
              <span>✏️</span>
              <span>변경</span>
            </button>
            <button 
              className="text-green-400 hover:text-green-600 text-sm flex items-center gap-1"
              onClick={() => handleBuildingMove(b.id)}
              title="건물 이동"
              disabled={!b.construct?.active && (b.hp || 0) < (b.hpMax || 0)}
            >
              <span>📦</span>
              <span>이동</span>
            </button>
            <button 
              className="text-red-400 hover:text-red-600 text-sm flex items-center gap-1"
              onClick={handleDemolish}
              title="건물 철거"
            >
              <span>🗑️</span>
              <span>철거</span>
            </button>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-xs text-slate-600">HP {b.hp||0}/{b.hpMax||0} · XP {Math.floor(b.xp||0)}/{b.xpToNext||0}</div>
          </div>
        </div>
        {b.construct?.active && (
          <div className="mt-2 text-xs text-emerald-700">공사 중 · 남은 시간 {Math.max(0,b.construct?.eta||0).toFixed(1)}s · 진행 {(Math.min(1,b.construct?.progress||0)*100).toFixed(0)}%</div>
        )}
        <div className="mt-2 grid grid-cols-2 gap-3">
          <div>
            <div className="text-xs text-slate-600 mb-1">배치 인원 {workers.length}/{cap}</div>
            <div className="space-y-1 max-h-32 overflow-auto pr-1">
              {workers
                .sort((a, b) => {
                  if (!def.skill) return 0;
                  const aTalent = (a.talents?.[def.skill] || 0);
                  const bTalent = (b.talents?.[def.skill] || 0);
                  return bTalent - aTalent;
                })
                .map(u=> (
                <div key={u.id} className={`flex items-center justify-between border rounded-lg px-2 py-1 ${u.hidden ? 'bg-slate-100' : ''}`}>
                  <span className={u.hidden ? 'text-slate-500' : ''}>{u.name}</span>
                  <div className="flex items-center gap-2">
                    {def.skill && (
                      <span className="text-[11px] text-slate-600">
                        {def.skill}({(u.talents?.[def.skill] || 0)}) {Math.floor(u.practice?.[def.skill] || 0)}
                      </span>
                    )}
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
              {assignable
                .sort((a, b) => {
                  if (!def.skill) return 0;
                  const aTalent = (a.talents?.[def.skill] || 0);
                  const bTalent = (b.talents?.[def.skill] || 0);
                  return bTalent - aTalent;
                })
                .slice(0,20)
                .map(u=> (
                <div key={u.id} className="flex items-center justify-between border rounded-lg px-2 py-1">
                  <span>{u.name}</span>
                  <div className="flex items-center gap-2">
                    {def.skill && (
                      <span className="text-[11px] text-slate-600">
                        {def.skill}({(u.talents?.[def.skill] || 0)}) {Math.floor(u.practice?.[def.skill] || 0)}
                      </span>
                    )}
                    <button className="text-emerald-700 hover:underline disabled:text-slate-400" disabled={(b.workers||[]).length>=cap} onClick={()=>onAssign(u.id)}>배치</button>
                  </div>
                </div>
              ))}
              {assignable.length===0 && <div className="text-xs text-slate-400">유휴 인원이 없습니다</div>}
            </div>
          </div>
        </div>
      </div>
      <DemolishModal 
        isOpen={showDemolishModal}
        onConfirm={confirmDemolish}
        onCancel={cancelDemolish}
        buildingName={b.name || def.name || b.type}
      />
    </>
  );
}

// 철거 확인 모달 컴포넌트
function DemolishModal({ isOpen, onConfirm, onCancel, buildingName }) {
  
  if (!isOpen) {
    // console.log('모달이 닫혀있음, 렌더링하지 않음');
    return null;
  }

  const handleConfirm = () => {
    console.log('모달에서 철거 확인 버튼 클릭');
    onConfirm();
  };

  const handleCancel = () => {
    console.log('모달에서 취소 버튼 클릭');
    onCancel();
  };

  return createPortal(
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]" style={{zIndex: 9999}} onMouseDown={(e)=>{ e.stopPropagation(); }}>
      <div className="bg-white rounded-xl p-6 max-w-md mx-4 shadow-xl" style={{zIndex: 10000}}>
        <div className="text-center">
          <div className="text-2xl mb-4">⚠️</div>
          <h3 className="text-lg font-semibold mb-2">건물 철거 확인</h3>
          <p className="text-slate-600 mb-6">
            <strong>{buildingName}</strong>을(를) 철거하시겠습니까?<br/>
            배치된 시민들은 자동으로 해제됩니다.
          </p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={handleCancel}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-colors"
            >
              취소
            </button>
            <button
              onClick={handleConfirm}
              className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
            >
              철거
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}