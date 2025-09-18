// 아이템 정의 시스템 - 이름, id, 종류, 효과를 가진 아이템 구조

export const ITEM_TYPES = {
  CONSUMABLE: 'consumable',  // 소비 아이템
  EQUIPMENT: 'equipment'     // 장비 아이템
};

export const EQUIPMENT_SLOTS = {
  WEAPON: 'weapon',      // 무기 (검, 지팡이)
  HELMET: 'helmet',      // 투구
  ARMOR: 'armor',        // 갑옷
  BOOTS: 'boots',        // 신발
  NECKLACE: 'necklace',  // 목걸이
  RING: 'ring'          // 반지
};

export const CONSUMABLE_TYPES = {
  RESOURCE_BOX: 'resource_box',     // 재료 상자
  TALENT_BOOST: 'talent_boost',     // 재능 상승
  STAT_BOOST: 'stat_boost'         // 스탯 상승
};

// 아이템 정의
export const ITEM_DEFINITIONS = {
  // 소비 아이템들
  'food_box': {
    id: 'food_box',
    name: '식량 상자',
    type: ITEM_TYPES.CONSUMABLE,
    subtype: CONSUMABLE_TYPES.RESOURCE_BOX,
    description: '마을의 식량을 100개 증가시킵니다.',
    effect: {
      resourceType: 'food',
      amount: 100
    },
    craftingCost: {
      wood: 50,
      gold: 20
    }
  },
  'wood_box': {
    id: 'wood_box',
    name: '목재 상자',
    type: ITEM_TYPES.CONSUMABLE,
    subtype: CONSUMABLE_TYPES.RESOURCE_BOX,
    description: '마을의 목재를 100개 증가시킵니다.',
    effect: {
      resourceType: 'wood',
      amount: 100
    },
    craftingCost: {
      wood: 30,
      gold: 15
    }
  },
  'ore_box': {
    id: 'ore_box',
    name: '광물 상자',
    type: ITEM_TYPES.CONSUMABLE,
    subtype: CONSUMABLE_TYPES.RESOURCE_BOX,
    description: '마을의 광물을 100개 증가시킵니다.',
    effect: {
      resourceType: 'ore',
      amount: 100
    },
    craftingCost: {
      ore: 40,
      gold: 25
    }
  },
  'herb_box': {
    id: 'herb_box',
    name: '약초 상자',
    type: ITEM_TYPES.CONSUMABLE,
    subtype: CONSUMABLE_TYPES.RESOURCE_BOX,
    description: '마을의 약초를 100개 증가시킵니다.',
    effect: {
      resourceType: 'herb',
      amount: 100
    },
    craftingCost: {
      herb: 35,
      gold: 20
    }
  },
  'gold_box': {
    id: 'gold_box',
    name: '금화 상자',
    type: ITEM_TYPES.CONSUMABLE,
    subtype: CONSUMABLE_TYPES.RESOURCE_BOX,
    description: '마을의 금화를 100개 증가시킵니다.',
    effect: {
      resourceType: 'gold',
      amount: 100
    },
    craftingCost: {
      gold: 80,
      ore: 20
    }
  },
  'farming_talent_potion': {
    id: 'farming_talent_potion',
    name: '농업 재능 물약',
    type: ITEM_TYPES.CONSUMABLE,
    subtype: CONSUMABLE_TYPES.TALENT_BOOST,
    description: '시민의 농업 재능을 2 상승시킵니다.',
    effect: {
      skill: 'Farming',
      amount: 2
    },
    craftingCost: {
      herb: 30,
      gold: 50
    }
  },
  'magic_talent_potion': {
    id: 'magic_talent_potion',
    name: '마법 재능 물약',
    type: ITEM_TYPES.CONSUMABLE,
    subtype: CONSUMABLE_TYPES.TALENT_BOOST,
    description: '시민의 마법 재능을 2 상승시킵니다.',
    effect: {
      skill: 'Magic',
      amount: 2
    },
    craftingCost: {
      herb: 40,
      gold: 60
    }
  },
  'smithing_talent_potion': {
    id: 'smithing_talent_potion',
    name: '대장간 재능 물약',
    type: ITEM_TYPES.CONSUMABLE,
    subtype: CONSUMABLE_TYPES.TALENT_BOOST,
    description: '시민의 대장간 재능을 2 상승시킵니다.',
    effect: {
      skill: 'Smithing',
      amount: 2
    },
    craftingCost: {
      ore: 25,
      herb: 20,
      gold: 45
    }
  },
  'str_stat_potion': {
    id: 'str_stat_potion',
    name: '힘 스탯 물약',
    type: ITEM_TYPES.CONSUMABLE,
    subtype: CONSUMABLE_TYPES.STAT_BOOST,
    description: '시민의 힘 스탯을 3 상승시킵니다.',
    effect: {
      stat: 'STR',
      amount: 3
    },
    craftingCost: {
      herb: 25,
      gold: 40
    }
  },
  'agi_stat_potion': {
    id: 'agi_stat_potion',
    name: '민첩 스탯 물약',
    type: ITEM_TYPES.CONSUMABLE,
    subtype: CONSUMABLE_TYPES.STAT_BOOST,
    description: '시민의 민첩 스탯을 3 상승시킵니다.',
    effect: {
      stat: 'AGI',
      amount: 3
    },
    craftingCost: {
      herb: 25,
      gold: 40
    }
  },
  'vit_stat_potion': {
    id: 'vit_stat_potion',
    name: '체력 스탯 물약',
    type: ITEM_TYPES.CONSUMABLE,
    subtype: CONSUMABLE_TYPES.STAT_BOOST,
    description: '시민의 체력 스탯을 3 상승시킵니다.',
    effect: {
      stat: 'VIT',
      amount: 3
    },
    craftingCost: {
      herb: 25,
      gold: 40
    }
  },
  'int_stat_potion': {
    id: 'int_stat_potion',
    name: '지능 스탯 물약',
    type: ITEM_TYPES.CONSUMABLE,
    subtype: CONSUMABLE_TYPES.STAT_BOOST,
    description: '시민의 지능 스탯을 3 상승시킵니다.',
    effect: {
      stat: 'INT',
      amount: 3
    },
    craftingCost: {
      herb: 25,
      gold: 40
    }
  },

  // 기본 장비 타입들 (동적 제작용)
  'sword': {
    id: 'sword',
    name: '검',
    type: ITEM_TYPES.EQUIPMENT,
    slot: EQUIPMENT_SLOTS.WEAPON,
    description: '기본적인 검입니다.',
    baseStats: {
      attack: 8
    },
    craftingCost: {
      ore: 20,
      wood: 5,
      gold: 30
    },
    requiredSkill: 'Smithing'
  },
  'staff': {
    id: 'staff',
    name: '지팡이',
    type: ITEM_TYPES.EQUIPMENT,
    slot: EQUIPMENT_SLOTS.WEAPON,
    description: '마법을 증폭시키는 지팡이입니다.',
    baseStats: {
      magicAttack: 10,
      INT: 2
    },
    craftingCost: {
      wood: 15,
      herb: 10,
      gold: 40
    },
    requiredSkill: 'Magic'
  },
  'helmet': {
    id: 'helmet',
    name: '투구',
    type: ITEM_TYPES.EQUIPMENT,
    slot: EQUIPMENT_SLOTS.HELMET,
    description: '머리를 보호하는 투구입니다.',
    baseStats: {
      defense: 5,
      health: 20
    },
    craftingCost: {
      ore: 15,
      wood: 5,
      gold: 25
    },
    requiredSkill: 'Smithing'
  },
  'armor': {
    id: 'armor',
    name: '갑옷',
    type: ITEM_TYPES.EQUIPMENT,
    slot: EQUIPMENT_SLOTS.ARMOR,
    description: '몸을 보호하는 갑옷입니다.',
    baseStats: {
      defense: 8,
      health: 40
    },
    craftingCost: {
      ore: 25,
      wood: 10,
      gold: 50
    },
    requiredSkill: 'Smithing'
  },
  'boots': {
    id: 'boots',
    name: '신발',
    type: ITEM_TYPES.EQUIPMENT,
    slot: EQUIPMENT_SLOTS.BOOTS,
    description: '발을 보호하고 이동을 도와주는 신발입니다.',
    baseStats: {
      health: 20,
      defense: 3
    },
    craftingCost: {
      wood: 10,
      gold: 20
    },
    requiredSkill: 'Smithing'
  },
  
  // 스탯별 목걸이들
  'str_necklace': {
    id: 'str_necklace',
    name: '힘의 목걸이',
    type: ITEM_TYPES.EQUIPMENT,
    slot: EQUIPMENT_SLOTS.NECKLACE,
    description: '힘을 증가시키는 목걸이입니다.',
    baseStats: {
      STR: 5
    },
    craftingCost: {
      ore: 20,
      gold: 50
    },
    requiredSkill: 'Smithing'
  },
  'agi_necklace': {
    id: 'agi_necklace',
    name: '민첩의 목걸이',
    type: ITEM_TYPES.EQUIPMENT,
    slot: EQUIPMENT_SLOTS.NECKLACE,
    description: '민첩을 증가시키는 목걸이입니다.',
    baseStats: {
      AGI: 5
    },
    craftingCost: {
      ore: 20,
      gold: 50
    },
    requiredSkill: 'Smithing'
  },
  'vit_necklace': {
    id: 'vit_necklace',
    name: '체력의 목걸이',
    type: ITEM_TYPES.EQUIPMENT,
    slot: EQUIPMENT_SLOTS.NECKLACE,
    description: '체력을 증가시키는 목걸이입니다.',
    baseStats: {
      VIT: 5
    },
    craftingCost: {
      ore: 20,
      gold: 50
    },
    requiredSkill: 'Smithing'
  },
  'int_necklace': {
    id: 'int_necklace',
    name: '지능의 목걸이',
    type: ITEM_TYPES.EQUIPMENT,
    slot: EQUIPMENT_SLOTS.NECKLACE,
    description: '지능을 증가시키는 목걸이입니다.',
    baseStats: {
      INT: 5
    },
    craftingCost: {
      herb: 20,
      gold: 50
    },
    requiredSkill: 'Magic'
  },
  
  // 스탯별 반지들
  'str_ring': {
    id: 'str_ring',
    name: '힘의 반지',
    type: ITEM_TYPES.EQUIPMENT,
    slot: EQUIPMENT_SLOTS.RING,
    description: '힘을 증가시키는 반지입니다.',
    baseStats: {
      STR: 3
    },
    craftingCost: {
      ore: 15,
      gold: 40
    },
    requiredSkill: 'Smithing'
  },
  'agi_ring': {
    id: 'agi_ring',
    name: '민첩의 반지',
    type: ITEM_TYPES.EQUIPMENT,
    slot: EQUIPMENT_SLOTS.RING,
    description: '민첩을 증가시키는 반지입니다.',
    baseStats: {
      AGI: 3
    },
    craftingCost: {
      ore: 15,
      gold: 40
    },
    requiredSkill: 'Smithing'
  },
  'vit_ring': {
    id: 'vit_ring',
    name: '체력의 반지',
    type: ITEM_TYPES.EQUIPMENT,
    slot: EQUIPMENT_SLOTS.RING,
    description: '체력을 증가시키는 반지입니다.',
    baseStats: {
      VIT: 3
    },
    craftingCost: {
      ore: 15,
      gold: 40
    },
    requiredSkill: 'Smithing'
  },
  'int_ring': {
    id: 'int_ring',
    name: '지능의 반지',
    type: ITEM_TYPES.EQUIPMENT,
    slot: EQUIPMENT_SLOTS.RING,
    description: '지능을 증가시키는 반지입니다.',
    baseStats: {
      INT: 3
    },
    craftingCost: {
      herb: 15,
      gold: 40
    },
    requiredSkill: 'Magic'
  }
};

// 특수 능력치 정의
export const SPECIAL_ABILITIES = {
  CRITICAL_CHANCE: {
    id: 'critical_chance',
    name: '치명타',
    description: '공격시 {chance}% 확률로 공격력 {damage}%',
    minChance: 5,
    maxChance: 15,
    minDamage: 110,
    maxDamage: 150
  },
  HEALTH_REGEN: {
    id: 'health_regen',
    name: '생명력 회복',
    description: '{interval}초마다 HP +{amount} 회복',
    minInterval: 8,
    maxInterval: 12,
    minAmount: 5,
    maxAmount: 15
  },
  MANA_REGEN: {
    id: 'mana_regen',
    name: '마나 회복',
    description: '{interval}초마다 MP +{amount} 회복',
    minInterval: 12,
    maxInterval: 18,
    minAmount: 3,
    maxAmount: 8
  },
  DAMAGE_REDUCTION: {
    id: 'damage_reduction',
    name: '피해 감소',
    description: '받는 피해 {reduction}% 감소',
    minReduction: 10,
    maxReduction: 20
  },
  SPEED_BOOST: {
    id: 'speed_boost',
    name: '속도 증가',
    description: '이동 속도 {boost}% 증가',
    minBoost: 15,
    maxBoost: 25
  },
};

// 장비 품질별 색상 시스템
export function getEquipmentQualityColor(specialAbilitiesCount) {
  const colors = {
    0: 'text-black-400',    // 검정색 - 특수 능력 없음
    1: 'text-blue-400',    // 파랑색 - 1개
    2: 'text-purple-400',  // 보라색 - 2개
    3: 'text-orange-400',  // 주황색 - 3개
    4: 'text-red-400'      // 빨강색 - 4개
  };
  return colors[specialAbilitiesCount] || colors[0];
}

export function getEquipmentQualityBorderColor(specialAbilitiesCount) {
  const colors = {
    0: 'border-black-400',    // 검정색 - 특수 능력 없음
    1: 'border-blue-400',    // 파랑색 - 1개
    2: 'border-purple-400',  // 보라색 - 2개
    3: 'border-orange-400',  // 주황색 - 3개
    4: 'border-red-400'      // 빨강색 - 4개
  };
  return colors[specialAbilitiesCount] || colors[0];
}

// 아이템을 종류별로 분류하는 함수
export function getItemsByType(type) {
  return Object.values(ITEM_DEFINITIONS).filter(item => item.type === type);
}

// 아이템을 서브타입별로 분류하는 함수
export function getItemsBySubtype(subtype) {
  return Object.values(ITEM_DEFINITIONS).filter(item => item.subtype === subtype);
}

// 아이템을 슬롯별로 분류하는 함수
export function getItemsBySlot(slot) {
  return Object.values(ITEM_DEFINITIONS).filter(item => item.slot === slot);
}

// 아이템 ID로 정의를 가져오는 함수
export function getItemDefinition(itemId) {
  return ITEM_DEFINITIONS[itemId];
}

// 아이템이 제작 가능한지 확인하는 함수
export function canCraftItem(itemId, resources, citizenSkills = {}) {
  const item = ITEM_DEFINITIONS[itemId];
  if (!item) return false;

  // 자원 확인
  for (const [resource, amount] of Object.entries(item.craftingCost)) {
    if (resources[resource] < amount) return false;
  }

  return true;
}

// 고유 ID 생성 함수
let uniqueIdCounter = 1;
export function generateUniqueId() {
  return `item_${Date.now()}_${uniqueIdCounter++}`;
}

// 동적 장비 생성 함수
export function generateDynamicEquipment(baseItemId, smithyCitizens = [], towerCitizens = []) {
  console.log('generateDynamicEquipment 호출:', baseItemId);
  
  const baseItem = ITEM_DEFINITIONS[baseItemId];
  if (!baseItem || baseItem.type !== ITEM_TYPES.EQUIPMENT) {
    console.log('기본 아이템을 찾을 수 없거나 장비가 아님:', baseItemId);
    return null;
  }

  console.log('기본 아이템:', baseItem);

  // 대장장이들의 평균 숙련도와 최고 숙련도 계산
  const smithingSkill = baseItem.requiredSkill === 'Smithing' ? 'Smithing' : 'Magic';
  const relevantCitizens = smithingSkill === 'Smithing' ? smithyCitizens : towerCitizens;
  
  console.log('관련 시민 수:', relevantCitizens.length, '스킬:', smithingSkill);
  
  // 시민이 없어도 기본 아이템 생성
  let averageSkill = 1;
  let maxSkill = 1;
  
  if (relevantCitizens.length > 0) {
    averageSkill = relevantCitizens.reduce((sum, citizen) => 
      sum + (citizen.talent[smithingSkill] || 1), 0) / relevantCitizens.length;
    
    maxSkill = Math.max(...relevantCitizens.map(citizen => 
      citizen.talent[smithingSkill] || 1));
  }

  // 기본 스탯에 숙련도 보너스 적용
  const skillMultiplier = 1 + (averageSkill - 1) * 0.1; // 평균 숙련도 보너스
  const maxSkillBonus = (maxSkill - 1) * 0.05; // 최고 숙련도 보너스
  
  const finalStats = {};
  for (const [stat, value] of Object.entries(baseItem.baseStats)) {
    const baseValue = Math.floor(value * skillMultiplier);
    const bonusValue = Math.floor(baseValue * maxSkillBonus);
    finalStats[stat] = baseValue + bonusValue;
  }

  // 특수 능력치 확률적 부여 (완전 랜덤, 개수 많을수록 확률 낮게)
  const specialAbilities = [];
  const availableAbilities = Object.values(SPECIAL_ABILITIES);
  
  // 옵션 개수별 확률 (개수 많을수록 확률 낮게)
  const optionProbabilities = [0.5, 0.3, 0.1, 0.05]; // 0개, 1개, 2개, 3개, 4개 옵션 확률
  
  for (let i = 0; i < 4; i++) { // 최대 4개 옵션
    if (Math.random() < optionProbabilities[i]) {
      const randomAbility = availableAbilities[Math.floor(Math.random() * availableAbilities.length)];
      
      // 랜덤 범위로 능력치 생성
      let generatedAbility = { ...randomAbility };
      
      switch (randomAbility.id) {
        case 'critical_chance':
          generatedAbility.chance = Math.floor(Math.random() * (randomAbility.maxChance - randomAbility.minChance + 1)) + randomAbility.minChance;
          generatedAbility.damage = Math.floor(Math.random() * (randomAbility.maxDamage - randomAbility.minDamage + 1)) + randomAbility.minDamage;
          generatedAbility.description = `공격시 ${generatedAbility.chance}% 확률로 공격력 ${generatedAbility.damage}%`;
          break;
        case 'health_regen':
          generatedAbility.interval = Math.floor(Math.random() * (randomAbility.maxInterval - randomAbility.minInterval + 1)) + randomAbility.minInterval;
          generatedAbility.amount = Math.floor(Math.random() * (randomAbility.maxAmount - randomAbility.minAmount + 1)) + randomAbility.minAmount;
          generatedAbility.description = `${generatedAbility.interval}초마다 HP +${generatedAbility.amount} 회복`;
          break;
        case 'mana_regen':
          generatedAbility.interval = Math.floor(Math.random() * (randomAbility.maxInterval - randomAbility.minInterval + 1)) + randomAbility.minInterval;
          generatedAbility.amount = Math.floor(Math.random() * (randomAbility.maxAmount - randomAbility.minAmount + 1)) + randomAbility.minAmount;
          generatedAbility.description = `${generatedAbility.interval}초마다 MP +${generatedAbility.amount} 회복`;
          break;
        case 'damage_reduction':
          generatedAbility.reduction = Math.floor(Math.random() * (randomAbility.maxReduction - randomAbility.minReduction + 1)) + randomAbility.minReduction;
          generatedAbility.description = `받는 피해 ${generatedAbility.reduction}% 감소`;
          break;
        case 'speed_boost':
          generatedAbility.boost = Math.floor(Math.random() * (randomAbility.maxBoost - randomAbility.minBoost + 1)) + randomAbility.minBoost;
          generatedAbility.description = `이동 속도 ${generatedAbility.boost}% 증가`;
          break;
      }
      
      specialAbilities.push(generatedAbility);
    } else {
      break; // 확률에 실패하면 더 이상 옵션 추가하지 않음
    }
  }

  // 고품질 확률 (최고 숙련도 기반)
  const qualityChance = Math.min(0.2, maxSkill * 0.015); // 최대 20% 확률
  const isHighQuality = Math.random() < qualityChance;
  
  if (isHighQuality) {
    // 고품질일 경우 모든 스탯 20% 증가
    for (const stat in finalStats) {
      finalStats[stat] = Math.floor(finalStats[stat] * 1.2);
    }
  }

  // 고유 ID 생성
  const uniqueId = generateUniqueId();

  // 동적 아이템 생성
  const dynamicItem = {
    id: uniqueId,
    baseItemId: baseItemId, // 원본 아이템 ID 참조
    name: isHighQuality ? `고급 ${baseItem.name}` : baseItem.name,
    type: baseItem.type,
    slot: baseItem.slot,
    description: baseItem.description,
    baseStats: finalStats,
    specialAbilities: specialAbilities,
    quality: isHighQuality ? 'high' : 'normal',
    craftedBy: {
      averageSkill: Math.round(averageSkill * 10) / 10,
      maxSkill: maxSkill,
      citizenCount: relevantCitizens.length
    },
    craftingCost: baseItem.craftingCost,
    requiredSkill: baseItem.requiredSkill
  };

  return dynamicItem;
}

// 아이템 제작 비용을 계산하는 함수 (시민 숙련도 반영)
export function calculateCraftingCost(itemId, citizenSkills = {}) {
  const item = ITEM_DEFINITIONS[itemId];
  if (!item) return null;

  const baseCost = { ...item.craftingCost };
  
  // 시민 숙련도에 따른 비용 할인
  if (item.requiredSkill) {
    const skillLevel = citizenSkills[item.requiredSkill] || 0;
    const discount = Math.min(0.5, skillLevel * 0.05); // 최대 50% 할인
    
    for (const resource in baseCost) {
      baseCost[resource] = Math.max(1, Math.floor(baseCost[resource] * (1 - discount)));
    }
  }

  return baseCost;
}
