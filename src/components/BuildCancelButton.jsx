import React from "react";
import { state, subscribe, cancelPlacing, spend, uid, addBuilding, idleUnits, assignUnitToBuilding, setPlacing, setSelectedBuilding, removeBuilding } from "../game/state";
import { BUILDING_DEFS } from "../game/content/buildings";
import { showNotification } from "../utils/notificationManager";

export default function BuildCancelButton() {
  const [, force] = React.useReducer(x => x + 1, 0);
  
  React.useEffect(() => {
    const unsub = subscribe(() => force());
    return unsub;
  }, []);

  // 건축 모드가 아닐 때는 표시하지 않음
  if (!state.ui.placing) return null;

  const handlePlaceBuilding = () => {
    const placingType = state.ui.placing;
    const def = BUILDING_DEFS[placingType];
    if (!def) return;

    // 청사진 위치 가져오기
    const threeRef = window.__INSU_THREE_REF__;
    const blueprintManager = threeRef?.blueprintManager;
    if (!blueprintManager) return;

    const blueprintPosition = blueprintManager.getBlueprintPosition();
    const isValidPlacement = blueprintManager.getIsValidPlacement();

    if (!isValidPlacement) {
      showNotification('이 위치에는 건물을 배치할 수 없습니다', {
        color: '#ef4444',
        fontSize: '16px',
        duration: 3000
      });
      return;
    }

    // 건물 이동 모드인지 확인
    const movingBuildingId = window.__INSU_BUILDING_MOVE_MODE__;
    if (movingBuildingId) {
      // 건물 이동 처리
      const movingBuilding = state.buildings[movingBuildingId];
      if (movingBuilding) {
        // 기존 건물 제거
        removeBuilding(movingBuildingId);
        
        // 새 위치에 건물 생성 (기존 상태 유지)
        const newBuildingId = uid("b");
        const newBuilding = {
          ...movingBuilding,
          id: newBuildingId,
          tile: { x: blueprintPosition.x, z: blueprintPosition.z },
          hp: movingBuilding.hp, // HP 유지
          level: movingBuilding.level,
          xp: movingBuilding.xp,
          workers: movingBuilding.workers || [],
          capacity: movingBuilding.capacity || 0
        };
        
        state.buildings[newBuildingId] = newBuilding;
        
        // 작업자 재배치
        if (movingBuilding.workers) {
          for (const workerId of movingBuilding.workers) {
            const worker = state.units[workerId];
            if (worker) {
              worker.buildingId = newBuildingId;
            }
          }
        }
        
        // 이동 모드 종료
        window.__INSU_BUILDING_MOVE_MODE__ = null;
        setPlacing(null);
        threeRef?.refreshBuildings?.();
        
        // 성공 알림
        showNotification('건물이 성공적으로 이동되었습니다', {
          color: '#10b981',
          fontSize: '16px',
          duration: 2000
        });
        return;
      }
    }

    // 비용 차감 및 배치 확정
    const ok = spend(def.build?.cost || {});
    if (!ok) {
      showNotification('자원이 부족합니다', {
        color: '#f59e0b',
        fontSize: '16px',
        duration: 3000
      });
      return;
    }
    
    const id = uid("b");
    addBuilding({ 
      id, 
      type: placingType, 
      tile: { x: blueprintPosition.x, z: blueprintPosition.z }, 
      level: 1, 
      hp: def.baseHP || 200, 
      hpMax: def.baseHP || 200, 
      xp: 0, 
      xpToNext: 50, 
      capacity: def.baseCap || 1, 
      workers: [], 
      build: def.build, 
      construct: { progress: 0, eta: def.build?.time || 10, active: true },
      team: 0 // 플레이어 소속
    });
    
    const idle = idleUnits();
    const toAssign = Math.min(idle.length, (def.baseCap || 1));
    for (let i = 0; i < toAssign; i++) {
      assignUnitToBuilding(idle[i].id, id);
    }
    
    setPlacing(null);
    
    // 건물 갱신
    threeRef?.refreshBuildings?.();
    
    // 성공 알림
    showNotification('건물이 성공적으로 건설되었습니다', {
      color: '#10b981',
      fontSize: '16px',
      duration: 2000
    });
  };

  const isMovingBuilding = window.__INSU_BUILDING_MOVE_MODE__;
  
  return (
    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 md:gap-2 gap-1">
      {/* 건물 배치/이동 버튼 */}
      <button 
        onClick={handlePlaceBuilding}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg transition-colors flex items-center gap-2 font-medium"
      >
        <span>{isMovingBuilding ? '📦' : '🏗️'}</span>
        <span>{isMovingBuilding ? '건물 이동' : '건물 배치'}</span>
      </button>
      
      {/* 건축 취소 버튼 */}
      <button 
        onClick={() => {
          window.__INSU_BUILDING_MOVE_MODE__ = null;
          cancelPlacing();
        }}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg transition-colors flex items-center gap-2 font-medium"
      >
        <span>❌</span>
        <span>{isMovingBuilding ? '이동 취소' : '건축 취소'}</span>
      </button>
    </div>
  );
}
