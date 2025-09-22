import { uid } from "../state";

export function createRandomOrc(position) {
  // 오크는 고블린보다 강한 스탯을 가짐
  const str = Math.floor(Math.random() * (12 - 6 + 1)) + 6; // 6~12
  const agi = Math.floor(Math.random() * (5 - 2 + 1)) + 2; // 2~5 (속도 조정을 위해 낮춤)
  const vit = Math.floor(Math.random() * (10 - 5 + 1)) + 5; // 5~10
  const int = Math.floor(Math.random() * (5 - 2 + 1)) + 2; // 2~5

  const attack = Math.floor(Math.random() * (12 - 6 + 1)) + 6; // 6~12
  const defense = Math.floor(Math.random() * (8 - 4 + 1)) + 4; // 4~8
  const health = Math.floor(Math.random() * (100 - 60 + 1)) + 60; // 60~100
  const speed = (0.8 + Math.random() * (1.5 - 0.8)).toFixed(1); // 0.8~1.5

  return {
    id: uid('monster'), // ID는 나중에 할당될 수 있으므로 기본값
    name: '오크',
    type: 'orc',
    pos: position,
    dir: Math.random() * Math.PI * 2,
    size: 1.2, // 고블린보다 약간 큼
    team: 2, // 오크 팀 (고블린은 팀 1)
    moveTo: null,
    stats: {
      STR: str, AGI: agi, VIT: vit, INT: int,
      attack: attack, defense: defense, health: health, maxHealth: health,
      currentHealth: health, speed: parseFloat(speed)
    },
    state: "idle",
    appearance: { color: '#2d5016' } // 고블린보다 더 진한 녹색
  };
}
