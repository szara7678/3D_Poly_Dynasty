import React from "react";
import { state, subscribe } from "../game/state";

export default function HUD(){
  const [, force] = React.useReducer(x=>x+1, 0);
  React.useEffect(()=>{ const unsub = subscribe(()=>force()); return unsub; },[]);
  const r = state.res;
  const activeCons = Object.values(state.buildings).filter(b=>b.construct?.active);
  const minEta = activeCons.length ? Math.max(0, Math.min(...activeCons.map(b=>b.construct?.eta||0))) : 0;
  return (
    <div className="fixed top-2 left-2 bg-black/50 text-white text-sm rounded-xl px-3 py-2 space-x-3">
      <span>🍞 {r.food.toFixed(0)}</span>
      <span>💰 {r.gold.toFixed(0)}</span>
      <span>⛏️ {r.ore.toFixed(0)}</span>
      <span>🌿 {r.herb.toFixed(0)}</span>
      <span>🪵 {r.wood.toFixed(0)}</span>
      <span>⭐ {r.reputation.toFixed(0)}</span>
      <span>👥 {state.population}/{state.popCap}</span>
      {activeCons.length>0 && (
        <span className="ml-2 bg-emerald-600/70 px-2 py-0.5 rounded-md">🏗️ {minEta.toFixed(1)}s ×{activeCons.length}</span>
      )}
    </div>
  );
}


