import { initializeWarehouse } from './systems/warehouse.js';

const LS_KEY = "insu-save-v1";

export const initialState = () => {
  const warehouse = initializeWarehouse();
  
  // 초기 아이템 추가
  warehouse.items = {
    'food_box': 2,
    'wood_box': 1
  };
  
  // 초기 장비 아이템 추가 (개별 아이템으로)
  const initialSword = {
    id: 'initial_sword_1',
    baseItemId: 'sword',
    name: '검',
    type: 'equipment',
    slot: 'weapon',
    description: '기본적인 검입니다.',
    baseStats: { attack: 8 },
    quality: 'normal',
    craftingCost: { ore: 20, wood: 5, gold: 30 },
    requiredSkill: 'Smithing'
  };
  
  const initialArmor = {
    id: 'initial_armor_1',
    baseItemId: 'armor',
    name: '갑옷',
    type: 'equipment',
    slot: 'armor',
    description: '몸을 보호하는 갑옷입니다.',
    baseStats: { defense: 8, health: 40 },
    quality: 'normal',
    craftingCost: { ore: 25, wood: 10, gold: 50 },
    requiredSkill: 'Smithing'
  };
  
  warehouse.equipment[initialSword.id] = initialSword;
  warehouse.equipment[initialArmor.id] = initialArmor;
  
  return {
    tick: 0,
    res: { food: 200, gold: 300, ore: 50, herb: 40, wood: 200, reputation: 0 },
    population: 0,
    units: {},
    buildings: {},
    warehouse: warehouse,
    sim: { timeScale: 1, paused: false },
    world: { seed: 12345 },
    ui: { placing: null, selectedBuildingId: null, selectedUnitId: null, selectedItemId: null }, // placing: BuildingType|null
  };
};

export const state = initialState();

// 간단 이벤트 버스 (외부 스토어 구독)
const listeners = new Set();
export function subscribe(listener){ listeners.add(listener); return () => listeners.delete(listener); }
// 알림 배치(coalescing) — 같은 틱/프레임 내 다중 호출을 1회로 합침
let _notifyScheduled = false;
export function notify(){
  if(_notifyScheduled){ return; }
  _notifyScheduled = true;
  // 마이크로태스크로 지연하여 동시 알림을 병합
  queueMicrotask(()=>{
    _notifyScheduled = false;
    for(const l of Array.from(listeners)){
      try{ l(state); }catch(e){ /* noop */ }
    }
  });
}

export function save(){
  try{ localStorage.setItem(LS_KEY, JSON.stringify(state)); }catch(e){ console.warn("save fail", e); }
}
export function load(){
  try{ const s = JSON.parse(localStorage.getItem(LS_KEY)||"null"); if(s) Object.assign(state, s); }catch(e){ console.warn("load fail", e); }
}

export function setRes(delta){
  for(const k in delta){ state.res[k] = Math.max(0, (state.res[k]||0) + delta[k]); }
  notify();
}

let idc=1; export const uid = (p="id") => `${p}_${idc++}`;

// 편의 액션들(일부)
export function addUnit(u){ 
  state.units[u.id]=u; 
  notify(); 
}
export function addBuilding(b){ state.buildings[b.id]=b; notify(); }
export function removeBuilding(buildingId){ 
  console.log('removeBuilding 호출됨:', buildingId);
  const building = state.buildings[buildingId];
  console.log('찾은 건물:', building);
  if (!building) {
    console.log('건물을 찾을 수 없음');
    return;
  }
  
  // 배치된 시민들을 해제하고 밖으로 내보내기
  if (building.workers) {
    console.log('배치된 시민들 해제:', building.workers);
    for (const unitId of building.workers) {
      const unit = state.units[unitId];
      if (unit) {
        unit.hidden = false; // 시민을 다시 보이게 함
        unit.assignedBuilding = null;
        console.log('시민 해제됨:', unitId);
      }
    }
  }
  
  // 건물 제거
  console.log('건물 제거 전 buildings:', Object.keys(state.buildings));
  delete state.buildings[buildingId];
  console.log('건물 제거 후 buildings:', Object.keys(state.buildings));
  
  // 선택된 건물이 철거된 건물이면 선택 해제
  if (state.ui.selectedBuildingId === buildingId) {
    state.ui.selectedBuildingId = null;
    console.log('선택된 건물 해제됨');
  }
  
  console.log('notify 호출');
  notify(); 
}

// UI 상태
export function setPlacing(type){ state.ui.placing = type; notify(); }
export function cancelPlacing(){ state.ui.placing = null; notify(); }
export function setSelectedBuilding(id){ state.ui.selectedBuildingId = id; if(id){ state.ui.selectedUnitId = null; } notify(); }
export function setSelectedUnit(id){ state.ui.selectedUnitId = id; if(id){ state.ui.selectedBuildingId = null; } notify(); }

// 자원 코스트 확인/지출
export function canAfford(cost){
  if(!cost) return true;
  for(const k in cost){ if((state.res[k]||0) < (cost[k]||0)) return false; }
  return true;
}
export function spend(cost){
  if(!canAfford(cost)) return false;
  for(const k in cost){ state.res[k] = Math.max(0, (state.res[k]||0) - (cost[k]||0)); }
  notify();
  return true;
}

// 배치/해제
export function assignUnitToBuilding(unitId, buildingId){
  const u = state.units[unitId]; const b = state.buildings[buildingId]; if(!u||!b) return false;
  if(b.construct?.active) return false;
  if(!Array.isArray(b.workers)) b.workers = [];
  const cap = Math.max(0, b.capacity||0);
  if(b.workers.includes(unitId)) return true;
  if(b.workers.length >= cap) return false;
  u.assignedBuildingId = buildingId; u.state = "assigned";
  b.workers.push(unitId);
  notify();
  return true;
}

// 부르기(내보내기) - 시민을 건물로 이동시키고 도착하면 사라지게 함
export function callUnitToBuilding(unitId, buildingId){
  const u = state.units[unitId]; const b = state.buildings[buildingId]; if(!u||!b) return false;
  if(!b.workers?.includes(unitId)) return false; // 배치된 시민만 부를 수 있음
  
  // 건물 앞쪽으로 이동 목표 설정
  const buildingPos = b.tile || { x: 0, z: 0 };
  const callPos = { 
    x: buildingPos.x + 1.5, // 건물 앞쪽
    y: 0, 
    z: buildingPos.z 
  };
  
  u.moveTo = callPos;
  u.state = "moving";
  u.__callTarget = buildingId; // 부르기 목표 건물 저장
  notify();
  return true;
}
export function unassignUnit(unitId){
  const u = state.units[unitId]; if(!u) return false;
  const bid = u.assignedBuildingId; if(!bid){ u.state = "idle"; notify(); return true; }
  const b = state.buildings[bid];
  if(b && Array.isArray(b.workers)) b.workers = b.workers.filter(id=>id!==unitId);
  u.assignedBuildingId = null; 
  u.state = "idle";
  u.hidden = false; // 숨김 상태 해제
  u.hiddenBuildingId = null;
  notify();
  return true;
}

// 내보내기 - 숨겨진 시민을 건물 주변으로 이동시키고 모습 활성화
export function exportUnitFromBuilding(unitId, buildingId){
  const u = state.units[unitId]; const b = state.buildings[buildingId]; if(!u||!b) return false;
  if(!u.hidden || u.hiddenBuildingId !== buildingId) return false; // 숨겨진 시민만 내보내기 가능
  
  // 건물 주변 랜덤 위치로 이동
  const buildingPos = b.tile || { x: 0, z: 0 };
  const angle = Math.random() * Math.PI * 2;
  const distance = 2 + Math.random() * 2; // 2~4 거리
  const exportPos = {
    x: buildingPos.x + Math.cos(angle) * distance,
    y: 0,
    z: buildingPos.z + Math.sin(angle) * distance
  };
  
  u.pos = exportPos;
  u.state = "idle";
  u.hidden = false;
  u.hiddenBuildingId = null;
  notify();
  return true;
}

export function idleUnits(){ return Object.values(state.units).filter(u=>!u.assignedBuildingId && (u.state==="idle"||u.state==="moving")); }

export function setUnitMoveTarget(unitId, x, z){
  const u = state.units[unitId]; if(!u) return false;
  if(!u.pos) u.pos = { x:0, y:0, z:0 };
  u.moveTo = { x, z };
  u.state = "moving";
  notify();
  return true;
}

// 이름 변경 함수들
export function setUnitName(unitId, newName){
  const u = state.units[unitId]; if(!u) return false;
  u.name = newName.trim() || u.name; // 빈 문자열이면 기존 이름 유지
  notify();
  return true;
}

export function setBuildingName(buildingId, newName){
  const b = state.buildings[buildingId]; if(!b) return false;
  b.name = newName.trim() || b.name; // 빈 문자열이면 기존 이름 유지
  notify();
  return true;
}

// 창고 관련 액션들
export function setSelectedItem(itemId){ 
  state.ui.selectedItemId = itemId; 
  if(itemId){ state.ui.selectedBuildingId = null; state.ui.selectedUnitId = null; } 
  notify(); 
}

export function clearSelection(){ 
  state.ui.selectedBuildingId = null; 
  state.ui.selectedUnitId = null; 
  state.ui.selectedItemId = null; 
  notify(); 
}


