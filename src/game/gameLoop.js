import { state, save, notify } from "./state";
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
    tick(); acc -= FIXED_DT; state.tick++; notify();
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


