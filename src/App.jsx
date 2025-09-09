import React, { useEffect } from "react";
import HUD from "./components/HUD.jsx";
import Scene3D from "./components/Scene3D.jsx";
import BuildMenu from "./components/BuildMenu.jsx";
import Inspector from "./components/Inspector.jsx";
import { startGameLoop } from "./game/gameLoop";
import { state, addUnit, uid, subscribe } from "./game/state";

export default function App(){
  const [, force] = React.useReducer(x=>x+1, 0);
  useEffect(()=>{
    // 샘플 초기 데이터: 시작 시 시민 없음, 마을 회관 건설로 시민 획득
    state.population = 0;

    startGameLoop();
    const unsub = subscribe(()=>{
      console.log(`App 상태 업데이트: 시민 ${Object.keys(state.units).length}명, 인구 ${state.population}`);
      force();
    });
    return unsub;
  }, []);

  return (
    <div className="App">
      {/* Scene3D가 상태 변화를 반영하도록 간단 재렌더 트리거 */}
      <Scene3D className="w-full h-full" units={Object.values(state.units)} timeScale={state.sim.timeScale} />
      <HUD />
      <BuildMenu />
      <Inspector />
    </div>
  );
}
