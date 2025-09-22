// 전투 유틸리티 함수들 - 대미지 계산, 공격 모션, 원거리 무기 등

// 공격 타입 정의
export const ATTACK_TYPES = {
  MELEE: 'melee',           // 근접 공격
  RANGED: 'ranged',         // 원거리 공격
  MAGIC: 'magic',           // 마법 공격
  SPECIAL: 'special'        // 특수 공격
};

// 공격 모션 정의
export const ATTACK_ANIMATIONS = {
  [ATTACK_TYPES.MELEE]: {
    name: 'melee_attack',
    duration: 800,          // 공격 모션 지속 시간 (ms)
    windupTime: 300,        // 공격 준비 시간
    hitTime: 500,          // 실제 타격 시간
    recoveryTime: 300,     // 공격 후 회복 시간
    damageMultiplier: 1.0
  },
  
  [ATTACK_TYPES.RANGED]: {
    name: 'ranged_attack',
    duration: 1200,
    windupTime: 400,
    hitTime: 600,
    recoveryTime: 200,
    damageMultiplier: 0.8
  },
  
  [ATTACK_TYPES.MAGIC]: {
    name: 'magic_attack',
    duration: 1500,
    windupTime: 600,
    hitTime: 900,
    recoveryTime: 300,
    damageMultiplier: 1.2
  },
  
  [ATTACK_TYPES.SPECIAL]: {
    name: 'special_attack',
    duration: 2000,
    windupTime: 800,
    hitTime: 1200,
    recoveryTime: 400,
    damageMultiplier: 1.5
  }
};

// 무기 타입 정의 (items.js의 장비와 연동)
export const WEAPON_TYPES = {
  SWORD: 'sword',
  STAFF: 'staff'
};

// 무기 정의 (items.js의 장비와 연동)
export const WEAPON_DEFINITIONS = {
  [WEAPON_TYPES.SWORD]: {
    id: WEAPON_TYPES.SWORD,
    name: '검',
    attackType: ATTACK_TYPES.MELEE,
    attackSpeed: 1.0,
    criticalChance: 0.1,
    criticalMultiplier: 1.5,
    durability: 100,
    weight: 3,
    requiredSkill: 'Sword' // 검술 스킬
  },
  
  [WEAPON_TYPES.STAFF]: {
    id: WEAPON_TYPES.STAFF,
    name: '지팡이',
    attackType: ATTACK_TYPES.MAGIC,
    attackSpeed: 1.1,
    criticalChance: 0.15,
    criticalMultiplier: 1.7,
    durability: 120,
    weight: 2.5,
    manaCost: 5,
    requiredSkill: 'Magic' // 마법 스킬
  }
};

// 대미지 계산 함수 (전투 스탯 기반)
export function calculateDamage(attacker, target, weapon = null, attackType = ATTACK_TYPES.MELEE) {
  let baseDamage = 0;
  let criticalHit = false;
  let finalDamage = 0;
  
  // 기본 공격력 계산 (전투 스탯 기반)
  if (weapon) {
    const weaponDef = WEAPON_DEFINITIONS[weapon.type];
    if (weaponDef) {
      // 공격 타입에 따른 기본 공격력 사용
      switch (attackType) {
        case ATTACK_TYPES.MELEE:
          baseDamage = attacker.stats.attack || 0;
          break;
        case ATTACK_TYPES.MAGIC:
          baseDamage = attacker.stats.magicAttack || 0;
          break;
        default:
          baseDamage = attacker.stats.attack || 0;
      }
      
      // 장비 스탯 보너스 적용
      if (weapon.baseStats) {
        for (const [stat, value] of Object.entries(weapon.baseStats)) {
          if (stat === 'attack') {
            baseDamage += value;
          } else if (stat === 'magicAttack' && attackType === ATTACK_TYPES.MAGIC) {
            baseDamage += value;
          }
        }
      }
      
      // 스킬 수련치 보너스 적용
      const skillBonus = calculateSkillBonus(attacker, weapon, attackType);
      baseDamage *= skillBonus;
      
      // 치명타 체크 (민첩성 기반)
      const criticalChance = weaponDef.criticalChance + ((attacker.stats.AGI || 0) * 0.005);
      if (Math.random() < criticalChance) {
        criticalHit = true;
        baseDamage *= weaponDef.criticalMultiplier;
      }
    }
  } else {
    // 무기 없이 기본 공격력
    baseDamage = attacker.stats.attack || 0;
  }
  
  // 공격 타입별 추가 보너스
  const attackMultiplier = ATTACK_ANIMATIONS[attackType].damageMultiplier;
  baseDamage *= attackMultiplier;
  
  // 방어력 계산
  const defense = calculateDefense(target);
  
  // 최종 대미지 계산
  finalDamage = Math.max(1, baseDamage - defense);
  
  return {
    damage: Math.floor(finalDamage),
    criticalHit: criticalHit,
    attackType: attackType,
    baseDamage: Math.floor(baseDamage),
    defenseReduction: Math.floor(baseDamage - finalDamage)
  };
}

// 스킬 수련치 보너스 계산
function calculateSkillBonus(attacker, weapon, attackType) {
  let skillBonus = 1.0;
  
  // 무기별 필요한 스킬 확인
  if (weapon.requiredSkill) {
    const skillLevel = attacker.talent?.[weapon.requiredSkill] || 0;
    
    // 스킬 레벨에 따른 보너스 (레벨당 5% 증가)
    skillBonus += skillLevel * 0.05;
  }
  
  // 최대 보너스 제한 (3배까지)
  return Math.min(3.0, skillBonus);
}

// 방어력 계산 (전투 스탯 기반)
export function calculateDefense(target) {
  let defense = 0;
  
  // 기본 방어력 (전투 스탯)
  if (target.stats.defense) {
    defense += target.stats.defense;
  }
  
  // 장비 방어력
  if (target.equipment) {
    for (const [slot, item] of Object.entries(target.equipment)) {
      if (item && item.baseStats) {
        // 방어력 스탯 추가
        if (item.baseStats.defense) {
          defense += item.baseStats.defense;
        }
        // 체력 보너스도 방어력에 일부 반영
        if (item.baseStats.health) {
          defense += item.baseStats.health * 0.1;
        }
      }
    }
  }
  
  return Math.floor(defense);
}

// 공격 가능 여부 체크
export function canAttack(attacker, target, weapon = null) {
  if (!attacker || !target) return false;
  if (!attacker.state.isAlive || !target.state.isAlive) return false;
  
  const currentTime = Date.now();
  
  // 공격 쿨다운 체크
  if (weapon) {
    const weaponDef = WEAPON_DEFINITIONS[weapon.type];
    if (weaponDef) {
      const attackCooldown = 1000 / weaponDef.attackSpeed;
      if (currentTime - attacker.state.lastAttackTime < attackCooldown) {
        return false;
      }
    }
  } else {
    if (currentTime - attacker.state.lastAttackTime < 1000) {
      return false;
    }
  }
  
  // 마나 체크 (마법 무기)
  if (weapon && weapon.manaCost) {
    if (attacker.stats.currentMana < weapon.manaCost) {
      return false;
    }
  }
  
  return true;
}

// 공격 범위 계산 함수
export function calculateAttackRange(attacker, weapon = null) {
  let baseRange = 1.5; // 기본 근접 공격 범위
  
  if (weapon) {
    const weaponDef = WEAPON_DEFINITIONS[weapon.type];
    if (weaponDef) {
      // 무기 타입별 기본 범위
      switch (weaponDef.attackType) {
        case ATTACK_TYPES.MELEE:
          baseRange = 1.5;
          // 검의 경우 기본 근접 범위
          if (weapon.type === WEAPON_TYPES.SWORD) baseRange = 1.5;
          break;
          
        case ATTACK_TYPES.MAGIC:
          baseRange = 4.0;
          // 지팡이의 경우 마법 범위
          if (weapon.type === WEAPON_TYPES.STAFF) baseRange = 4.0;
          break;
      }
      
      // 민첩성에 따른 범위 보너스 (마법 무기만)
      if (weaponDef.attackType === ATTACK_TYPES.MAGIC) {
        baseRange += attacker.stats.AGI * 0.1;
      }
    }
  }
  
  return Math.max(1.0, baseRange);
}

// 공격 범위 체크
export function isInAttackRange(attacker, target, weapon = null) {
  const distance = calculateDistance(attacker.position, target.position);
  const attackRange = calculateAttackRange(attacker, weapon);
  return distance <= attackRange;
}

// 거리 계산
export function calculateDistance(pos1, pos2) {
  const dx = pos1.x - pos2.x;
  const dz = pos1.z - pos2.z;
  return Math.sqrt(dx * dx + dz * dz);
}

// 공격 실행
export function executeAttack(attacker, target, weapon = null) {
  if (!canAttack(attacker, target, weapon)) {
    return null;
  }
  
  if (!isInAttackRange(attacker, target, weapon)) {
    return null;
  }
  
  const attackType = weapon ? WEAPON_DEFINITIONS[weapon.type].attackType : ATTACK_TYPES.MELEE;
  const damageResult = calculateDamage(attacker, target, weapon, attackType);
  
  // 대미지 적용
  target.stats.currentHealth = Math.max(0, target.stats.currentHealth - damageResult.damage);
  
  // 마나 소모 (마법 무기)
  if (weapon && weapon.manaCost) {
    attacker.stats.currentMana = Math.max(0, attacker.stats.currentMana - weapon.manaCost);
  }
  
  // 공격 시간 업데이트
  attacker.state.lastAttackTime = Date.now();
  
  // 공격 모션 정보
  const animation = ATTACK_ANIMATIONS[attackType];
  
  return {
    success: true,
    damage: damageResult.damage,
    criticalHit: damageResult.criticalHit,
    attackType: attackType,
    animation: animation,
    attackerId: attacker.id,
    targetId: target.id,
    targetHealth: target.stats.currentHealth,
    targetMaxHealth: target.stats.maxHealth
  };
}

// 원거리 공격 처리 (현재는 마법 공격만 지원)
export function executeRangedAttack(attacker, target, weapon, projectileData = null) {
  if (!weapon || WEAPON_DEFINITIONS[weapon.type].attackType !== ATTACK_TYPES.MAGIC) {
    return null;
  }
  
  const weaponDef = WEAPON_DEFINITIONS[weapon.type];
  
  // 마나 체크
  if (weaponDef.manaCost && attacker.stats.currentMana < weaponDef.manaCost) {
    return null;
  }
  
  // 마법 공격은 즉시 대미지 적용하지 않고 투사체 생성
  const damageResult = calculateDamage(attacker, target, weapon, ATTACK_TYPES.MAGIC);
  
  return {
    success: true,
    projectile: {
      id: `projectile_${Date.now()}`,
      attackerId: attacker.id,
      targetId: target.id,
      weaponType: weapon.type,
      damage: damageResult.damage,
      criticalHit: damageResult.criticalHit,
      startPosition: { ...attacker.position },
      targetPosition: { ...target.position },
      speed: 20, // 투사체 속도
      lifetime: 2000 // 투사체 생존 시간 (ms)
    },
    animation: ATTACK_ANIMATIONS[ATTACK_TYPES.MAGIC]
  };
}

// 투사체 충돌 처리
export function handleProjectileHit(projectile, target) {
  if (!projectile || !target) return null;
  
  // 대미지 적용
  target.stats.currentHealth = Math.max(0, target.stats.currentHealth - projectile.damage);
  
  return {
    success: true,
    damage: projectile.damage,
    criticalHit: projectile.criticalHit,
    targetId: target.id,
    targetHealth: target.stats.currentHealth,
    targetMaxHealth: target.stats.maxHealth
  };
}

// 전투 상태 업데이트
export function updateCombatState(entity) {
  if (!entity.state.isAlive) return;
  
  // HP가 0 이하면 사망
  if (entity.stats.currentHealth <= 0) {
    entity.state.isAlive = false;
    entity.state.isAggressive = false;
    entity.state.target = null;
    return;
  }
  
  // 마나 회복 (자연 회복)
  if (entity.stats.currentMana < entity.stats.maxMana) {
    const manaRegen = entity.stats.INT * 0.1; // 지능에 따른 마나 회복
    entity.stats.currentMana = Math.min(entity.stats.maxMana, entity.stats.currentMana + manaRegen);
  }
  
  // HP 회복 (자연 회복, 매우 느림)
  if (entity.stats.currentHealth < entity.stats.maxHealth) {
    const healthRegen = entity.stats.VIT * 0.05; // 체력에 따른 HP 회복
    entity.stats.currentHealth = Math.min(entity.stats.maxHealth, entity.stats.currentHealth + healthRegen);
  }
}

// 전투 효과음 및 이펙트 정보
export const COMBAT_EFFECTS = {
  [ATTACK_TYPES.MELEE]: {
    sound: 'sword_clash',
    particle: 'spark',
    color: '#ffd700'
  },
  
  [ATTACK_TYPES.RANGED]: {
    sound: 'arrow_hit',
    particle: 'impact',
    color: '#8b4513'
  },
  
  [ATTACK_TYPES.MAGIC]: {
    sound: 'magic_cast',
    particle: 'magic_spark',
    color: '#9370db'
  },
  
  [ATTACK_TYPES.SPECIAL]: {
    sound: 'special_attack',
    particle: 'explosion',
    color: '#ff4500'
  }
};
