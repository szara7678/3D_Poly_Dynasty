import React, { useRef, useEffect, useState } from "react";
import { state, subscribe, setSelectedSquad, setSquadCommand } from "../game/state";

export default function SquadMoveDisplay() {
  const [, force] = React.useReducer(x => x + 1, 0);
  const [selectedCommand, setSelectedCommand] = useState('attack');
  
  React.useEffect(() => {
    const unsub = subscribe(() => force());
    return unsub;
  }, []);

  const selectedSquadId = state.ui.selectedSquadId;
  if (!selectedSquadId) return null;

  const squad = state.squads[selectedSquadId];
  if (!squad || !squad.moveMode || !squad.members) return null;

  const squadMembers = squad.members.map(id => state.units[id]).filter(Boolean);

  const handleClose = () => {
    setSelectedSquad(null);
  };

  const handleCommandSelect = (command) => {
    setSelectedCommand(command);
    setSquadCommand(selectedSquadId, command);
  };

  const commands = [
    { id: 'attack', name: '공격', icon: '⚔️' },
    { id: 'retreat', name: '퇴각', icon: '🏃' },
    { id: 'patrol', name: '정찰', icon: '👁️' }
  ];

  return (
    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur rounded-xl shadow-lg p-2 w-[320px] md:w-[320px] w-[95vw] text-xs">
      <div className="flex items-center justify-between mb-2">
        <div className="text-sm font-semibold">부대 명령 모드</div>
        <button 
          className="text-slate-400 hover:text-slate-600 text-sm font-bold" 
          onClick={handleClose}
        >
          ×
        </button>
      </div>
      
      <div className="grid grid-cols-2 gap-2">
        {/* 좌측: 시민 목록 */}
        <div className="space-y-1 max-h-24 overflow-auto pr-1">
          {squadMembers.map(unit => (
            <div key={unit.id} className="flex items-center justify-between border rounded px-1 py-0.5 bg-blue-50 border-blue-200">
              <span className="text-xs">{unit.name}</span>
              <div className="text-xs text-slate-600">
                <div>HP {unit.hp || 0}/{unit.hpMax || 0}</div>
                <div>MP {unit.mp || 0}/{unit.mpMax || 0}</div>
              </div>
            </div>
          ))}
        </div>
        
        {/* 우측: 명령 버튼들 */}
        <div className="space-y-1 max-h-24 overflow-auto">
          {commands.map(command => (
            <button
              key={command.id}
              onClick={() => handleCommandSelect(command.id)}
              className={`w-full flex items-center justify-center border rounded px-1 py-1 text-xs ${
                selectedCommand === command.id
                  ? 'bg-red-500 text-white border-red-600'
                  : 'bg-gray-100 hover:bg-gray-200 border-gray-300'
              }`}
            >
              <span className="mr-1">{command.icon}</span>
              {command.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
