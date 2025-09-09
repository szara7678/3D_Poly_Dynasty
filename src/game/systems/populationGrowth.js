import { state } from "../state";
import { createRandomCitizen } from "../factory/citizen";
import { terrain } from "../../world/terrain";
import { notify } from "../state";

/**
 * 명성 기반 인구 증가 시스템
 * 명성에 비해 인구가 적으면 높은 확률, 많으면 낮은 확률로 인구 증가
 */
export function runPopulationGrowth() {
  const currentReputation = state.res.reputation;
  const currentPopulation = state.population;
  
  // 명성에 따른 이상적인 인구 비율 계산
  const idealPopulationRatio = 0.1; // 명성 1당 인구 0.1명이 이상적
  const idealPopulation = Math.floor(currentReputation * idealPopulationRatio);
  
  // 현재 인구가 이상적 인구보다 적으면 인구 증가 확률 계산
  if (currentPopulation < idealPopulation) {
    const populationDeficit = idealPopulation - currentPopulation;
    const deficitRatio = populationDeficit / Math.max(1, idealPopulation);
    
    // 부족한 정도에 비례하여 확률 증가 (최대 20%)
    const baseChance = 0.05; // 기본 5% 확률
    const bonusChance = deficitRatio * 0.15; // 최대 15% 추가
    const totalChance = Math.min(0.2, baseChance + bonusChance);
    
    if (Math.random() < totalChance) {
      spawnNewCitizen();
    }
  }
}

/**
 * 새로운 시민 생성
 * 랜덤한 마을 회관 주변에 생성
 */
function spawnNewCitizen() {
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
  
  console.log(`새로운 시민 ${newCitizen.name}이 마을에 도착했습니다! (인구: ${state.population})`);
  
  // UI 업데이트를 위한 알림
  notify();
}
