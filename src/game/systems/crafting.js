// 제작 시스템 - 시민 숙련도 기반 아이템 제작

import { ITEM_DEFINITIONS, canCraftItem, calculateCraftingCost, generateDynamicEquipment } from '../content/items.js';
import { removeItemFromWarehouse, addItemToWarehouse, addEquipmentToWarehouse } from './warehouse.js';

// 건물별 시민 필터링
export function getCitizensByBuilding(gameState, buildingType) {
  return Object.values(gameState.units).filter(unit => {
    if (!unit.buildingId) return false;
    const building = gameState.buildings[unit.buildingId];
    return building && building.type === buildingType;
  });
}

// 대장간 시민들 가져오기
export function getSmithyCitizens(gameState) {
  return getCitizensByBuilding(gameState, 'smithy');
}

// 마탑 시민들 가져오기
export function getTowerCitizens(gameState) {
  return getCitizensByBuilding(gameState, 'tower');
}

// 시민들의 평균 숙련도 계산
export function calculateAverageSkill(citizens, skillName) {
  if (citizens.length === 0) return 0;
  
  const totalSkill = citizens.reduce((sum, citizen) => {
    return sum + (citizen.talent[skillName] || 1);
  }, 0);
  
  return totalSkill / citizens.length;
}

// 가장 높은 숙련도를 가진 시민의 숙련도
export function getHighestSkill(citizens, skillName) {
  if (citizens.length === 0) return 0;
  
  return Math.max(...citizens.map(citizen => citizen.talent[skillName] || 1));
}

// 아이템 제작 가능 여부 확인
export function canCraftItemWithCitizens(itemId, gameState) {
  const item = ITEM_DEFINITIONS[itemId];
  if (!item) return false;
  
  // 기본 자원 확인만 수행 (스킬 체크 제거)
  for (const [resource, amount] of Object.entries(item.craftingCost)) {
    if (gameState.res[resource] < amount) return false;
  }
  
  return true;
}

// 아이템 제작 비용 계산 (시민 숙련도 반영)
export function calculateCraftingCostWithCitizens(itemId, gameState) {
  const item = ITEM_DEFINITIONS[itemId];
  if (!item) return null;
  
  let baseCost = { ...item.craftingCost };
  
  // 장비 아이템의 경우 대장간 시민 숙련도 반영
  if (item.type === 'equipment') {
    const smithyCitizens = getSmithyCitizens(gameState);
    if (smithyCitizens.length > 0) {
      const averageSmithing = calculateAverageSkill(smithyCitizens, 'Smithing');
      const highestSmithing = getHighestSkill(smithyCitizens, 'Smithing');
      
      // 평균 숙련도와 최고 숙련도에 따른 비용 증가
      const averageIncrease = Math.min(0.5, averageSmithing * 0.05);
      const highestIncrease = Math.min(0.3, highestSmithing * 0.03);
      const totalIncrease = averageIncrease + highestIncrease;
      
      for (const resource in baseCost) {
        baseCost[resource] = Math.floor(baseCost[resource] * (1 + totalIncrease));
      }
    }
  }
  
  // 소비 아이템의 경우 마탑 시민 숙련도 반영
  if (item.type === 'consumable') {
    const towerCitizens = getTowerCitizens(gameState);
    if (towerCitizens.length > 0) {
      const averageMagic = calculateAverageSkill(towerCitizens, 'Magic');
      const magicDiscount = Math.min(0.25, averageMagic * 0.025);
      
      for (const resource in baseCost) {
        baseCost[resource] = Math.max(1, Math.floor(baseCost[resource] * (1 - magicDiscount)));
      }
    }
  }
  
  // 악세사리의 경우 대장간과 마탑 시민 모두 고려
  if (item.slot === 'accessory') {
    const smithyCitizens = getSmithyCitizens(gameState);
    const towerCitizens = getTowerCitizens(gameState);
    
    let totalDiscount = 0;
    
    if (smithyCitizens.length > 0) {
      const averageSmithing = calculateAverageSkill(smithyCitizens, 'Smithing');
      totalDiscount += Math.min(0.15, averageSmithing * 0.015);
    }
    
    if (towerCitizens.length > 0) {
      const averageMagic = calculateAverageSkill(towerCitizens, 'Magic');
      totalDiscount += Math.min(0.15, averageMagic * 0.015);
    }
    
    for (const resource in baseCost) {
      baseCost[resource] = Math.max(1, Math.floor(baseCost[resource] * (1 - totalDiscount)));
    }
  }
  
  return baseCost;
}

// 아이템 제작 실행
export function craftItem(itemId, gameState) {
  console.log('craftItem 호출:', itemId);
  
  const item = ITEM_DEFINITIONS[itemId];
  if (!item) {
    console.log('아이템 정의를 찾을 수 없음:', itemId);
    return false;
  }
  
  console.log('아이템 정보:', item);
  
  // 제작 가능 여부 확인
  if (!canCraftItemWithCitizens(itemId, gameState)) {
    console.log('제작 불가능:', itemId);
    return false;
  }
  
  // 제작 비용 계산
  const cost = calculateCraftingCostWithCitizens(itemId, gameState);
  if (!cost) {
    console.log('비용 계산 실패:', itemId);
    return false;
  }
  
  console.log('제작 비용:', cost);
  
  // 자원 소모
  for (const [resource, amount] of Object.entries(cost)) {
    if (gameState.res[resource] < amount) {
      console.log('자원 부족:', resource, '필요:', amount, '보유:', gameState.res[resource]);
      return false;
    }
    gameState.res[resource] -= amount;
    console.log('자원 소모:', resource, amount, '남은 양:', gameState.res[resource]);
  }
  
  // 장비 아이템인 경우 동적 생성
  if (item.type === 'equipment') {
    console.log('장비 아이템 제작 시작');
    const smithyCitizens = getSmithyCitizens(gameState);
    const towerCitizens = getTowerCitizens(gameState);
    
    console.log('대장간 시민:', smithyCitizens.length, '마탑 시민:', towerCitizens.length);
    
    const dynamicItem = generateDynamicEquipment(itemId, smithyCitizens, towerCitizens);
    console.log('동적 아이템 생성 결과:', dynamicItem);
    
    if (!dynamicItem) {
      console.log('동적 아이템 생성 실패, 자원 복구');
      // 실패 시 자원 복구
      for (const [resource, amount] of Object.entries(cost)) {
        gameState.res[resource] += amount;
      }
      return false;
    }
    
    // 동적 아이템을 창고에 추가
    console.log('창고에 아이템 추가 시도:', dynamicItem.id);
    if (!addEquipmentToWarehouse(gameState.warehouse, dynamicItem)) {
      console.log('창고 추가 실패, 자원 복구');
      // 실패 시 자원 복구
      for (const [resource, amount] of Object.entries(cost)) {
        gameState.res[resource] += amount;
      }
      return false;
    }
    
    console.log('제작 성공:', dynamicItem);
    return { success: true, item: dynamicItem };
  } else {
    // 소비 아이템은 기본 방식
    if (!addItemToWarehouse(gameState.warehouse, itemId, 1)) {
      // 실패 시 자원 복구
      for (const [resource, amount] of Object.entries(cost)) {
        gameState.res[resource] += amount;
      }
      return false;
    }
    
    return { success: true, item: item };
  }
}

// 제작 가능한 아이템 목록 가져오기
export function getCraftableItems(gameState) {
  const craftableItems = [];
  
  for (const [itemId, item] of Object.entries(ITEM_DEFINITIONS)) {
    if (canCraftItemWithCitizens(itemId, gameState)) {
      const cost = calculateCraftingCostWithCitizens(itemId, gameState);
      craftableItems.push({
        ...item,
        actualCost: cost
      });
    }
  }
  
  return craftableItems;
}

// 제작 가능한 아이템을 종류별로 분류
export function getCraftableItemsByType(gameState, type) {
  return getCraftableItems(gameState).filter(item => item.type === type);
}

// 제작 가능한 아이템을 서브타입별로 분류
export function getCraftableItemsBySubtype(gameState, subtype) {
  return getCraftableItems(gameState).filter(item => item.subtype === subtype);
}

// 제작 가능한 아이템을 슬롯별로 분류
export function getCraftableItemsBySlot(gameState, slot) {
  return getCraftableItems(gameState).filter(item => item.slot === slot);
}
