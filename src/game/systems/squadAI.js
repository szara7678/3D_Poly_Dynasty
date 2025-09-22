// 부대 AI 시스템 - 부대의 명령 실행 및 행동 패턴 관리

import { state, updateUnit } from '../state.js';
import { calculateDistance } from '../../utils/combatUtils.js';
import { moveEntity } from './movement.js';

// 부대 명령 타입 정의
export const SQUAD_COMMANDS = {
  ATTACK: 'attack',     // 공격
  RETREAT: 'retreat',   // 퇴각
  PATROL: 'patrol'      // 정찰
};

// 부대 AI 상태 정의
export const SQUAD_AI_STATES = {
  MOVING: 'moving',           // 이동 중
  ATTACKING: 'attacking',     // 공격 중
  RETREATING: 'retreating',   // 퇴각 중
  PATROLLING: 'patrolling',   // 정찰 중
  IDLE: 'idle'               // 대기
};

// 개별 시민의 부대 명령 처리
export function updateSquadMemberAI(unit, deltaTime, gameState) {
  if (!unit || !unit.squadCommand || !unit.squadTarget) return;
  
  // 부대 명령에 따른 행동 처리
  switch (unit.squadCommand) {
    case SQUAD_COMMANDS.ATTACK:
      handleAttackCommand(unit, deltaTime, gameState);
      break;
    case SQUAD_COMMANDS.RETREAT:
      handleRetreatCommand(unit, deltaTime, gameState);
      break;
    case SQUAD_COMMANDS.PATROL:
      handlePatrolCommand(unit, deltaTime, gameState);
      break;
    default:
      break;
  }
  
  // 시민 상태 업데이트
  updateUnit(unit.id, unit);
}

// 공격 명령 처리
function handleAttackCommand(unit, deltaTime, gameState) {
  const targetPosition = unit.squadTarget;
  
  // 유효성 검사
  if (!targetPosition || !unit.position) {
    console.warn('Invalid target position or unit position for attack command');
    return;
  }
  
  const distanceToTarget = calculateDistance(unit.position, targetPosition);
  
  // 이동 중에도 주변 적 탐지 및 공격
  const nearbyEnemies = findNearbyEnemies(unit, gameState, 8.0); // 공격 범위 확대
  
  if (nearbyEnemies.length > 0) {
    // 가장 가까운 적 공격
    const closestEnemy = nearbyEnemies[0];
    const distanceToEnemy = calculateDistance(unit.position, closestEnemy.position);
    
    if (distanceToEnemy <= 3.0) { // 공격 가능 거리
      attackEnemy(unit, closestEnemy);
      unit.squadAIState = SQUAD_AI_STATES.ATTACKING;
    } else {
      // 적에게 접근
      moveTowardsTarget(unit, closestEnemy.position, deltaTime);
      unit.squadAIState = SQUAD_AI_STATES.ATTACKING;
    }
  } else if (distanceToTarget < 2.0) {
    // 목표 지점에 도달하고 적이 없으면 대기
    unit.squadAIState = SQUAD_AI_STATES.IDLE;
  } else {
    // 적이 없으면 목표 지점으로 이동
    moveTowardsTarget(unit, targetPosition, deltaTime);
    unit.squadAIState = SQUAD_AI_STATES.MOVING;
  }
}

// 퇴각 명령 처리
function handleRetreatCommand(unit, deltaTime, gameState) {
  // 유효성 검사
  if (!unit.position) {
    console.warn('Invalid unit position for retreat command');
    return;
  }
  
  // 가장 가까운 마을 회관 찾기
  const nearestTownHall = findNearestTownHall(unit, gameState);
  
  if (nearestTownHall && nearestTownHall.position) {
    const distanceToTownHall = calculateDistance(unit.position, nearestTownHall.position);
    
    if (distanceToTownHall < 3.0) {
      // 마을 회관에 도달하면 명령 완료
      unit.squadCommand = null;
      unit.squadTarget = null;
      unit.squadAIState = SQUAD_AI_STATES.IDLE;
    } else {
      // 마을 회관으로 이동
      moveTowardsTarget(unit, nearestTownHall.position, deltaTime);
      unit.squadAIState = SQUAD_AI_STATES.RETREATING;
    }
  }
}

// 정찰 명령 처리
function handlePatrolCommand(unit, deltaTime, gameState) {
  const targetPosition = unit.squadTarget;
  const startPosition = unit.squadStartPosition || unit.position;
  
  // 유효성 검사
  if (!targetPosition || !unit.position) {
    console.warn('Invalid target position or unit position for patrol command');
    return;
  }
  
  // 정찰 패턴: 시작점 ↔ 목표점 왕복
  if (!unit.squadPatrolDirection) {
    unit.squadPatrolDirection = 'to_target'; // 목표점으로 이동
  }
  
  let currentTarget;
  if (unit.squadPatrolDirection === 'to_target') {
    currentTarget = targetPosition;
  } else {
    currentTarget = startPosition;
  }
  
  const distanceToCurrentTarget = calculateDistance(unit.position, currentTarget);
  
  if (distanceToCurrentTarget < 1.0) {
    // 목표에 도달하면 방향 전환
    unit.squadPatrolDirection = unit.squadPatrolDirection === 'to_target' ? 'to_start' : 'to_target';
  } else {
    // 현재 목표로 이동
    moveTowardsTarget(unit, currentTarget, deltaTime);
    unit.squadAIState = SQUAD_AI_STATES.PATROLLING;
  }
}

// 주변 적 탐지
function findNearbyEnemies(unit, gameState, range = 5.0) {
  const enemies = [];
  
  // 유효성 검사
  if (!unit.position) {
    return enemies;
  }
  
  // 몬스터들 중 적 탐지
  Object.values(gameState.monsters || {}).forEach(monster => {
    if (monster.state && monster.state.isAlive && monster.position) {
      const distance = calculateDistance(unit.position, monster.position);
      if (distance <= range) {
        enemies.push(monster);
      }
    }
  });
  
  // 거리순으로 정렬
  enemies.sort((a, b) => {
    const distA = calculateDistance(unit.position, a.position);
    const distB = calculateDistance(unit.position, b.position);
    return distA - distB;
  });
  
  return enemies;
}

// 가장 가까운 마을 회관 찾기
function findNearestTownHall(unit, gameState) {
  let nearestTownHall = null;
  let minDistance = Infinity;
  
  // 유효성 검사
  if (!unit.position) {
    return null;
  }
  
  Object.values(gameState.buildings || {}).forEach(building => {
    if (building.type === 'town_hall' && building.position) {
      const distance = calculateDistance(unit.position, building.position);
      if (distance < minDistance) {
        minDistance = distance;
        nearestTownHall = building;
      }
    }
  });
  
  return nearestTownHall;
}

// 적 공격
function attackEnemy(unit, enemy) {
  // 공격 쿨다운 체크 (1초마다 공격 가능)
  const now = Date.now();
  if (unit.lastAttackTime && (now - unit.lastAttackTime) < 1000) {
    return; // 아직 공격 쿨다운 중
  }
  
  // 간단한 공격 로직 (실제 대미지 계산은 combatUtils 사용)
  const damage = (unit.stats?.STR || 5) * 2;
  
  if (enemy.stats) {
    enemy.stats.currentHealth = Math.max(0, (enemy.stats.currentHealth || 50) - damage);
    
    if (enemy.stats.currentHealth <= 0) {
      enemy.state.isAlive = false;
      console.log(`${unit.name}이(가) ${enemy.name || '적'}을 처치했습니다.`);
    } else {
      console.log(`${unit.name}이(가) ${enemy.name || '적'}에게 ${damage} 대미지를 입혔습니다.`);
    }
  }
  
  // 공격 시간 기록
  unit.lastAttackTime = now;
  unit.squadAIState = SQUAD_AI_STATES.ATTACKING;
}

// 목표 지점으로 이동 (통합 이동 시스템 사용)
function moveTowardsTarget(unit, targetPosition, deltaTime) {
  if (!unit || !targetPosition) {
    console.warn('Invalid unit or target position for movement');
    return;
  }
  
  // 통합 이동 함수 사용
  const isMoving = moveEntity(unit, targetPosition, deltaTime, 'citizen');
  
  // 방향 업데이트
  if (isMoving && unit.position && targetPosition) {
    const dx = targetPosition.x - unit.position.x;
    const dz = targetPosition.z - unit.position.z;
    if (Math.abs(dx) > 1e-4 || Math.abs(dz) > 1e-4) {
      unit.dir = Math.atan2(dx, dz);
    }
  }
}

// 부대 전체 AI 업데이트
export function updateSquadAI(deltaTime, gameState) {
  // 부대 명령을 받은 모든 시민들 처리
  Object.values(gameState.units || {}).forEach(unit => {
    if (unit.squadCommand) {
      updateSquadMemberAI(unit, deltaTime, gameState);
    }
  });
}

// 부대 AI 초기화
export function initializeSquadAI(unit) {
  if (!unit.squadAIState) {
    unit.squadAIState = SQUAD_AI_STATES.IDLE;
  }
}
