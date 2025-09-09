const LS_KEY = "insu-save-v1";

export const initialState = () => ({
  tick: 0,
  res: { food: 200, gold: 300, ore: 50, herb: 40, wood: 200, stone: 150, reputation: 0 },
  population: 0,
  popCap: 0,
  nextPopRepReq: 50,
  units: {},
  buildings: {},
  sim: { timeScale: 1, paused: false },
  world: { seed: 12345 },
  ui: { placing: null, selectedBuildingId: null }, // placing: BuildingType|null
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
  console.log(`addUnit 호출: ${u.name} (${u.id}) 위치 (${u.pos?.x?.toFixed(1)}, ${u.pos?.z?.toFixed(1)})`);
  state.units[u.id]=u; 
  notify(); 
  console.log(`addUnit 완료: 총 유닛 ${Object.keys(state.units).length}개`);
}
export function addBuilding(b){ state.buildings[b.id]=b; notify(); }

// UI 상태
export function setPlacing(type){ state.ui.placing = type; notify(); }
export function setSelectedBuilding(id){ state.ui.selectedBuildingId = id; notify(); }

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
export function unassignUnit(unitId){
  const u = state.units[unitId]; if(!u) return false;
  const bid = u.assignedBuildingId; if(!bid){ u.state = "idle"; notify(); return true; }
  const b = state.buildings[bid];
  if(b && Array.isArray(b.workers)) b.workers = b.workers.filter(id=>id!==unitId);
  u.assignedBuildingId = null; u.state = "idle";
  notify();
  return true;
}

export function idleUnits(){ return Object.values(state.units).filter(u=>!u.assignedBuildingId && (u.state==="idle"||u.state==="moving")); }


