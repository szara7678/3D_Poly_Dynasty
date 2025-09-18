// src/game/systems/reputation.js

import { state } from "../state";

// 상단 공통 상수
const REP_SOFT_CAP = 200; // 게임 템포에 맞춰 조정(예: 150~300)

export function runReputation(){
  const gain = calculateReputationComposite(); // 0~(대략 0.2 내)
  const headroom = Math.max(0, 1 - (state.res.reputation / REP_SOFT_CAP)); // 상한 대비 여지
  const scaled = gain * headroom;

  const maxGainPerTick = 0.05; // 틱당 명성 최대 증가 하향
  state.res.reputation += Math.min(maxGainPerTick, scaled * 0.7); // 전반 스케일 0.7배
}

/**
 * 정규화 기반 복합 명성 계산
 */
function calculateReputationComposite(){
  const buildings = Object.values(state.buildings).filter(b => !b.construct?.active);
  const citizens = Object.values(state.units);
  const pop = Math.max(1, state.population);

  // 1) 빌딩
  let div = 0, lvl = 0, cnt = 0;
  if (buildings.length > 0){
    const types = new Set(buildings.map(b=>b.type)).size;
    const avgLevel = buildings.reduce((s,b)=>s+(b.level||1),0)/buildings.length;
    div = Math.min(1, types / 8);     // 8타입에서 포화
    lvl = Math.min(1, (avgLevel||1) / 10); // 레벨10에서 포화
    cnt = Math.min(1, buildings.length / 20); // 20동에서 포화(튜닝)
  }

  // 2) 시민 수련
  let avgPractice = 0, expertRatio = 0;
  if (citizens.length > 0){
    let totalPractice = 0, experts=0;
    for (const c of citizens){
      const vals = Object.values(c.practice||{});
      const maxP = vals.length ? Math.max(...vals) : 0;
      totalPractice += vals.reduce((s,v)=>s+v,0) / Math.max(1, vals.length);
      if (maxP >= 50) experts++;
    }
    avgPractice = totalPractice / citizens.length; // 0~100 가정
    expertRatio = experts / citizens.length;
  }
  const prac = Math.min(1, avgPractice / 100);
  const exp  = Math.min(1, expertRatio);

  // 3) 인구-명성 균형(목표 3.5)
  const r = state.res.reputation / pop;
  const target = 3.5;
  const popBalance = Math.max(0, 1 - Math.abs(r - target) / target); // 0~1

  // 가중합(합=1 권장)
  const composite =
    div * 0.18 +
    lvl * 0.18 +
    cnt * 0.10 +
    prac * 0.24 +
    exp * 0.15 +
    popBalance * 0.15;

  // 최종 스케일(틱당 0~0.14 근처 → runReputation에서 max 0.05로 캡)
  return composite * 0.14;
}