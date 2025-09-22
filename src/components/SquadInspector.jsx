import React, { useState, useRef, useEffect } from "react";
import { state, subscribe, assignUnitToSquad, unassignUnitFromSquad, setSquadName, setSquadMoveMode, setSelectedSquad, idleUnits } from "../game/state";

export default function SquadInspector() {
  const [, force] = React.useReducer(x => x + 1, 0);
  const [editingName, setEditingName] = useState(false);
  const [tempName, setTempName] = useState("");
  const [moveMode, setMoveMode] = useState(false);
  const inspectorRef = useRef(null);
  
  React.useEffect(() => {
    const unsub = subscribe(() => force());
    return unsub;
  }, []);

  // 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inspectorRef.current && !inspectorRef.current.contains(event.target)) {
        setSelectedSquad(null);
      }
    };

    const selectedSquadId = state.ui.selectedSquadId;
    if (selectedSquadId) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [state.ui.selectedSquadId]);

  const selectedSquadId = state.ui.selectedSquadId;
  if (!selectedSquadId) return null;

  const squad = state.squads[selectedSquadId];
  if (!squad) return null;

  // 명령 모드일 때는 SquadInspector 숨김
  if (squad.moveMode) return null;

  const handleNameEdit = () => {
    setEditingName(true);
    setTempName(squad.name || "부대");
  };

  const handleNameSave = () => {
    setSquadName(selectedSquadId, tempName);
    setEditingName(false);
    setTempName("");
  };

  const handleNameCancel = () => {
    setEditingName(false);
    setTempName("");
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleNameSave();
    } else if (e.key === 'Escape') {
      handleNameCancel();
    }
  };

  const handleMoveModeToggle = () => {
    const newMoveMode = !moveMode;
    setMoveMode(newMoveMode);
    setSquadMoveMode(selectedSquadId, newMoveMode);
  };

  const handleAssignUnit = (unitId) => {
    assignUnitToSquad(unitId, selectedSquadId);
  };

  const handleUnassignUnit = (unitId) => {
    unassignUnitFromSquad(unitId);
  };

  const squadMembers = squad.members ? squad.members.map(id => state.units[id]).filter(Boolean) : [];
  const assignableUnits = idleUnits().filter(unit => !unit.assignedSquadId);

  return (
    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur rounded-2xl shadow-lg p-3 w-[520px] md:w-[520px] w-[95vw] text-sm" ref={inspectorRef}>
      {/* 닫기 버튼 */}
      <div className="flex justify-end mb-2">
        <button className="text-xs text-slate-600 hover:underline" onClick={() => setSelectedSquad(null)}>✕</button>
      </div>
      
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          {editingName ? (
            <input
              type="text"
              value={tempName}
              onChange={(e) => setTempName(e.target.value)}
              onKeyDown={handleKeyPress}
              onBlur={handleNameSave}
              className="font-semibold bg-transparent border-b border-slate-300 focus:border-slate-500 outline-none"
              autoFocus
            />
          ) : (
            <div className="font-semibold">{squad.name || "부대"}</div>
          )}
          <button 
            className="text-slate-400 hover:text-slate-600 text-sm flex items-center gap-1"
            onClick={handleNameEdit}
          >
            <span>✏️</span>
            <span>변경</span>
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button 
            className={`text-sm px-3 py-1 rounded ${
              moveMode 
                ? 'bg-red-500 hover:bg-red-600 text-white' 
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
            onClick={handleMoveModeToggle}
          >
            {moveMode ? '이동 모드 해제' : '부대 명령'}
          </button>
        </div>
      </div>

      {moveMode && (
        <div className="mb-3 p-2 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="text-xs text-blue-700">
            이동 모드 활성화: 지도에서 클릭하여 부대를 이동시킬 수 있습니다.
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-3">
        <div>
          <div className="text-xs text-slate-600 mb-1">부대 인원 {squadMembers.length}명</div>
          <div className="space-y-1 max-h-32 overflow-auto pr-1">
            {squadMembers.map(unit => (
              <div key={unit.id} className="flex items-center justify-between border rounded-lg px-2 py-1">
                <div className="flex flex-col">
                  <span className="text-sm">{unit.name}</span>
                  <span className="text-xs text-slate-600">
                    HP {unit.hp || 0}/{unit.hpMax || 0} · MP {unit.mp || 0}/{unit.mpMax || 0}
                  </span>
                </div>
                <button 
                  className="text-red-600 hover:underline text-xs"
                  onClick={() => handleUnassignUnit(unit.id)}
                >
                  해제
                </button>
              </div>
            ))}
            {squadMembers.length === 0 && (
              <div className="text-xs text-slate-400">부대에 배치된 인원이 없습니다</div>
            )}
          </div>
        </div>
        
        <div>
          <div className="text-xs text-slate-600 mb-1">배치 가능한 시민</div>
          <div className="space-y-1 max-h-32 overflow-auto pr-1">
            {assignableUnits.slice(0, 20).map(unit => (
              <div key={unit.id} className="flex items-center justify-between border rounded-lg px-2 py-1">
                <div className="flex flex-col">
                  <span className="text-sm">{unit.name}</span>
                  <span className="text-xs text-slate-600">
                    HP {unit.hp || 0}/{unit.hpMax || 0} · MP {unit.mp || 0}/{unit.mpMax || 0}
                  </span>
                </div>
                <button 
                  className="text-emerald-700 hover:underline text-xs"
                  onClick={() => handleAssignUnit(unit.id)}
                >
                  배치
                </button>
              </div>
            ))}
            {assignableUnits.length === 0 && (
              <div className="text-xs text-slate-400">배치 가능한 시민이 없습니다</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
