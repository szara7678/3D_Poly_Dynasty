export const BUILDING_DEFS = {
  town_hall: {
    name: "마을 회관", baseHP: 500, baseCap: 2,
    build: { time: 5, cost: { wood: 30, stone: 20 } },
    effects: (b) => ({ taxMult: 1 + 0.1*(b.level-1), spaceBonus: 10*(b.level) }),
    skill: "Admin",
    placeRadius: 2.2,
  },
  farm: {
    name: "농지", baseHP: 200, baseCap: 2,
    build: { time: 2, cost: { wood: 10 } },
    produces: { food: { base: 1.5 } },
    skill: "Farming",
    placeRadius: 2.2,
  },
  hunter: {
    name: "사냥꾼의 집", baseHP: 220, baseCap: 1,
    build: { time: 2, cost: { wood: 15 } },
    produces: { food: { base: 1.2 }, hide: { base: 0.4 } },
    skill: "Hunting",
    placeRadius: 1.7,
  },
  gatherer: {
    name: "채집꾼의 집", baseHP: 200, baseCap: 1,
    build: { time: 2, cost: { wood: 10 } },
    produces: { herb: { base: 0.8 }, wood: { base: 0.6 } },
    skill: "Gathering",
    placeRadius: 1.6,
  },
  mine: {
    name: "광산", baseHP: 260, baseCap: 2,
    build: { time: 2, cost: { wood: 10, stone: 20 } },
    produces: { ore: { base: 0.9 }, stone: { base: 0.7 } },
    skill: "Mining",
    placeRadius: 1.9,
  },
  barracks: {
    name: "전사의 집", baseHP: 260, baseCap: 3,
    build: { time: 2, cost: { wood: 20, stone: 10 } },
    trains: { Sword: { rate: 0.9 } },
    onRaid: { role: "defender" },
    placeRadius: 2.2,
  },
  mage_tower: {
    name: "마탑", baseHP: 260, baseCap: 3,
    build: { time: 2, cost: { stone: 25, ore: 10 } },
    researches: { Magic: { rate: 0.9 } },
    crafts: { magic_item: { ore: 1, herb: 2 } },
    onRaid: { role: "defender" },
    placeRadius: 1.8,
  },
  smithy: {
    name: "대장간", baseHP: 260, baseCap: 2,
    build: { time: 2, cost: { wood: 10, ore: 10, stone: 10 } },
    crafts: { weapon: { ore: 2 }, armor: { ore: 3, stone: 1 } },
    skill: "Smithing",
    placeRadius: 1.7,
  },
  monster_den: {
    name: "몬스터 군락", baseHP: 300, baseCap: 0,
    spawn: { kindPool: ["slime","goblin","wolf"], baseCooldown: 12 },
    placeRadius: 2.0,
  },
};


