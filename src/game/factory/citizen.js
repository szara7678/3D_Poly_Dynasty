import { uid } from "../state";
import { rollStats, rollTalent, rollPractice, randomName, randomAppearance } from "../content/units";

export function createRandomCitizen(pos){
  const id = uid("u");
  const stats = rollStats();
  const talents = rollTalent();
  const practice = rollPractice();
  const appearance = randomAppearance();
  const size = Math.max(0.8, Math.min(1.2, 0.9 + Math.random()*0.3));
  
  // 전투 스탯 계산
  const combatStats = {
    attack: Math.floor(stats.STR * 2 + stats.AGI * 0.5), // 공격력: 힘*2 + 민첩*0.5
    defense: Math.floor(stats.VIT * 1.5 + stats.AGI * 0.5), // 방어력: 체력*1.5 + 민첩*0.5
    magicAttack: Math.floor(stats.INT * 2), // 마법 공격력: 지력*2
  };
  
  return {
    id,
    name: randomName(),
    pos: { x: pos?.x ?? 0, y: pos?.y ?? 0, z: pos?.z ?? 0 },
    dir: Math.random() * Math.PI * 2,
    size,
    hp: 100 + Math.floor((stats.VIT - 5) * 6),
    mp: 20 + Math.floor((stats.INT - 5) * 6),
    stats,
    talents, // 재능: 수련 속도에 영향
    practice, // 수련치: 0~10, 효율에 영향
    combatStats, // 전투 스탯
    inventory: { items: {}, equipment: {}, capacity: 20, weight: 0 },
    appearance,
    state: "idle",
    assignedBuildingId: null,
    level: 1,
    exp: 0,
  };
}


