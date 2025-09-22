// 간단한 몬스터 시스템 - 시민과 동일한 이동 시스템 사용

import { state, updateMonster } from '../state.js';
import { moveEntity } from './movement.js';

// 고블린의 홈 군락지 추적을 위한 맵
const goblinHomeNests = new Map();
// 오크의 홈 군락지 추적을 위한 맵
const orcHomeNests = new Map();

// 고블린의 홈 군락지 설정 함수
export function setGoblinHomeNest(goblinId, nestId) {
  goblinHomeNests.set(goblinId, nestId);
}

// 오크의 홈 군락지 설정 함수
export function setOrcHomeNest(orcId, nestId) {
  orcHomeNests.set(orcId, nestId);
}

// 고블린의 홈 군락지 가져오기 함수
function getGoblinHomeNest(goblinId) {
  return goblinHomeNests.get(goblinId);
}

// 오크의 홈 군락지 가져오기 함수
function getOrcHomeNest(orcId) {
  return orcHomeNests.get(orcId);
}

// 몬스터 시스템 메인 실행 함수
export function runMonsterSystem() {
  const deltaTime = 500; // 고정 틱 시간 (ms)
  
  // 모든 몬스터 업데이트
  updateAllMonsters(deltaTime);
}

// 모든 몬스터 업데이트
function updateAllMonsters(deltaTime) {
  Object.values(state.monsters).forEach(monster => {
    // 몬스터가 살아있는지 확인 (상태가 문자열이거나 isAlive 속성이 있는 경우)
    const isAlive = typeof monster.state === 'string' || monster.state?.isAlive !== false;
    if (isAlive) {
      updateMonsterMovement(monster, deltaTime);
    }
  });
}

// 몬스터 이동 업데이트 (시민과 동일한 이동 시스템 사용)
function updateMonsterMovement(monster, deltaTime) {
  if (!monster.pos) return; // pos 속성 사용
  
  // 목표가 없으면 새로운 랜덤 목표 설정
  if (!monster.moveTo) {
    setRandomTarget(monster);
  }
  
  // 랜덤하게 목표 변경 (10% 확률로 더 자주 움직임)
  if (monster.moveTo && Math.random() < 0.1) {
    setRandomTarget(monster);
  }
  
  // 시민과 동일한 이동 함수 사용
  if (monster.moveTo) {
    const isMoving = moveEntity(monster, monster.moveTo, deltaTime / 1000, 'monster');
    
    // 이동 완료 시 상태 업데이트 (목표 도달 시 새로운 목표 설정)
    if (!isMoving) {
      monster.state = "idle";
      setRandomTarget(monster); // 목표 도달 시 즉시 새로운 목표 설정
    }
  }
  
  // 몬스터 상태 업데이트
  updateMonster(monster.id, monster);
}

// 랜덤 목표 설정 (군락지 주변에서 배회)
function setRandomTarget(monster) {
  let homeNestId;
  let centerX = 0, centerZ = 0;
  let patrolRadius = 15; // 기본 배회 반경
  
  // 몬스터 타입에 따라 홈 군락지 찾기
  if (monster.type === 'orc') {
    homeNestId = getOrcHomeNest(monster.id);
  } else {
    homeNestId = getGoblinHomeNest(monster.id);
  }
  
  // 홈 군락지가 있으면 해당 군락지 주변에서 배회
  if (homeNestId && state.buildings[homeNestId]) {
    const nest = state.buildings[homeNestId];
    centerX = nest.tile.x;
    centerZ = nest.tile.z;
    patrolRadius = 5; // 군락지 주변 배회 반경 (더 작게)
  } else {
    // 홈 군락지가 없으면 마을 중심에서 배회
    patrolRadius = 15 + Math.random() * 20; // 15~35 거리 (더 작게)
  }
  
  // 배회 반경 내에서 랜덤 위치 선택
  const angle = Math.random() * Math.PI * 2;
  const distance = Math.random() * patrolRadius;
  
  monster.moveTo = {
    x: centerX + Math.cos(angle) * distance,
    y: 0,
    z: centerZ + Math.sin(angle) * distance
  };
}
