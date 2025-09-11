import React, { useState, useRef, useEffect } from "react";
import { state, subscribe, setPlacing, canAfford, setSelectedBuilding, setSelectedUnit } from "../game/state";
import { BUILDING_DEFS } from "../game/content/buildings";

export default function MainMenu() {
  const [, force] = React.useReducer(x => x + 1, 0);
  const [activeTab, setActiveTab] = useState(null);
  const menuRef = useRef(null);
  
  React.useEffect(() => {
    const unsub = subscribe(() => force());
    return unsub;
  }, []);

  // 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveTab(null);
      }
    };

    if (activeTab) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeTab]);

  const tabs = [
    { id: 'build', name: '건축', icon: '🏗️' },
    { id: 'buildings', name: '건물', icon: '🏠' },
    { id: 'citizens', name: '시민', icon: '👥' },
    { id: 'diplomacy', name: '외교', icon: '🤝' }
  ];

  const handleTabClick = (tabId) => {
    if (activeTab === tabId) {
      setActiveTab(null);
    } else {
      setActiveTab(tabId);
    }
  };

  const handleBuildClick = (type) => {
    const def = BUILDING_DEFS[type];
    if (!def) return;
    const cost = def.build?.cost || {};
    if (!canAfford(cost)) return;
    setPlacing(type);
    setActiveTab(null); // 메뉴 닫기
  };

  const handleBuildingClick = (buildingId) => {
    setSelectedBuilding(buildingId);
    setActiveTab(null); // 메뉴 닫기
  };

  const handleCitizenClick = (unitId) => {
    setSelectedUnit(unitId);
    setActiveTab(null); // 메뉴 닫기
  };

  const renderBuildTab = () => (
    <div className="space-y-2 max-h-[50vh] overflow-auto pr-1">
      {Object.keys(BUILDING_DEFS).filter(t => t !== "monster_den").map((t) => {
        const d = BUILDING_DEFS[t];
        const cost = d.build?.cost || {};
        const affordable = canAfford(cost);
        return (
          <button
            key={t}
            onClick={() => handleBuildClick(t)}
            disabled={!affordable}
            className={`w-full flex items-center justify-between border rounded-lg px-2 py-1 text-sm ${
              affordable
                ? "bg-emerald-50 hover:bg-emerald-100 border-emerald-300"
                : "bg-gray-100 text-gray-400 border-gray-200"
            }`}
          >
            <span>{d.name}</span>
            <span className="text-[11px] tabular-nums">
              {Object.entries(cost).map(([k, v]) => `${k}:${v}`).join(" ") || "무료"}
            </span>
          </button>
        );
      })}
    </div>
  );

  const renderBuildingsTab = () => (
    <div className="space-y-2 max-h-[50vh] overflow-auto pr-1">
      {Object.values(state.buildings).map((building) => {
        const def = BUILDING_DEFS[building.type] || {};
        return (
          <button
            key={building.id}
            onClick={() => handleBuildingClick(building.id)}
            className="w-full flex items-center justify-between border rounded-lg px-2 py-1 text-sm bg-blue-50 hover:bg-blue-100 border-blue-300"
          >
            <span>{building.name || def.name || building.type} Lv.{building.level || 1}</span>
            <span className="text-[11px] text-slate-600">
              HP {building.hp || 0}/{building.hpMax || 0}
            </span>
          </button>
        );
      })}
      {Object.values(state.buildings).length === 0 && (
        <div className="text-sm text-slate-400 text-center py-4">건물이 없습니다</div>
      )}
    </div>
  );

  const renderCitizensTab = () => (
    <div className="space-y-2 max-h-[50vh] overflow-auto pr-1">
      {Object.values(state.units).map((unit) => (
        <button
          key={unit.id}
          onClick={() => handleCitizenClick(unit.id)}
          className="w-full flex items-center justify-between border rounded-lg px-2 py-1 text-sm bg-green-50 hover:bg-green-100 border-green-300"
        >
          <span>{unit.name}</span>
          <span className="text-[11px] text-slate-600">
            Lv.{unit.level || 1} · HP {unit.hp || 0}/{unit.hpMax || 0}
          </span>
        </button>
      ))}
      {Object.values(state.units).length === 0 && (
        <div className="text-sm text-slate-400 text-center py-4">시민이 없습니다</div>
      )}
    </div>
  );

  const renderDiplomacyTab = () => (
    <div className="text-sm text-slate-400 text-center py-8">
      외교 기능은 아직 구현되지 않았습니다
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'build':
        return renderBuildTab();
      case 'buildings':
        return renderBuildingsTab();
      case 'citizens':
        return renderCitizensTab();
      case 'diplomacy':
        return renderDiplomacyTab();
      default:
        return null;
    }
  };

  return (
    <div className="absolute top-2 right-2" ref={menuRef}>
      {/* 메인 버튼들 */}
      <div className="flex gap-2 mb-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? "bg-blue-500 text-white"
                : "bg-white/90 backdrop-blur text-slate-700 hover:bg-blue-50"
            }`}
          >
            <span className="mr-1">{tab.icon}</span>
            {tab.name}
          </button>
        ))}
      </div>

      {/* 탭 콘텐츠 박스 */}
      {activeTab && (
        <div className="bg-white/90 backdrop-blur rounded-xl shadow-lg p-3 w-64">
          <div className="font-semibold mb-2 text-slate-700">
            {tabs.find(t => t.id === activeTab)?.name}
          </div>
          {renderTabContent()}
          {state.ui.placing && activeTab === 'build' && (
            <div className="mt-2 text-xs text-emerald-700">
              배치 모드: {BUILDING_DEFS[state.ui.placing]?.name} — 지도에서 위치를 클릭하세요
            </div>
          )}
        </div>
      )}
    </div>
  );
}
