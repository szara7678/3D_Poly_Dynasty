import { uid } from "../state";
import { rollStats, rollTalent, rollPractice, randomName, randomAppearance } from "../content/units";

export function createRandomCitizen(pos){
  const id = uid("u");
  const stats = rollStats();
  const skills = rollTalent();
  const practice = rollPractice();
  const appearance = randomAppearance();
  const size = Math.max(0.8, Math.min(1.2, 0.9 + Math.random()*0.3));
  return {
    id,
    name: randomName(),
    pos: { x: pos?.x ?? 0, y: pos?.y ?? 0, z: pos?.z ?? 0 },
    dir: Math.random() * Math.PI * 2,
    size,
    hp: 100 + Math.floor((stats.VIT - 5) * 6),
    mp: 20 + Math.floor((stats.INT - 5) * 6),
    stats,
    skills, // 재능: 수련 속도에 영향
    practice, // 수련치: 0~5, 효율에 영향
    inventory: { items: {}, equipment: {}, capacity: 20, weight: 0 },
    appearance,
    state: "idle",
    assignedBuildingId: null,
    level: 1,
    exp: 0,
  };
}


