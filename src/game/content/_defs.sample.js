export const BUILDING_DEFS = {
  town_hall: {
    name: "마을 회관", baseHP: 500, baseCap: 2,
    build: { time: 5, cost: { wood: 30 } },
    effects: (b) => ({ taxMult: 1 + 0.1*(b.level-1), spaceBonus: 10*(b.level) }),
    produces: { gold: { base: 1, time: 10 } },
    skill: "Admin",
    placeRadius: 2.2,
  },
  farm: {
    name: "농지", baseHP: 200, baseCap: 2,
    build: { time: 2, cost: { wood: 10 } },
    produces: { food: { base: 2, time: 8 } },
    skill: "Farming",
    placeRadius: 2.2,
  },
  woodcutter: {
    name: "나무꾼의 집", baseHP: 220, baseCap: 1,
    build: { time: 2, cost: { wood: 15 } },
    produces: { wood: { base: 1, time: 6 } },
    skill: "Woodcutting",
    placeRadius: 1.7,
  },
  gatherer: {
    name: "채집꾼의 집", baseHP: 200, baseCap: 1,
    build: { time: 2, cost: { wood: 10 } },
    produces: { herb: { base: 1, time: 7 } },
    skill: "Gathering",
    placeRadius: 1.6,
  },
  mine: {
    name: "광산", baseHP: 260, baseCap: 2,
    build: { time: 2, cost: { wood: 10 } },
    produces: { ore: { base: 1, time: 10 } },
    skill: "Mining",
    placeRadius: 1.9,
  },
  barracks: {
    name: "전사의 집", baseHP: 260, baseCap: 3,
    build: { time: 2, cost: { wood: 20 } },
    trains: { Sword: { time: 8 } },
    skill: "Sword",
    placeRadius: 2.2,
  },
  mage_tower: {
    name: "마탑", baseHP: 260, baseCap: 3,
    build: { time: 2, cost: { ore: 10 } },
    trains: { Magic: { time: 8 } },
    skill: "Magic",
    placeRadius: 1.8,
  },
  smithy: {
    name: "대장간", baseHP: 260, baseCap: 2,
    build: { time: 2, cost: { wood: 10, ore: 10 } },
    trains: { Smithing: { time: 8 } },
    skill: "Smithing",
    placeRadius: 1.7,
  },
  goblin_den: {
    name: "고블린 군락", baseHP: 300, baseCap: 1,
    build: { time: 3, cost: { wood: 20, ore: 10 } },
    produces: { goblin: { base: 1, time: 10 } }, // 고블린 생산
    skill: "Monster Breeding",
    placeRadius: 2.0,
  },
  orc_den: {
    name: "오크 군락", baseHP: 350, baseCap: 1,
    build: { time: 4, cost: { wood: 25, ore: 15 } },
    produces: { orc: { base: 1, time: 12 } }, // 오크 생산
    skill: "Monster Breeding",
    placeRadius: 2.2,
  },
};


