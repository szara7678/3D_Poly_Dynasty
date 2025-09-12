import React from "react";
import { state, subscribe } from "../game/state";

export default function HUD(){
  const [, force] = React.useReducer(x=>x+1, 0);
  const [fps, setFps] = React.useState(0);
  const [metrics, setMetrics] = React.useState({ renderMs: 0, agentsMs: 0, loopMs: 0 });
  React.useEffect(()=>{ const unsub = subscribe(()=>force()); return unsub; },[]);
  // FPS 측정 및 렌더/에이전트 계측 표시
  React.useEffect(()=>{
    let raf; let last = performance.now(); let frames = 0; let acc = 0;
    const step = ()=>{
      const now = performance.now();
      const dt = now - last; last = now; frames++; acc += dt;
      if(acc >= 500){ // 0.5s 마다 업데이트
        setFps(Math.max(1, (frames * 1000) / acc));
        const m = (typeof window !== 'undefined' && window.__INSU_METRICS) || {};
        setMetrics({
          renderMs: Number(m.renderMs||0),
          agentsMs: Number(m.agentsMs||0),
          loopMs: Number(m.loopMs||0)
        });
        frames = 0; acc = 0;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return ()=>cancelAnimationFrame(raf);
  },[]);
  const r = state.res;
  const activeCons = Object.values(state.buildings).filter(b=>b.construct?.active);
  const minEta = activeCons.length ? Math.max(0, Math.min(...activeCons.map(b=>b.construct?.eta||0))) : 0;
  return (
    <div className="fixed top-2 left-2 bg-black/50 text-white text-sm rounded-xl px-3 py-2 space-x-3">
      <span>🖥️ {fps.toFixed(0)} FPS</span>
      {/* <span className="text-white/80">(r:{metrics.renderMs.toFixed(1)}ms a:{metrics.agentsMs.toFixed(1)}ms l:{metrics.loopMs.toFixed(1)}ms)</span> */}
      {/* {typeof window !== 'undefined' && window.__INSU_METRICS && (
        <span className="text-white/60">[{window.__INSU_METRICS.isSoftware? 'SW':'HW'} DPR:{Number(window.__INSU_METRICS.dpr||1).toFixed(2)}]</span>
      )} */}
      <span>🍞 {r.food.toFixed(0)}</span>
      <span>💰 {r.gold.toFixed(0)}</span>
      <span>⛏️ {r.ore.toFixed(0)}</span>
      <span>🌿 {r.herb.toFixed(0)}</span>
      <span>🪵 {r.wood.toFixed(0)}</span>
      <span>⭐ {r.reputation.toFixed(0)}</span>
      <span>👥 {state.population}</span>
      {activeCons.length>0 && (
        <span className="ml-2 bg-emerald-600/70 px-2 py-0.5 rounded-md">🏗️ {minEta.toFixed(1)}s ×{activeCons.length}</span>
      )}
    </div>
  );
}


