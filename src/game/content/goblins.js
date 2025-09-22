// 고블린 정의 및 생성 함수

// 고블린 기본 스탯 범위
const GOBLIN_STATS = {
  STR: { min: 3, max: 8 },    // 힘
  AGI: { min: 2, max: 5 },    // 민첩 (속도 조정을 위해 낮춤)
  VIT: { min: 3, max: 7 },    // 체력
  INT: { min: 2, max: 6 },    // 지능
};

// 고블린 기본 능력치
const GOBLIN_ABILITIES = {
  attack: { min: 4, max: 8 },
  defense: { min: 2, max: 5 },
  health: { min: 40, max: 70 },
  speed: { min: 1.2, max: 2.0 }
};

// 고블린 외형 설정
const GOBLIN_APPEARANCE = {
  color: '#4a5d23',  // 초록색
  size: { min: 0.9, max: 1.1 },  // 크기 변동
  name: '고블린'
};

// 랜덤 고블린 생성 함수
export function createRandomGoblin(spawnPosition = { x: 0, y: 0, z: 0 }) {
  // 랜덤 스탯 생성
  const stats = {};
  Object.keys(GOBLIN_STATS).forEach(statKey => {
    const range = GOBLIN_STATS[statKey];
    stats[statKey] = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
  });

  // 랜덤 능력치 생성
  const abilities = {};
  Object.keys(GOBLIN_ABILITIES).forEach(abilityKey => {
    const range = GOBLIN_ABILITIES[abilityKey];
    if (typeof range.min === 'number' && typeof range.max === 'number') {
      abilities[abilityKey] = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
    } else {
      // 소수점이 있는 경우 (speed)
      abilities[abilityKey] = Math.random() * (range.max - range.min) + range.min;
    }
  });

  // 최대 체력과 현재 체력 설정
  abilities.maxHealth = abilities.health;
  abilities.currentHealth = abilities.health;

  // 랜덤 크기 생성
  const sizeRange = GOBLIN_APPEARANCE.size;
  const size = Math.random() * (sizeRange.max - sizeRange.min) + sizeRange.min;

  // 고블린 객체 생성
  const goblin = {
    name: GOBLIN_APPEARANCE.name,
    type: 'goblin',
    pos: spawnPosition,
    dir: Math.random() * Math.PI * 2,
    size: size,
    team: 1, // 팀 1 (고블린 종족)
    moveTo: null,
    stats: stats,
    abilities: abilities,
    state: "idle",
    appearance: { color: GOBLIN_APPEARANCE.color }
  };

  return goblin;
}

// 고블린 정의 내보내기
export const GOBLIN_DEFINITIONS = {
  stats: GOBLIN_STATS,
  abilities: GOBLIN_ABILITIES,
  appearance: GOBLIN_APPEARANCE
};
