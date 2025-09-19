import React, { useState, useRef, useEffect } from "react";
import { state, subscribe, setPlacing, canAfford, setSelectedBuilding, setSelectedUnit } from "../game/state";
import { BUILDING_DEFS } from "../game/content/buildings";
import WarehouseTab from "./WarehouseTab";
import CraftingTab from "./CraftingTab";

export default function MainMenu() {
  const [, force] = React.useReducer(x => x + 1, 0);
  const [activeTab, setActiveTab] = useState(null);
  const [isExpanded, setIsExpanded] = useState(true);
  const [citizenFilter, setCitizenFilter] = useState('all');
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
    { id: 'warehouse', name: '창고', icon: '📦' },
    { id: 'crafting', name: '제작', icon: '🔨' },
    { id: 'diplomacy', name: '외교', icon: '🤝' }
  ];

  const handleTabClick = (tabId) => {
    if (activeTab === tabId) {
      setActiveTab(null);
    } else {
      setActiveTab(tabId);
    }
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
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

  const renderCitizensTab = () => {
    // 건물 타입별 필터링
    const filteredUnits = Object.values(state.units).filter((unit) => {
      if (citizenFilter === 'all') return true;
      if (citizenFilter === 'unassigned') return !unit.assignedBuildingId;
      
      const bid = unit.assignedBuildingId;
      const building = bid ? state.buildings[bid] : null;
      return building && building.type === citizenFilter;
    });

    // 사용 가능한 건물 타입들 수집
    const buildingTypes = ['all', 'unassigned'];
    Object.values(state.buildings).forEach(building => {
      if (!buildingTypes.includes(building.type)) {
        buildingTypes.push(building.type);
      }
    });

    return (
      <div className="space-y-2 max-h-[50vh] overflow-auto pr-1">
        {/* 건물 타입별 필터 버튼들 - 한 줄로 가로 스크롤 */}
        <div className="flex gap-2 mb-3 overflow-x-auto pb-2">
          {buildingTypes.map((buildingType) => {
            const buildingDef = BUILDING_DEFS[buildingType];
            const displayName = buildingType === 'all' ? '전체' : 
                              buildingType === 'unassigned' ? '무소속' : 
                              buildingDef?.name || buildingType;
            
            return (
              <button
                key={buildingType}
                onClick={() => setCitizenFilter(buildingType)}
                className={`px-2 py-1 rounded text-xs whitespace-nowrap ${
                  citizenFilter === buildingType 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-500 text-gray-300'
                }`}
              >
                {displayName}
              </button>
            );
          })}
        </div>

        {/* 필터링된 시민 목록 */}
        {filteredUnits.map((unit) => {
          const bid = unit.assignedBuildingId;
          const b = bid ? state.buildings[bid] : null;
          const job = b ? (b.name || BUILDING_DEFS[b.type]?.name || b.type) : "무소속";
          return (
            <button
              key={unit.id}
              onClick={() => handleCitizenClick(unit.id)}
              className="w-full flex items-center justify-between border rounded-lg px-2 py-1 text-sm bg-green-50 hover:bg-green-100 border-green-300"
            >
              <span>{unit.name}</span>
              <span className="text-[11px] text-slate-600">
                {job} · HP {unit.hp || 0}/{unit.hpMax || 0}
              </span>
            </button>
          );
        })}
        
        {filteredUnits.length === 0 && (
          <div className="text-sm text-slate-400 text-center py-4">
            {citizenFilter === 'all' ? '시민이 없습니다' : '해당 건물에 배치된 시민이 없습니다'}
          </div>
        )}
      </div>
    );
  };

  const renderWarehouseTab = () => (
    <WarehouseTab />
  );

  const renderCraftingTab = () => (
    <CraftingTab />
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
      case 'warehouse':
        return renderWarehouseTab();
      case 'crafting':
        return renderCraftingTab();
      case 'diplomacy':
        return renderDiplomacyTab();
      default:
        return null;
    }
  };

  return (
    <div className="fixed top-2 right-2 md:right-2 right-1 flex" ref={menuRef}>
      {/* 탭 콘텐츠 박스 (왼쪽에 표시) */}
      {activeTab && (
        <div className="bg-white/90 backdrop-blur rounded-xl shadow-lg p-3 w-64 mr-2">
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

      {/* 메인 메뉴 판 */}
      <div className="bg-white/90 backdrop-blur rounded-xl shadow-lg">
        {/* 토글 버튼 */}
        <div className="w-full">
          <button 
            onClick={toggleExpanded}
            className="w-full text-slate-600 hover:text-slate-800 transition-colors p-2"
          >
            {isExpanded ? '▶' : '◀'}
          </button>
        </div>
        
        {/* 메뉴 항목들 */}
        <div className={`transition-all duration-300 ${isExpanded ? 'p-2' : 'p-1'}`}>
          <div className={`space-y-1 ${isExpanded ? '' : 'space-y-0.5'}`}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`w-full flex items-center transition-colors rounded-lg px-2 py-1 ${
                  activeTab === tab.id
                    ? "bg-blue-500 text-white"
                    : "hover:bg-blue-50 text-slate-700"
                }`}
              >
                <span className="text-sm">{tab.icon}</span>
                {isExpanded && <span className="ml-2 text-sm font-medium">{tab.name}</span>}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
