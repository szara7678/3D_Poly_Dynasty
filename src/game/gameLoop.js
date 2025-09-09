import { state, save, notify } from "./state";
import { runProduction } from "./systems/production";
import { runReputation } from "./systems/reputation";
import { runConstruction } from "./systems/construction";
import { runBuildingXP } from "./systems/buildingXP";
import { runSpawn } from "./systems/spawn";
import { runMovement } from "./systems/movement";
import { runPopulationGrowth } from "./systems/populationGrowth";

export const FIXED_DT = 0.5; // sec
let acc=0, last=performance.now(), saveTimer=0;

export function startGameLoop(){
  last = performance.now();
  requestAnimationFrame(frame);
}

function frame(now){
  const dt = (now - last)/1000; last = now; if(state.sim.paused) return requestAnimationFrame(frame);
  acc += dt * state.sim.timeScale; saveTimer += dt;

  while(acc >= FIXED_DT){
    tick(); acc -= FIXED_DT; state.tick++; notify();
  }
  if(saveTimer >= 5){ save(); saveTimer=0; }
  requestAnimationFrame(frame);
}

function tick(){
  runMovement();
  runConstruction();
  runProduction();
  runBuildingXP();
  runReputation();
  runPopulationGrowth(); // 명성 기반 인구 증가
  runSpawn();
}


