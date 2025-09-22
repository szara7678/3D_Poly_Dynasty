import { uid } from "../state";
import { rollStats, rollTalent, rollPractice, randomName, randomAppearance } from "../content/units";

/**
 * HP 계산 함수 (체력 기반 + 장비 효과)
 * @param {number} vit - 체력 스탯
 * @param {Object} equipment - 착용 장비 효과
 * @returns {number} HP 값
 */
export function calculateHP(vit, equipment = {}) {
  let baseHP = 100 + Math.floor((vit - 5) * 6);
  
  // 장비 효과 적용
  if (equipment.baseStats) {
    // 직접적인 HP 보너스
    baseHP += equipment.baseStats.health || 0;
    
    // VIT 스탯 보너스 (체력 1당 HP 6 증가)
    baseHP += (equipment.baseStats.VIT || 0) * 6;
  }
  
  return Math.max(1, baseHP);
}

/**
 * MP 계산 함수 (지력 기반 + 장비 효과)
 * @param {number} int - 지력 스탯
 * @param {Object} equipment - 착용 장비 효과
 * @returns {number} MP 값
 */
export function calculateMP(int, equipment = {}) {
  let baseMP = 20 + Math.floor((int - 5) * 6);
  
  // 장비 효과 적용
  if (equipment.baseStats) {
    // 직접적인 MP 보너스
    baseMP += equipment.baseStats.magicAttack || 0;
    
    // INT 스탯 보너스 (지력 1당 MP 6 증가)
    baseMP += (equipment.baseStats.INT || 0) * 6;
  }
  
  return Math.max(1, baseMP);
}

/**
 * 전투 스탯 계산 함수 (장비 효과 포함)
 * @param {Object} stats - 스탯 객체
 * @param {Object} equipment - 착용 장비 객체
 * @returns {Object} 전투 스탯 객체
 */
export function calculateCombatStats(stats, equipment = {}) {
  let attack = Math.floor(stats.STR * 2 + stats.AGI * 0.5); // 공격력: 힘*2 + 민첩*0.5
  let defense = Math.floor(stats.VIT * 1.5 + stats.AGI * 0.5); // 방어력: 체력*1.5 + 민첩*0.5
  let magicAttack = Math.floor(stats.INT * 2); // 마법 공격력: 지력*2
  
  // 장비 효과 적용
  if (equipment) {
    // 기본 스탯 보너스
    if (equipment.baseStats) {
      attack += equipment.baseStats.attack || 0;
      defense += equipment.baseStats.defense || 0;
      magicAttack += equipment.baseStats.magicAttack || 0;
      
      // 스탯 보너스
      attack += (equipment.baseStats.STR || 0) * 2;
      attack += (equipment.baseStats.AGI || 0) * 0.5;
      defense += (equipment.baseStats.VIT || 0) * 1.5;
      defense += (equipment.baseStats.AGI || 0) * 0.5;
      magicAttack += (equipment.baseStats.INT || 0) * 2;
    }
    
    // 특수 능력 효과
    if (equipment.specialAbilities) {
      equipment.specialAbilities.forEach(ability => {
        switch (ability.id) {
          case 'critical_chance':
            // 치명타 확률은 별도 처리
            break;
          case 'health_regen':
            // 생명력 회복은 별도 처리
            break;
          case 'mana_regen':
            // 마나 회복은 별도 처리
            break;
          case 'damage_reduction':
            // 피해 감소는 별도 처리
            break;
          case 'speed_boost':
            // 속도 증가는 별도 처리
            break;
        }
      });
    }
  }
  
  return {
    attack: Math.max(0, attack),
    defense: Math.max(0, defense),
    magicAttack: Math.max(0, magicAttack),
  };
}

/**
 * 시민의 전투 스탯과 HP/MP를 업데이트하는 함수
 * @param {Object} citizen - 시민 객체
 * @param {Object} warehouse - 창고 객체
 * @returns {Object} 업데이트된 시민 객체
 */
export function updateCitizenCombatStats(citizen, warehouse) {
  if (!citizen || !warehouse) return citizen;
  
  // 착용된 장비들 가져오기
  const equippedItems = warehouse.equipped[citizen.id] || {};
  const allEquipment = {};
  
  // 각 슬롯의 장비 효과 합산
  Object.entries(equippedItems).forEach(([slot, itemId]) => {
    const item = warehouse.equipment[itemId];
    if (item && item.baseStats) {
      // 기본 스탯 합산
      Object.entries(item.baseStats).forEach(([stat, value]) => {
        if (!allEquipment[stat]) allEquipment[stat] = 0;
        allEquipment[stat] += value;
      });
    }
  });
  
  // 기본 스탯에 장비 효과 반영 (임시 스탯 생성)
  const enhancedStats = { ...citizen.stats };
  if (allEquipment.STR) enhancedStats.STR += allEquipment.STR;
  if (allEquipment.AGI) enhancedStats.AGI += allEquipment.AGI;
  if (allEquipment.VIT) enhancedStats.VIT += allEquipment.VIT;
  if (allEquipment.INT) enhancedStats.INT += allEquipment.INT;
  
  // 전투 스탯 재계산
  citizen.combatStats = calculateCombatStats(enhancedStats, { baseStats: allEquipment });
  
  // HP/MP 재계산
  const newHPMax = calculateHP(enhancedStats.VIT, { baseStats: allEquipment });
  const newMPMax = calculateMP(enhancedStats.INT, { baseStats: allEquipment });
  
  // HP/MP 비율 유지하면서 최대치 업데이트
  const hpRatio = citizen.hpMax > 0 ? citizen.hp / citizen.hpMax : 1;
  const mpRatio = citizen.mpMax > 0 ? citizen.mp / citizen.mpMax : 1;
  
  citizen.hpMax = newHPMax;
  citizen.mpMax = newMPMax;
  citizen.hp = Math.floor(citizen.hpMax * hpRatio);
  citizen.mp = Math.floor(citizen.mpMax * mpRatio);
  
  // 장비 효과가 반영된 스탯을 시민 객체에 추가
  citizen.enhancedStats = enhancedStats;
  
  return citizen;
}

export function createRandomCitizen(pos){
  const id = uid("u");
  const stats = rollStats();
  const talents = rollTalent();
  const practice = rollPractice();
  const appearance = randomAppearance();
  const size = Math.max(0.8, Math.min(1.2, 0.9 + Math.random()*0.3));
  
  // 최대치 계산
  const hpMax = calculateHP(stats.VIT);
  const mpMax = calculateMP(stats.INT);

  return {
    id,
    name: randomName(),
    pos: { x: pos?.x ?? 0, y: pos?.y ?? 0, z: pos?.z ?? 0 },
    dir: Math.random() * Math.PI * 2,
    size,
    team: 0, // 플레이어 소속 (0)
    // 현재치와 최대치 동시 설정
    hp: hpMax,
    hpMax,
    mp: mpMax,
    mpMax,
    stats,
    talents, // 재능: 수련 속도에 영향
    practice, // 수련치: 0~10, 효율에 영향
    combatStats: calculateCombatStats(stats), // 전투 스탯
    inventory: { items: {}, equipment: {}, capacity: 20, weight: 0 },
    appearance,
    originalAppearance: { ...appearance }, // 초기 외형을 별도로 저장하여 숨겨진 상태에서도 유지
    state: "idle",
    assignedBuildingId: null,
  };
}


