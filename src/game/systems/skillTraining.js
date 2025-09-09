// 수련치 상승 시스템 - 생산, 전투 등 스킬 사용으로 인한 수련치 상승 관리
import { calculateHP, calculateMP, calculateCombatStats } from "../factory/citizen";

/**
 * 스킬별 스탯 증가 매핑
 */
const SKILL_STAT_MAPPING = {
  Farming: { VIT: 2 },           // 농사 - 체력 2
  Woodcutting: { STR: 1, VIT: 1 }, // 벌목 - 힘 1, 체력 1
  Gathering: { AGI: 2 },          // 채집 - 민첩 2
  Mining: { STR: 1, VIT: 1 },     // 광부 - 힘 1, 체력 1
  Sword: { STR: 2, AGI: 1, VIT: 1 }, // 전사 - 힘 2, 민첩 1, 체력 1
  Magic: { INT: 2 },              // 마법 - 지력 2
  Smithing: { STR: 1, VIT: 1 },   // 대장장이 - 힘 1, 체력 1
  Admin: { INT: 1, AGI: 1 },      // 행정 - 지력 1, 민첩 1
};

/**
 * 수련치 상승 시 관련 스탯 증가 처리
 * @param {Object} worker - 시민 객체
 * @param {string} skillKey - 스킬 키
 * @param {number} practiceIncrease - 수련치 증가량 (기본 1)
 */
export function increaseStatsOnPractice(worker, skillKey, practiceIncrease = 1) {
  const statMapping = SKILL_STAT_MAPPING[skillKey];
  if (!statMapping) return;
  
  // 수련치가 10의 배수일 때마다 스탯 증가
  const currentPractice = worker.practice?.[skillKey] || 0;
  const newPractice = currentPractice + practiceIncrease;
  
  // 10의 배수 단위로 스탯 증가
  const oldLevel = Math.floor(currentPractice / 10);
  const newLevel = Math.floor(newPractice / 10);
  
  if (newLevel > oldLevel) {
    const levelIncrease = newLevel - oldLevel;
    
    for (const [statKey, increase] of Object.entries(statMapping)) {
      if (!worker.stats) worker.stats = {};
      worker.stats[statKey] = (worker.stats[statKey] || 5) + (increase * levelIncrease);
      
      console.log(`${worker.name}의 ${statKey} 스탯 증가! (+${increase * levelIncrease})`);
    }
    
    // HP/MP 최대치 재계산 및 현재치 보정
    if (worker.stats.VIT) {
      worker.hpMax = calculateHP(worker.stats.VIT);
      if (typeof worker.hp !== 'number') worker.hp = worker.hpMax;
      else worker.hp = Math.min(worker.hp, worker.hpMax);
    }
    if (worker.stats.INT) {
      worker.mpMax = calculateMP(worker.stats.INT);
      if (typeof worker.mp !== 'number') worker.mp = worker.mpMax;
      else worker.mp = Math.min(worker.mp, worker.mpMax);
    }
    
    // 전투 스탯 재계산
    if (worker.stats) {
      worker.combatStats = calculateCombatStats(worker.stats);
    }
  }
}

/**
 * 수련치 상승 확률 계산
 * @param {number} talent - 재능 (0~10)
 * @param {number} currentPractice - 현재 수련치 (0~500)
 * @returns {number} 상승 확률 (0~1)
 */
export function calculatePracticeChance(talent, currentPractice) {
  // 기본 2% 확률
  const baseChance = 0.02;
  
  // 재능에 따른 기하급수적 보너스 (재능이 낮으면 매우 낮은 확률)
  const talentMultiplier = Math.pow(talent / 10, 2); // 재능 0일 때 0, 재능 10일 때 1
  const talentBonus = talentMultiplier * 0.08; // 최대 8% 추가
  
  // 수련치가 높을수록 확률 감소 (500일 때 90% 감소)
  const practicePenalty = currentPractice * 0.00018;
  
  // 최소 0.1% 확률 보장
  return Math.max(0.001, baseChance + talentBonus - practicePenalty);
}

/**
 * 수련치 상승 처리
 * @param {Object} worker - 시민 객체
 * @param {string} skillKey - 스킬 키
 * @param {number} maxPractice - 최대 수련치 (기본 500)
 * @returns {boolean} 수련치가 상승했는지 여부
 */
export function tryIncreasePractice(worker, skillKey, maxPractice = 500) {
  const talent = worker.talents?.[skillKey] || 0;
  const currentPractice = worker.practice?.[skillKey] || 0;
  
  // 최대 수련치에 도달했으면 상승 불가
  if (currentPractice >= maxPractice) {
    return false;
  }
  
  // 상승 확률 계산
  const chance = calculatePracticeChance(talent, currentPractice);
  
  // 확률 체크
  if (Math.random() < chance) {
    if (!worker.practice) worker.practice = {};
    worker.practice[skillKey] = Math.min(maxPractice, currentPractice + 1);
    
    console.log(`${worker.name}의 ${skillKey} 수련치 상승! (${currentPractice} → ${worker.practice[skillKey]})`);
    
    // 수련치 상승 시 관련 스탯 증가
    increaseStatsOnPractice(worker, skillKey, 1);
    
    return true;
  }
  
  return false;
}

/**
 * 생산으로 인한 수련치 상승 처리
 * @param {Object} worker - 시민 객체
 * @param {string} skillKey - 스킬 키
 * @returns {boolean} 수련치가 상승했는지 여부
 */
export function handleProductionPractice(worker, skillKey) {
  return tryIncreasePractice(worker, skillKey, 500);
}

/**
 * 전투로 인한 수련치 상승 처리 (향후 확장용)
 * @param {Object} worker - 시민 객체
 * @param {string} skillKey - 스킬 키
 * @returns {boolean} 수련치가 상승했는지 여부
 */
export function handleCombatPractice(worker, skillKey) {
  // 전투는 생산보다 더 높은 확률로 수련치 상승
  const talent = worker.talents?.[skillKey] || 0;
  const currentPractice = worker.practice?.[skillKey] || 0;
  
  if (currentPractice >= 500) {
    return false;
  }
  
  // 전투는 기본 확률이 더 높음 (3%)
  const baseChance = 0.03;
  const talentMultiplier = Math.pow(talent / 10, 2);
  const talentBonus = talentMultiplier * 0.07; // 최대 7% 추가
  const practicePenalty = currentPractice * 0.00018;
  const chance = Math.max(0.002, baseChance + talentBonus - practicePenalty);
  
  if (Math.random() < chance) {
    if (!worker.practice) worker.practice = {};
    worker.practice[skillKey] = Math.min(500, currentPractice + 1);
    
    console.log(`${worker.name}의 ${skillKey} 수련치 상승! (전투) (${currentPractice} → ${worker.practice[skillKey]})`);
    
    // 수련치 상승 시 관련 스탯 증가
    increaseStatsOnPractice(worker, skillKey, 1);
    
    return true;
  }
  
  return false;
}
