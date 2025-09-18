// src/game/systems/populationGrowth.js

import { state } from "../state";
import { createRandomCitizen } from "../factory/citizen";
import { terrain } from "../../world/terrain";
import { notify } from "../state";

// 상단 공통 상수
const HARD_POP_CAP = 100;

/**
 * 복합적인 인구 증가 시스템
 * 명성, 건물 다양성, 시민 수련치, 자원 상황 등을 종합적으로 고려
 */
export function runPopulationGrowth() {
  // 하드캡 가드
  if (state.population >= HARD_POP_CAP) return;
  
  const currentReputation = state.res.reputation;
  const currentPopulation = state.population;
  
  // 현재 상황에서 달성 가능한 최대 인구 계산
  const maxPossiblePopulation = calculateMaxPossiblePopulation();
  
  // 기본 인구 증가 확률 계산
  const baseChance = calculateBasePopulationChance();
  
  // 명성 기반 인구 증가 확률
  const reputationChance = calculateReputationBasedChance();
  
  // 건물 다양성 기반 인구 증가 확률
  const buildingChance = calculateBuildingBasedChance();
  
  // 시민 수련치 기반 인구 증가 확률
  const citizenChance = calculateCitizenBasedChance();
  
  // 자원 상황 기반 인구 증가 확률
  const resourceChance = calculateResourceBasedChance();
  
  // 총 인구 증가 확률 (각 요소의 가중 평균)
  const totalChance = (
    baseChance * 0.18 +          // 기본 확률 18%
    reputationChance * 0.26 +    // 명성 기반 26%
    buildingChance * 0.18 +      // 건물 기반 18%
    citizenChance * 0.14 +       // 시민 기반 14%
    resourceChance * 0.14        // 자원 기반 14%
  ) * 0.8; // 전반 스케일 하향
  
  // 인구 증가 난이도 적용 (최대값 기반)
  const populationDifficultyMultiplier = calculatePopulationDifficulty(maxPossiblePopulation);
  const scaledChance = totalChance * populationDifficultyMultiplier;
  
  // 상한 근접 페널티(안전망): 상한 90% 이상이면 자동 하향
  const nearCapPenalty = state.population / maxPossiblePopulation >= 0.9 ? 0.4 : 1.0;
  
  // 최종 상한 5% 유지, 하드캡 가드
  const finalChance = Math.min(0.035, scaledChance * nearCapPenalty);
  if (state.population >= maxPossiblePopulation) return; // 재가드
  if (state.population >= HARD_POP_CAP) return;          // 절대 하드캡
  
  if (Math.random() < finalChance) {
    spawnNewCitizen();
    if (state.population > HARD_POP_CAP) state.population = HARD_POP_CAP; // 안전망
  }
}

/**
 * 기본 인구 증가 확률 계산
 */
function calculateBasePopulationChance() {
  const currentPopulation = state.population;
  
  // 인구가 적을수록 높은 확률, 많을수록 낮은 확률
  if (currentPopulation === 0) return 0.08; // 첫 시민 확률 소폭 하향
  if (currentPopulation < 5) return 0.04;  // 초기 인구 중간 확률 하향
  if (currentPopulation < 10) return 0.025; // 중간 인구 낮은 확률 하향
  return 0.008; // 많은 인구 매우 낮은 확률
}

/**
 * 명성 기반 인구 증가 확률 계산
 */
function calculateReputationBasedChance() {
  const currentReputation = state.res.reputation;
  const currentPopulation = state.population;
  
  if (currentPopulation === 0) return 0.08; // 첫 시민 확률 소폭 하향
  
  // 명성 대비 인구 비율 계산
  const reputationPerCitizen = currentReputation / currentPopulation;
  
  // 이상적인 비율 (시민 1명당 명성 3-5가 적절)
  const idealRatio = 4.2; // 약간 더 빡빡하게
  
  if (reputationPerCitizen < idealRatio) {
    // 명성이 부족한 경우 낮은 확률
    const deficit = idealRatio - reputationPerCitizen;
    return Math.max(0.001, 0.018 - deficit * 0.0045);
  } else if (reputationPerCitizen < idealRatio * 1.5) {
    // 적절한 비율일 때 중간 확률
    return 0.024;
  } else {
    // 명성이 충분한 경우 높은 확률
    return 0.038;
  }
}

/**
 * 건물 다양성 기반 인구 증가 확률 계산
 */
function calculateBuildingBasedChance() {
  const buildings = Object.values(state.buildings).filter(b => !b.construct?.active);
  if (buildings.length === 0) return 0;
  
  const buildingTypes = new Set(buildings.map(b => b.type));
  const diversityScore = buildingTypes.size;
  
  // 건물 다양성이 높을수록 인구 증가 확률 증가
  if (diversityScore >= 6) return 0.032;     // 매우 다양한 마을
  if (diversityScore >= 4) return 0.024;     // 다양한 마을
  if (diversityScore >= 2) return 0.016;     // 보통 마을
  return 0.008; // 단조로운 마을
}

/**
 * 시민 수련치 기반 인구 증가 확률 계산
 */
function calculateCitizenBasedChance() {
  const citizens = Object.values(state.units);
  if (citizens.length === 0) return 0.04; // 첫 시민 확률 소폭 하향
  
  let totalPractice = 0;
  let expertCount = 0;
  
  // 각 시민의 수련치 분석
  for (const citizen of citizens) {
    const practice = citizen.practice || {};
    let citizenMaxPractice = 0;
    
    for (const level of Object.values(practice)) {
      totalPractice += level;
      citizenMaxPractice = Math.max(citizenMaxPractice, level);
    }
    
    // 전문가 수 계산 (수련치 50 이상)
    if (citizenMaxPractice >= 50) {
      expertCount++;
    }
  }
  
  const averagePractice = totalPractice / citizens.length;
  const expertRatio = expertCount / citizens.length;
  
  // 평균 수련치와 전문가 비율에 따른 확률
  let chance = 0.008; // 기본 확률 하향
  
  if (averagePractice >= 30) chance += 0.016; // 높은 평균 수련치
  if (expertRatio >= 0.3) chance += 0.016;    // 많은 전문가
  
  return Math.min(0.038, chance);
}

/**
 * 자원 상황 기반 인구 증가 확률 계산
 */
function calculateResourceBasedChance() {
  const resources = state.res;
  
  // 자원이 풍부할수록 인구 증가 확률 증가
  let resourceScore = 0;
  
  // 각 자원의 충분함 정도 계산
  const resourceThresholds = {
    food: 50,
    wood: 30,
    ore: 20,
    herb: 15,
    gold: 100
  };
  
  for (const [resource, threshold] of Object.entries(resourceThresholds)) {
    if (resources[resource] >= threshold) {
      resourceScore += 1;
    }
  }
  
  // 자원 점수에 따른 확률
  if (resourceScore >= 4) return 0.032;     // 자원이 매우 풍부
  if (resourceScore >= 3) return 0.024;     // 자원이 풍부
  if (resourceScore >= 2) return 0.016;     // 자원이 보통
  return 0.008; // 자원이 부족
}

/**
 * 현재 상황에서 달성 가능한 최대 인구 계산 (병목 기반 + 하드캡 적용)
 */
function calculateMaxPossiblePopulation() {
  const rep = state.res.reputation;
  const buildings = Object.values(state.buildings).filter(b => !b.construct?.active);
  const res = state.res;

  // 1) 주거 수용력(직관적 병목)
  const totalHousing = buildings.reduce((sum, b) => sum + (b.capacity || 0), 0); // capacity 합
  const housingCap = Math.max(5, totalHousing); // 최소 5

  // 2) 식량 수용력(일일 식량 생산·비축 기반의 단순 상한)
  //   - 보유 식량의 sqrt를 쓰면 초반엔 도움이 되되, 장기적으로는 생산을 늘려야 커짐
  const foodStock = res.food || 0;
  const foodCap = Math.max(5, Math.floor(Math.sqrt(foodStock) * 5)); // 예: 100식량 → 50명

  // 3) 명성 기반 소프트 상한(치안/위생/매력도): 명성 1 당 0.25명 정도
  const repCap = Math.max(5, Math.floor(rep * 0.25));

  // === 병목 적용 ===
  const softMax = Math.min(housingCap, foodCap, repCap);

  // === 절대 하드캡 적용 ===
  return Math.min(HARD_POP_CAP, softMax);
}

/**
 * 인구 증가 난이도 계산 (로지스틱 감쇠 + 상한 초과 시 0)
 */
function calculatePopulationDifficulty(maxPossiblePopulation) {
  const p = state.population;
  if (p >= maxPossiblePopulation) return 0.0; // 상한 이상이면 절대 증가 없음

  // 로지스틱 감쇠: 상한의 60% 이후 급감 (튜닝 지점)
  const ratio = p / maxPossiblePopulation; // 0~1
  const k = 10;       // 경사
  const x0 = 0.6;     // 감쇠 시작점
  const logistic = 1 / (1 + Math.exp(k * (ratio - x0))); // 0~1

  // 초반엔 1에 가깝고, 상한 근처에서 0으로 수렴
  return logistic;
}

/**
 * 새로운 시민 생성
 * 랜덤한 마을 회관 주변에 생성
 */
function spawnNewCitizen() {
  if (state.population >= HARD_POP_CAP) return;
  
  const townHalls = Object.values(state.buildings).filter(b => 
    b.type === "town_hall" && !b.construct?.active
  );
  
  if (townHalls.length === 0) return; // 마을 회관이 없으면 생성 불가
  
  // 랜덤한 마을 회관 선택
  const randomHall = townHalls[Math.floor(Math.random() * townHalls.length)];
  const hallPos = randomHall.tile;
  
  // 마을 회관 주변 반경 내에서 랜덤 위치 생성
  const spawnRadius = 15; // 마을 회관 주변 15 반경
  const angle = Math.random() * Math.PI * 2;
  const distance = Math.random() * spawnRadius;
  
  const spawnX = hallPos.x + Math.cos(angle) * distance;
  const spawnZ = hallPos.z + Math.sin(angle) * distance;
  const spawnY = terrain.groundHeight(spawnX, spawnZ);
  
  // 새로운 시민 생성
  const newCitizen = createRandomCitizen({ x: spawnX, y: spawnY, z: spawnZ });
  state.units[newCitizen.id] = newCitizen;
  state.population += 1;
  
  // 하드캡 안전망
  state.population = Math.min(state.population, HARD_POP_CAP);
  
  console.log(`새로운 시민 ${newCitizen.name}이 마을에 도착했습니다! (인구: ${state.population})`);
  
  // UI 업데이트를 위한 알림
  notify();
}
