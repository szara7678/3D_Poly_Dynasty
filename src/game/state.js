const LS_KEY = "insu-save-v1";

export const initialState = () => ({
  tick: 0,
  res: { food: 200, gold: 300, ore: 50, herb: 40, wood: 200, reputation: 0 },
  population: 0,
  units: {},
  buildings: {},
  sim: { timeScale: 1, paused: false },
  world: { seed: 12345 },
  ui: { placing: null, selectedBuildingId: null, selectedUnitId: null }, // placing: BuildingType|null
});

export const state = initialState();

// 간단 이벤트 버스 (외부 스토어 구독)
const listeners = new Set();
export function subscribe(listener){ listeners.add(listener); return () => listeners.delete(listener); }
export function notify(){ for(const l of Array.from(listeners)){ try{ l(state); }catch(e){ /* noop */ } } }

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

// UI 상태
export function setPlacing(type){ state.ui.placing = type; notify(); }
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


