# Insu 전략 시뮬 — 설계서 & 파일 구조

> 목표: GitHub Pages로 배포 가능한 **완전 클라이언트 사이드** 전략 시뮬레이션. 기존 3D 에이전트 렌더러(\`WalkingHuman3D.jsx\`)를 **시뮬레이션 상태와 연결**하고, 인구·건물·전투·몬스터 스폰·세금/명성 시스템을 점진 구축.

---

## 1) 기술 스택

* **Vite + React + Three.js (WebGL)** — SPA, GH Pages 호환
* **상태/시뮬레이션 루프**: 커스텀 게임 스토어(이벤트 버스 + 불변 갱신 / 얕은 복사)
* **저장/불러오기**: LocalStorage (자동 저장)
* **의존성 최소화**: (선택) 경량 유틸만. 외부 pathfinding 라이브러리 없이 간단 steering부터

---

## 2) 프로젝트 구조 (제안)

```
src/
  main.jsx
  App.jsx
  styles.css
  components/
    HUD.jsx                  # 자원/시간/인구/명성/세금 UI
    BuildMenu.jsx            # 건물 배치/자원 요구치/청사진-스냅
    SelectionOverlay.jsx     # 드래그 선택박스 + 개체/부대 UI
    Inspector.jsx            # 시민/건물 상세(스탯/스킬/효과)
    WalkingHuman3D.jsx       # (이미 존재) 3D 월드/에이전트 렌더러
  game/
    index.js                 # Game 싱글톤(초기화·부팅)
    state.js                 # Store(상태·액션·세이브/로드)
    gameLoop.js              # 고정 틱 루프(논리), rAF(렌더)
    rng.js                   # seedable RNG (월드/스폰 재현성)
    math.js                  # 보간/노이즈/확률 유틸
    content/
      skills.js              # 스킬 정의/상승 규칙
      buildings.js           # 건물 템플릿/레벨 곡선/코스트
      units.js               # 시민/전사/마법사 등 유닛 템플릿
      monsters.js            # 몬스터 종족/군락 스폰 규칙
      items.js               # 제작 아이템(무기/방어구/소모품)
    systems/
      tick.js                # 틱 스케줄러(자원/세금 등 주기 처리)
      production.js          # 생산(농지/광산/사냥/채집)
      skillProgress.js       # 스킬 숙련/확률적 스탯상승
      buildingXP.js          # 건물 XP/레벨업/HP 관리
      construction.js        # 청사진 → 건설 진행
      assignment.js          # 배치/해제/최대 인원 룰
      economy.js             # 세금/거래/유지비
      reputation.js          # 명성 증가/인구 증가
      aiTown.js              # 마을 내부 AI(훈련/연구/제작 등)
      worldAI.js             # 도적/마을/왕국 성장·침공
      spawn.js               # 몬스터 군락 스폰/강도 증가
      combat.js              # 교전/피해/사망/드랍
      command.js             # 플레이어 명령(이동/공격/스킬)
      pathing.js             # 간단 스티어링/회피(초기), 추후 개선
```

---

## 3) 핵심 데이터 모델 (JSDoc)

> JS에서 타입 안전성을 높이기 위해 **JSDoc 주석**으로 명세합니다.

```js
/** @typedef {"food"|"gold"|"ore"|"herb"|"wood"|"stone"|"reputation"} ResourceKey */
/** @typedef {"farm"|"hunter"|"gatherer"|"mine"|"barracks"|"mage_tower"|"smithy"|"town_hall"|"monster_den"} BuildingType */
/** @typedef {"Farming"|"Hunting"|"Gathering"|"Mining"|"Magic"|"Sword"|"Smithing"|"Admin"} SkillKey */

/** 시민/유닛 */
/**
 * @typedef {Object} Unit
 * @property {string} id
 * @property {string} name
 * @property {{x:number,y:number,z:number}} pos
 * @property {number} hp
 * @property {number} mp
 * @property {{STR:number,AGI:number,VIT:number,INT:number}} stats
 * @property {Record<SkillKey, number>} skills        // 0~100
 * @property {"idle"|"assigned"|"moving"|"combat"|"training"|"research"} state
 * @property {string|null} assignedBuildingId
 * @property {number} level
 * @property {number} exp
 */

/** 건물 */
/**
 * @typedef {Object} Building
 * @property {string} id
 * @property {BuildingType} type
 * @property {{x:number,z:number}} tile
 * @property {number} level        // 1~
 * @property {number} hp
 * @property {number} hpMax
 * @property {number} xp
 * @property {number} xpToNext
 * @property {number} capacity     // 배치 가능 인원
 * @property {string[]} workers    // Unit.id[]
 * @property {{progress:number, eta:number, active:boolean}} construct // 건설 진행
 */

/** 게임 상태 */
/**
 * @typedef {Object} GameState
 * @property {number} tick
 * @property {{ food:number, gold:number, ore:number, herb:number, wood:number, stone:number, reputation:number }} res
 * @property {number} population
 * @property {number} popCap
 * @property {number} nextPopRepReq
 * @property {Record<string,Unit>} units
 * @property {Record<string,Building>} buildings
 * @property {{timeScale:number, paused:boolean}} sim
 * @property {{seed:number}} world
 */
```

---

## 4) 규칙 & 공식 (밸런스 초안)

### 4.1 스킬·스탯 상호작용

* 작업 1회 수행 시 **스킬 숙련 +Δ** (ex: 0.4\~1.2), 숙련 상승에 비례해 확률적으로 관련 **스탯 상승(±1)**
* 예시 확률: `P(statUp) = base(1%) + skillLvl*0.03% + buildingLevel*0.05%`
* 스킬 ↔ 스탯 매핑(권장):

  * `Farming→VIT/INT`, `Hunting→AGI/STR`, `Gathering→INT/AGI`, `Mining→STR/VIT`
  * `Magic→INT`, `Sword→STR/AGI`, `Smithing→STR/INT/VIT`, `Admin→INT`

### 4.2 생산량(틱 당)

```
output = base * (1 + 0.08*(buildingLevel-1))
         * (1 + sum(skillFactor(worker)) )
         * (1 + statBonus(worker))

skillFactor(worker)= worker.skills[relevant]/100 * 0.6 / capacity
statBonus(worker) = (STR*0.02 + AGI*0.01 + VIT*0.02 + INT*0.03) / 100  (가중치 건물별 조정)
```

### 4.3 세금(주기적)

* 주기: **10초** (\~20틱 가정)
* `gold += floor(population * baseTaxPerCapita * townHallTaxMult)`
* 기본: `baseTaxPerCapita = 1.0`, `townHallTaxMult = 1 + Admin평균*0.005 + townHallLevel*0.1`

### 4.4 명성 → 인구 증가

* 행동/업적/건물 완성/전투 승리로 `reputation += …`
* 인구 증가 요구치: `nextPopRepReq = round( base(50) * 1.2^(population-1) )`
* 달성 시: `population += 1`, `nextPopRepReq *= 1.2`

### 4.5 건물 레벨/HP/용량

* 건물 XP: 생산량/훈련량/연구량에 비례하여 상승
* 레벨업 시: `capacity += +1`, `outputMult += +8%`, `skillGainChance += +5%`, `hpMax += +10%`
* 파괴(HP=0) 시: 제거 + 해당 워커 해제

### 4.6 몬스터 군락

* 스폰 주기 `T=12초`에서 시작, 레벨에 따라 `T *= 0.95` (서서히 증가)
* 웨이브 수량: `ceil( base(2) * wave^0.9 )`
* 어그로: 군락 반경 R 내 배회, 시야 내 우선공격(선공)

---

## 5) 컨텐츠 정의 (요약)

### 5.1 건물 템플릿 (예시)

```js
export const BUILDING_DEFS = {
  town_hall: {
    name: "마을 회관", baseHP: 500, baseCap: 2,
    build: { time: 20, cost: { wood: 30, stone: 20 } },
    effects: (b) => ({ taxMult: 1 + 0.1*(b.level-1), spaceBonus: 10*(b.level) }),
    skill: "Admin",
  },
  farm: {
    name: "농지", baseHP: 200, baseCap: 2,
    build: { time: 12, cost: { wood: 10 } },
    produces: { food: { base: 1.5 } },
    skill: "Farming",
  },
  hunter: {
    name: "사냥꾼의 집", baseHP: 220, baseCap: 1,
    build: { time: 14, cost: { wood: 15 } },
    produces: { food: { base: 1.2 }, hide: { base: 0.4 } }, // hide는 향후 아이템/거래용
    skill: "Hunting",
  },
  gatherer: {
    name: "채집꾼의 집", baseHP: 200, baseCap: 1,
    build: { time: 12, cost: { wood: 10 } },
    produces: { herb: { base: 0.8 }, wood: { base: 0.6 } },
    skill: "Gathering",
  },
  mine: {
    name: "광산", baseHP: 260, baseCap: 2,
    build: { time: 16, cost: { wood: 10, stone: 20 } },
    produces: { ore: { base: 0.9 }, stone: { base: 0.7 } },
    skill: "Mining",
  },
  barracks: {
    name: "전사의 집", baseHP: 260, baseCap: 3,
    build: { time: 16, cost: { wood: 20, stone: 10 } },
    trains: { Sword: { rate: 0.9 } },
    onRaid: { role: "defender" },
  },
  mage_tower: {
    name: "마탑", baseHP: 260, baseCap: 3,
    build: { time: 18, cost: { stone: 25, ore: 10 } },
    researches: { Magic: { rate: 0.9 } },
    crafts: { magic_item: { ore: 1, herb: 2 } },
    onRaid: { role: "defender" },
  },
  smithy: {
    name: "대장간", baseHP: 260, baseCap: 2,
    build: { time: 16, cost: { wood: 10, ore: 10, stone: 10 } },
    crafts: { weapon: { ore: 2 }, armor: { ore: 3, stone: 1 } },
    skill: "Smithing",
  },
  monster_den: {
    name: "몬스터 군락", baseHP: 300, baseCap: 0,
    spawn: { kindPool: ["slime","goblin","wolf"], baseCooldown: 12 },
  },
};
```

### 5.2 스킬 정의

```js
export const SKILLS = {
  Farming: { stats: { VIT: 0.7, INT: 0.3 } },
  Hunting: { stats: { AGI: 0.6, STR: 0.4 } },
  Gathering:{ stats: { INT: 0.5, AGI: 0.5 } },
  Mining:   { stats: { STR: 0.6, VIT: 0.4 } },
  Magic:    { stats: { INT: 1.0 } },
  Sword:    { stats: { STR: 0.7, AGI: 0.3 } },
  Smithing: { stats: { STR: 0.4, INT: 0.4, VIT: 0.2 } },
  Admin:    { stats: { INT: 1.0 } },
};
```

---

## 6) 시뮬레이션 루프

* **렌더**: `requestAnimationFrame` (Three.js)
* **논리 틱**: 고정 `Δt = 0.5s` (2틱/초) — 성능/가시성 균형. 누적시간으로 틱 처리
* **주기 시스템**: 세금(20틱마다), 스폰(쿨다운), 건설 진행(틱 당 %), 생산(틱 당), 훈련(틱 당)

의사코드:

```js
let acc = 0, last = performance.now();
function frame(now){
  const dt = (now-last)/1000; last = now; acc += dt * state.sim.timeScale;
  while(acc >= FIXED_DT){
    runTick(); acc -= FIXED_DT; state.tick++;
  }
  render(); requestAnimationFrame(frame);
}
```

---

## 7) 플레이 루프 & UX

* 상단 HUD: 자원/인구/명성/세금 타이머/속도(×0.5 ×1 ×2 ×4)
* 좌측 BuildMenu: 건물 선택 → 청사진(스냅) → 코스트 체크 → 건설 타이머 → 배치 가능
* 하단 Inspector: 선택한 시민/건물 상세(스탯/스킬/효과/레벨/HP)
* 드래그 선택 박스 → 단일/복수 선택 → 명령(이동/공격/특수)
* 미니맵(후순위)

---

## 8) 초기 마일스톤 (4주)

1. **주차1** — 상태/틱/저장, HUD, 기본 자원 + 회관/농지/광산 생산
2. **주차2** — 배치/건설, 건물 XP/레벨, 세금/명성/인구 증가
3. **주차3** — 사냥/채집/대장간/마탑 훈련·연구·제작 루프
4. **주차4** — 몬스터 군락 스폰/배회/공격, 전투 기본, 간단 레이드 이벤트

---

## 9) 기존 3D 렌더(\`WalkingHuman3D.jsx\`)와의 연결

* 현재 컴포넌트가 자체 배회·보행을 계산 → **상태 구동형으로 전환**

  * \`props.units\`: `{ id, pos{x,z}, dir, size, face, outfit }[]`를 받아 내부 인스턴스 행렬만 갱신
  * 미지정 유닛은 "wander"(기존 로직)의 좌표를 그대로 사용 가능(혼합 모드)
* 건물/군락도 이후 인스턴싱 메시로 배치(간단 기둥/상자 지오메트리부터)

---

## 10) 코드 스캐폴딩 (핵심 파일 초안)

### 10.1 \`src/game/state.js\`

```js
const LS_KEY = "insu-save-v1";

export const initialState = () => ({
  tick: 0,
  res: { food: 30, gold: 50, ore: 0, herb: 0, wood: 50, stone: 20, reputation: 0 },
  population: 3,
  popCap: 5,
  nextPopRepReq: 50,
  units: {},
  buildings: {},
  sim: { timeScale: 1, paused: false },
  world: { seed: 12345 },
});

export const state = initialState();

export function save(){
  try{ localStorage.setItem(LS_KEY, JSON.stringify(state)); }catch(e){ console.warn("save fail", e); }
}
export function load(){
  try{ const s = JSON.parse(localStorage.getItem(LS_KEY)||"null"); if(s) Object.assign(state, s); }catch(e){ console.warn("load fail", e); }
}

export function setRes(delta){
  for(const k in delta){ state.res[k] = Math.max(0, (state.res[k]||0) + delta[k]); }
}

let idc=1; export const uid = (p="id") => `${p}_${idc++}`;

// 편의 액션들(일부)
export function addUnit(u){ state.units[u.id]=u; }
export function addBuilding(b){ state.buildings[b.id]=b; }
```

### 10.2 \`src/game/gameLoop.js\`

```js
import { state, save } from "./state";
import { runProduction } from "./systems/production";
import { runTaxes } from "./systems/economy";
import { runReputation } from "./systems/reputation";
import { runConstruction } from "./systems/construction";
import { runBuildingXP } from "./systems/buildingXP";
import { runSpawn } from "./systems/spawn";

export const FIXED_DT = 0.5; // sec
const TAX_INTERVAL = 10; // sec
let acc=0, last=performance.now(), taxTimer=0, saveTimer=0;

export function startGameLoop(){
  last = performance.now();
  requestAnimationFrame(frame);
}

function frame(now){
  const dt = (now - last)/1000; last = now; if(state.sim.paused) return requestAnimationFrame(frame);
  acc += dt * state.sim.timeScale; taxTimer += dt; saveTimer += dt;

  while(acc >= FIXED_DT){
    tick(); acc -= FIXED_DT; state.tick++;
  }
  if(taxTimer >= TAX_INTERVAL){ runTaxes(); taxTimer = 0; }
  if(saveTimer >= 5){ save(); saveTimer=0; }
  requestAnimationFrame(frame);
}

function tick(){
  runConstruction();
  runProduction();
  runBuildingXP();
  runReputation();
  runSpawn();
}
```

### 10.3 \`src/game/content/buildings.js\`

```js
export { BUILDING_DEFS } from "./_defs.sample.js"; // 위 5.1 예시를 이 파일로 분리해 import
```

### 10.4 \`src/game/systems/production.js\`

```js
import { state, setRes } from "../state";
import { BUILDING_DEFS } from "../content/buildings";

// 간단 생산 루프 — 배치 인원/스킬/레벨 보정 포함(초안)
export function runProduction(){
  for(const id in state.buildings){
    const b = state.buildings[id]; const def = BUILDING_DEFS[b.type]; if(!def) continue;
    if(def.produces && b.workers?.length){
      const workers = b.workers.map(wid => state.units[wid]).filter(Boolean);
      const skillKey = def.skill; const levelMult = 1 + 0.08*(b.level-1);
      const cap = Math.max(1, b.capacity||1);
      let mult = levelMult;
      for(const u of workers){
        const s = (u.skills?.[skillKey]||0)/100; mult += (s*0.6)/cap;
        const { STR=0,AGI=0,VIT=0,INT=0 } = u.stats||{};
        mult += (STR*0.02 + AGI*0.01 + VIT*0.02 + INT*0.03)/100;
      }
      for(const rk in def.produces){
        const base = def.produces[rk].base; const amt = base * mult * 0.5; // 0.5 = FIXED_DT 보정
        setRes({ [rk]: amt });
      }
    }
  }
}
```

### 10.5 \`src/game/systems/economy.js\`

```js
import { state, setRes } from "../state";

export function runTaxes(){
  const pop = state.population; if(!pop) return;
  const town = Object.values(state.buildings).find(b=>b.type==="town_hall");
  const adminAvg = adminAverage();
  const townLvl = town?.level||1; const mult = 1 + adminAvg*0.005 + 0.1*(townLvl-1);
  const base = 1.0; const gain = Math.floor(pop * base * mult);
  setRes({ gold: gain });
}

function adminAverage(){
  const workers = Object.values(state.units).filter(u=>u.assignedBuildingId && (u.skills?.Admin||0)>0);
  if(!workers.length) return 0; let s=0; for(const u of workers) s += (u.skills.Admin||0); return s/workers.length;
}
```

### 10.6 \`src/game/systems/reputation.js\`

```js
import { state } from "../state";

export function runReputation(){
  while(state.res.reputation >= state.nextPopRepReq){
    state.res.reputation -= state.nextPopRepReq;
    state.population += 1; state.popCap += 1; // 기본 증가
    state.nextPopRepReq = Math.round(state.nextPopRepReq * 1.2);
  }
}
```

### 10.7 \`src/components/HUD.jsx\`

```jsx
import React from "react";
import { state } from "../game/state";

export default function HUD(){
  const r = state.res; // 간단히 전역 참조(초기)
  return (
    <div className="fixed top-2 left-2 bg-black/50 text-white text-sm rounded-xl px-3 py-2 space-x-3">
      <span>🍞 {r.food.toFixed(0)}</span>
      <span>💰 {r.gold.toFixed(0)}</span>
      <span>⛏️ {r.ore.toFixed(0)}</span>
      <span>🌿 {r.herb.toFixed(0)}</span>
      <span>🪵 {r.wood.toFixed(0)}</span>
      <span>🪨 {r.stone.toFixed(0)}</span>
      <span>⭐ {r.reputation.toFixed(0)}</span>
      <span>👥 {state.population}/{state.popCap}</span>
    </div>
  );
}
```

### 10.8 \`src/App.jsx\`

```jsx
import React, { useEffect } from "react";
import HUD from "./components/HUD.jsx";
import WalkingHuman3D from "./components/WalkingHuman3D.jsx"; // 기존 파일
import { startGameLoop } from "./game/gameLoop";
import { state, addUnit, addBuilding, uid } from "./game/state";

export default function App(){
  useEffect(()=>{
    // 샘플 초기 데이터
    const hallId = uid("b");
    addBuilding({ id: hallId, type:"town_hall", tile:{x:0,z:0}, level:1, hp:500, hpMax:500, xp:0, xpToNext:50, capacity:2, workers:[], construct:{progress:1,eta:0,active:false} });

    for(let i=0;i<state.population;i++){
      const id = uid("u");
      addUnit({ id, name:`시민${i+1}`, pos:{x:Math.random()*2-1,y:0,z:Math.random()*2-1}, hp:100, mp:20,
        stats:{STR:5,AGI:5,VIT:5,INT:5}, skills:{Farming:5,Hunting:0, Gathering:0, Mining:0, Magic:0, Sword:0, Smithing:0, Admin:0},
        state:"idle", assignedBuildingId:null, level:1, exp:0 });
    }

    startGameLoop();
  }, []);

  return (
    <div className="w-screen h-screen">
      <WalkingHuman3D className="w-full h-full" />
      <HUD />
    </div>
  );
}
```

### 10.9 \`src/main.jsx\`

```jsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(<App />);
```

> 위 스캐폴딩은 **작동 최소 골격**입니다. 각 시스템은 단계적으로 상세 구현을 채워 넣습니다.

---

## 11) 다음 작업(추천)

* [ ] \`WalkingHuman3D.jsx\`에 `props.units`를 연결해 **상태 기반 위치/애니메이션**으로 전환
* [ ] BuildMenu/SelectionOverlay/Inspector 구현(마우스 입력 → 명령 발행)
* [ ] construction/assignment 시스템 완성(코스트·시간·배치)
* [ ] worldAI/spawn/combat의 최소 루프 추가(도적/군락 이벤트)
* [ ] 저장 슬롯/리셋/튜토리얼 단계

원하면 위 스캐폴딩을 실제 파일로 생성해주는 버전(복붙-준비 완료)을 만들어 드릴게요.
