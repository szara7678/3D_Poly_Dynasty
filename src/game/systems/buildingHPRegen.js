import { state, notify } from "../state.js";

/**
 * 건물 HP 회복 시스템
 * 완성된 건물의 HP를 주기적으로 회복시킴
 */
export function runBuildingHPRegeneration() {
  const buildings = state.buildings;
  let hasChanges = false;

  for (const id in buildings) {
    const building = buildings[id];
    
    // 공사 중인 건물은 제외
    if (building.construct?.active) continue;
    
    // HP가 최대치가 아닌 경우에만 회복
    if (building.hp < building.hpMax) {
      const regenAmount = Math.min(5, building.hpMax - building.hp); // 틱당 최대 5 회복
      building.hp = Math.min(building.hpMax, building.hp + regenAmount);
      hasChanges = true;
    }
  }

  if (hasChanges) {
    notify();
  }
}
