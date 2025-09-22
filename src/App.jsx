import React, { useEffect } from "react";
import HUD from "./components/HUD.jsx";
import Scene3D from "./components/Scene3D.jsx";
import MainMenu from "./components/MainMenu.jsx";
import Inspector from "./components/Inspector.jsx";
import BuildCancelButton from "./components/BuildCancelButton.jsx";
import NotificationSystem from "./components/NotificationSystem.jsx";
import SquadMoveDisplay from "./components/SquadMoveDisplay.jsx";
import { startGameLoop } from "./game/gameLoop";
import { state, addUnit, uid, subscribe, initializeMonsterSystem } from "./game/state";

export default function App(){
  const [, force] = React.useReducer(x=>x+1, 0);
  useEffect(()=>{
    // 샘플 초기 데이터: 시작 시 시민 없음, 마을 회관 건설로 시민 획득
    state.population = 0;

    // 몬스터 시스템 초기화
    initializeMonsterSystem();
    
    // 몬스터 시스템 초기화 후 강제 리렌더링 (타이밍 문제 해결)
    setTimeout(() => {
      console.log('App.jsx - 몬스터 시스템 확인:', {
        monstersCount: Object.keys(state.monsters).length,
        nestsCount: Object.keys(state.monsterNests).length,
        nests: state.monsterNests
      });
      // 강제 리렌더링으로 EntityRenderer가 군락지 데이터를 인식하도록 함
      force();
    }, 100);

    startGameLoop();
    const unsub = subscribe(()=>{
      force();
    });
    return unsub;
  }, []);

  return (
    <div className="App">
      {/* Scene3D가 상태 변화를 반영하도록 간단 재렌더 트리거 */}
      <Scene3D className="w-full h-full" units={Object.values(state.units)} timeScale={state.sim.timeScale} />
      <HUD />
      <MainMenu />
      <Inspector />
      <SquadMoveDisplay />
      <BuildCancelButton />
      <NotificationSystem />
    </div>
  );
}
