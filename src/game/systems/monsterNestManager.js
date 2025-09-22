// 몬스터 군락지 관리 시스템

import { state, uid, addBuilding, addMonster } from '../state.js';
import { createRandomGoblin } from '../content/goblins.js';
import { createRandomOrc } from '../content/orcs.js';
import { setGoblinHomeNest, setOrcHomeNest } from './simpleMonsterSystem.js';

// 몬스터 군락지 생성 및 관리
export class MonsterNestManager {
  constructor() {
    this.nests = new Map(); // 군락지 ID -> 군락지 정보
    this.virtualWorkers = new Map(); // 가상 시민 ID -> 군락지 ID
  }

  // 몬스터 군락지 생성
  createNest(position, team = 1, nestType) {
    const nestId = uid('building');
    const nest = {
      id: nestId,
      type: nestType,
      name: nestType === 'orc_den' ? '오크 군락' : '고블린 군락',
      tile: position,
      level: 1,
      hp: nestType === 'orc_den' ? 350 : 300,
      hpMax: nestType === 'orc_den' ? 350 : 300,
      workers: [],
      xp: 0,
      construct: { active: false, progress: 1 },
      team: team
    };

    addBuilding(nest);
    
    // 가상 시민 배치
    const virtualWorkerId = this.createVirtualWorker(nestId, position, team);
    nest.workers = [virtualWorkerId];
    
    this.nests.set(nestId, {
      nest: nest,
      virtualWorkerId: virtualWorkerId,
      team: team
    });

    return nestId;
  }

  // 가상 시민 생성
  createVirtualWorker(nestId, position, team = 1) {
    const virtualWorkerId = uid('unit');
    const virtualWorker = {
      id: virtualWorkerId,
      name: '고블린 군락',
      type: 'virtual_worker',
      pos: position,
      dir: 0,
      size: 1.0,
      team: team,
      moveTo: null,
      stats: {
        STR: 5, AGI: 5, VIT: 5, INT: 5,
        attack: 0, defense: 0, health: 100, maxHealth: 100,
        currentHealth: 100, speed: 0
      },
      state: "hidden",
      appearance: { color: '#4a5d23' },
      hidden: true,
      hiddenBuildingId: nestId,
      talents: { 'Monster Breeding': 10 },
      practice: { 'Monster Breeding': 100 }
    };

    state.units[virtualWorkerId] = virtualWorker;
    this.virtualWorkers.set(virtualWorkerId, nestId);
    
    return virtualWorkerId;
  }

  // 몬스터 생산 (고블린 또는 오크)
  produceMonster(nestId) {
    const nestInfo = this.nests.get(nestId);
    if (!nestInfo) return null;

    const nest = nestInfo.nest;
    const buildingPos = nest.tile || { x: 0, y: 0, z: 0 };
    
    // 건물 주변에 몬스터 스폰
    const angle = Math.random() * Math.PI * 2;
    const distance = 3 + Math.random() * 2; // 3~5 거리
    const spawnPos = {
      x: buildingPos.x + Math.cos(angle) * distance,
      y: buildingPos.y,
      z: buildingPos.z + Math.sin(angle) * distance
    };

    let newMonster;
    if (nest.type === 'orc_den') {
      // 오크 생산
      newMonster = createRandomOrc(spawnPos);
      newMonster.id = uid('monster');
      newMonster.team = nestInfo.team; // 군락지와 같은 팀
      addMonster(newMonster);
      setOrcHomeNest(newMonster.id, nestId);
    } else {
      // 고블린 생산 (기본)
      newMonster = createRandomGoblin(spawnPos);
      newMonster.id = uid('monster');
      newMonster.team = nestInfo.team; // 군락지와 같은 팀
      addMonster(newMonster);
      setGoblinHomeNest(newMonster.id, nestId);
    }

    return newMonster;
  }

  // 군락지 제거
  removeNest(nestId) {
    const nestInfo = this.nests.get(nestId);
    if (!nestInfo) return;

    // 가상 시민 제거
    const virtualWorkerId = nestInfo.virtualWorkerId;
    if (virtualWorkerId && state.units[virtualWorkerId]) {
      delete state.units[virtualWorkerId];
      this.virtualWorkers.delete(virtualWorkerId);
    }

    // 군락지 정보 제거
    this.nests.delete(nestId);
    
    console.log('몬스터 군락지 제거:', nestId);
  }

  // 랜덤 위치에 군락지 생성
  createRandomNest(centerX = 0, centerZ = 0, minDistance = 40, maxDistance = 60, team = 1, nestType = 'goblin_den') {
    const angle = Math.random() * Math.PI * 2;
    const distance = minDistance + Math.random() * (maxDistance - minDistance);
    const position = {
      x: centerX + Math.cos(angle) * distance,
      y: 0,
      z: centerZ + Math.sin(angle) * distance
    };

    return this.createNest(position, team, nestType);
  }

  // 모든 군락지 정보 가져오기
  getAllNests() {
    return Array.from(this.nests.values());
  }

  // 특정 팀의 군락지 가져오기
  getNestsByTeam(team) {
    return Array.from(this.nests.values()).filter(nestInfo => nestInfo.team === team);
  }
}

// 전역 몬스터 군락지 매니저 인스턴스
export const monsterNestManager = new MonsterNestManager();
