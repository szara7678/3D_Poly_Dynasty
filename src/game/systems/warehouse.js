// 창고 시스템 - 아이템 저장 및 관리

import { ITEM_DEFINITIONS, ITEM_TYPES, EQUIPMENT_SLOTS } from '../content/items.js';
import { notify, state } from '../state.js';
import { updateCitizenCombatStats } from '../factory/citizen.js';

// 창고 상태 초기화
export function initializeWarehouse() {
  return {
    items: {}, // { itemId: count } - 소비 아이템용
    equipment: {}, // { uniqueItemId: itemData } - 개별 장비 아이템용
    equipped: {}, // { citizenId: { slot: uniqueItemId } }
    capacity: 100
  };
}

// 아이템 추가 (소비 아이템용)
export function addItemToWarehouse(warehouse, itemId, count = 1) {
  const item = ITEM_DEFINITIONS[itemId];
  if (!item) return false;
  
  if (item.type === ITEM_TYPES.CONSUMABLE) {
    // 소비 아이템은 기존 방식
    const currentCount = warehouse.items[itemId] || 0;
    // 용량 확인 (주석처리)
    // const totalItems = Object.values(warehouse.items).reduce((sum, count) => sum + count, 0) + 
    //                   Object.keys(warehouse.equipment).length;
    // if (totalItems + count > warehouse.capacity) return false;
    
    warehouse.items[itemId] = currentCount + count;
    return true;
  } else if (item.type === ITEM_TYPES.EQUIPMENT) {
    // 장비 아이템은 개별 저장
    // 용량 확인 (주석처리)
    // const totalItems = Object.values(warehouse.items).reduce((sum, count) => sum + count, 0) + 
    //                   Object.keys(warehouse.equipment).length;
    // if (totalItems + count > warehouse.capacity) return false;
    
    // 개별 장비 아이템으로 저장
    for (let i = 0; i < count; i++) {
      warehouse.equipment[itemId] = item;
    }
    return true;
  }
  
  return false;
}

// 개별 장비 아이템 추가
export function addEquipmentToWarehouse(warehouse, equipmentData) {
  // 용량 확인 (주석처리)
  // const totalItems = Object.values(warehouse.items).reduce((sum, count) => sum + count, 0) + 
  //                   Object.keys(warehouse.equipment).length;
  // if (totalItems + 1 > warehouse.capacity) return false;
  
  warehouse.equipment[equipmentData.id] = equipmentData;
  return true;
}

// 아이템 제거
export function removeItemFromWarehouse(warehouse, itemId, count = 1) {
  const currentCount = warehouse.items[itemId] || 0;
  if (currentCount < count) return false;
  
  warehouse.items[itemId] = currentCount - count;
  if (warehouse.items[itemId] <= 0) {
    delete warehouse.items[itemId];
  }
  return true;
}

// 아이템 사용 (소비 아이템)
export function useConsumableItem(warehouse, itemId, citizenId, gameState) {
  const item = ITEM_DEFINITIONS[itemId];
  if (!item || item.type !== ITEM_TYPES.CONSUMABLE) return false;
  
  // 창고에서 아이템 제거
  if (!removeItemFromWarehouse(warehouse, itemId, 1)) return false;
  
  // 아이템 효과 적용
  switch (item.subtype) {
    case 'resource_box':
      // 자원 증가
      const resource = item.effect.resource;
      const amount = item.effect.amount;
      gameState.res[resource] += amount;
      break;
      
    case 'talent_boost':
      // 재능 상승
      if (citizenId && gameState.units[citizenId]) {
        const skill = item.effect.skill;
        const boost = item.effect.amount;
        gameState.units[citizenId].talent[skill] = Math.min(10, 
          (gameState.units[citizenId].talent[skill] || 1) + boost
        );
      }
      break;
      
    case 'stat_boost':
      // 스탯 상승
      if (citizenId && gameState.units[citizenId]) {
        const stat = item.effect.stat;
        const boost = item.effect.amount;
        gameState.units[citizenId].stats[stat] = Math.min(20, 
          (gameState.units[citizenId].stats[stat] || 5) + boost
        );
      }
      break;
  }
  
  return true;
}

// 장비 착용 (개별 장비 아이템용)
export function equipItem(warehouse, uniqueItemId, citizenId) {
  console.log('equipItem 호출:', uniqueItemId, citizenId);
  
  const equipment = warehouse.equipment[uniqueItemId];
  console.log('장비 정보:', equipment);
  
  if (!equipment || equipment.type !== ITEM_TYPES.EQUIPMENT) {
    console.log('장비를 찾을 수 없거나 장비가 아님');
    return false;
  }
  
  console.log('장비 슬롯:', equipment.slot);
  
  // 기존 장비가 있다면 창고로 반환
  if (warehouse.equipped[citizenId] && warehouse.equipped[citizenId][equipment.slot]) {
    const oldItemId = warehouse.equipped[citizenId][equipment.slot];
    console.log('기존 장비 해제:', oldItemId);
    // 기존 장비는 이미 창고에 있으므로 별도 처리 불필요
  }
  
  // 새 장비 착용
  if (!warehouse.equipped[citizenId]) {
    warehouse.equipped[citizenId] = {};
    console.log('시민 장비 슬롯 초기화');
  }
  
  warehouse.equipped[citizenId][equipment.slot] = uniqueItemId;
  console.log('장비 착용 완료:', uniqueItemId, '→', citizenId, equipment.slot);
  console.log('현재 equipped 상태:', warehouse.equipped);
  
  // 시민의 전투 스탯 업데이트
  const citizen = state.units[citizenId];
  if (citizen) {
    updateCitizenCombatStats(citizen, warehouse);
    console.log('시민 전투 스탯 업데이트:', citizen.name, citizen.combatStats);
  }
  
  // 게임 상태 업데이트 알림
  if (typeof notify === 'function') {
    notify('warehouse');
  }
  
  return true;
}

// 장비 해제 (개별 장비 아이템용)
export function unequipItem(warehouse, citizenId, slot) {
  if (!warehouse.equipped[citizenId] || !warehouse.equipped[citizenId][slot]) return false;
  
  const uniqueItemId = warehouse.equipped[citizenId][slot];
  
  // 장비 해제 (아이템은 이미 창고에 있으므로 별도 처리 불필요)
  delete warehouse.equipped[citizenId][slot];
  
  // 시민의 전투 스탯 업데이트
  const citizen = state.units[citizenId];
  if (citizen) {
    updateCitizenCombatStats(citizen, warehouse);
    console.log('시민 전투 스탯 업데이트 (해제):', citizen.name, citizen.combatStats);
  }
  
  // 게임 상태 업데이트 알림
  notify('warehouse');
  
  return true;
}

// 시민의 장비된 아이템 정보 가져오기
export function getCitizenEquipment(warehouse, citizenId) {
  return warehouse.equipped[citizenId] || {};
}

// 아이템이 누구에게 장착되어 있는지 확인
export function getItemEquippedBy(warehouse, uniqueItemId) {
  for (const [citizenId, equipment] of Object.entries(warehouse.equipped)) {
    for (const [slot, equippedItemId] of Object.entries(equipment)) {
      if (equippedItemId === uniqueItemId) {
        return { citizenId, slot };
      }
    }
  }
  return null;
}

// 창고 아이템 목록을 종류별로 필터링
export function getWarehouseItemsByType(warehouse, type) {
  const filteredItems = {};
  
  if (type === ITEM_TYPES.CONSUMABLE) {
    // 소비 아이템
    for (const [itemId, count] of Object.entries(warehouse.items)) {
      const item = ITEM_DEFINITIONS[itemId];
      if (item && item.type === type) {
        filteredItems[itemId] = count;
      }
    }
  } else if (type === ITEM_TYPES.EQUIPMENT) {
    // 장비 아이템 (개별 아이템)
    for (const [uniqueItemId, equipment] of Object.entries(warehouse.equipment)) {
      if (equipment && equipment.type === type) {
        filteredItems[uniqueItemId] = 1; // 개별 아이템이므로 항상 1
      }
    }
  }
  
  return filteredItems;
}

// 창고 아이템 목록을 서브타입별로 필터링
export function getWarehouseItemsBySubtype(warehouse, subtype) {
  const filteredItems = {};
  
  for (const [itemId, count] of Object.entries(warehouse.items)) {
    const item = ITEM_DEFINITIONS[itemId];
    if (item && item.subtype === subtype) {
      filteredItems[itemId] = count;
    }
  }
  
  return filteredItems;
}

// 창고 아이템 목록을 슬롯별로 필터링
export function getWarehouseItemsBySlot(warehouse, slot) {
  const filteredItems = {};
  
  for (const [uniqueItemId, equipment] of Object.entries(warehouse.equipment)) {
    if (equipment && equipment.slot === slot) {
      filteredItems[uniqueItemId] = 1; // 개별 아이템이므로 항상 1
    }
  }
  
  return filteredItems;
}

// 창고 용량 확인 (주석처리)
/*
export function getWarehouseUsage(warehouse) {
  const totalItems = Object.values(warehouse.items).reduce((sum, count) => sum + count, 0) + 
                    Object.keys(warehouse.equipment).length;
  return {
    used: totalItems,
    capacity: warehouse.capacity,
    available: warehouse.capacity - totalItems
  };
}
*/

// 소비 아이템 사용
export function useItem(warehouse, itemId, count = 1, gameState) {
  const item = ITEM_DEFINITIONS[itemId];
  if (!item || item.type !== ITEM_TYPES.CONSUMABLE) return false;
  
  const currentCount = warehouse.items[itemId] || 0;
  if (currentCount < count) return false;
  
  warehouse.items[itemId] = currentCount - count;
  
  // 아이템 효과 적용
  if (item.subtype === 'resource_box') {
    // 재료 상자 사용 - 마을 재료 증가
    const resourceType = item.effect?.resourceType;
    const amount = item.effect?.amount || 100;
    if (resourceType && gameState.res[resourceType] !== undefined) {
      gameState.res[resourceType] += amount;
    }
  } else if (item.subtype === 'talent_boost') {
    // 재능 상승 아이템 사용 - 시민 선택 필요
    console.log('재능 상승 아이템 사용 - 시민 선택 모달 필요');
    // TODO: 시민 선택 모달 구현
  } else if (item.subtype === 'stat_boost') {
    // 스탯 상승 아이템 사용 - 시민 선택 필요
    console.log('스탯 상승 아이템 사용 - 시민 선택 모달 필요');
    // TODO: 시민 선택 모달 구현
  }
  
  return true;
}
