import React from 'react';
import { state, subscribe, setSelectedItem } from '../game/state';
import { ITEM_DEFINITIONS, ITEM_TYPES, getEquipmentQualityColor } from '../game/content/items';
import { craftItem } from '../game/systems/crafting';

export default function CraftingInspector() {
  const [, force] = React.useReducer(x => x + 1, 0);

  React.useEffect(() => {
    const unsub = subscribe(() => force());
    return unsub;
  }, []);

  const selectedItemId = state.ui.selectedItemId;
  if (!selectedItemId) {
    return (
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[400px] md:w-[400px] w-[95vw] bg-white/90 backdrop-blur rounded-2xl shadow-lg p-2 text-xs">
        <div className="text-center text-slate-400">
          <div className="text-2xl mb-1">🔨</div>
          <div>제작할 아이템을 선택하세요</div>
        </div>
      </div>
    );
  }

  const item = ITEM_DEFINITIONS[selectedItemId];
  if (!item || item.type !== ITEM_TYPES.EQUIPMENT) {
    return (
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[400px] md:w-[400px] w-[95vw] bg-white/90 backdrop-blur rounded-2xl shadow-lg p-2 text-xs">
        <div className="text-center text-slate-400">
          <div className="text-2xl mb-1">❌</div>
          <div>제작할 수 없는 아이템입니다</div>
        </div>
      </div>
    );
  }

  const handleCraft = () => {
    console.log('제작 시작:', selectedItemId);
    console.log('현재 자원:', state.res);
    console.log('제작 비용:', cost);
    
    const result = craftItem(selectedItemId, state);
    console.log('제작 결과:', result);
    
    if (result && result.success) {
      console.log(`${result.item.name} 제작 완료!`);
      if (result.item.specialAbilities && result.item.specialAbilities.length > 0) {
        console.log('특수 능력:', result.item.specialAbilities.map(ability => ability.name).join(', '));
      }
      if (result.item.quality === 'high') {
        console.log('고품질 아이템 제작!');
      }
      // 제작 완료 후 새로 생성된 장비의 인스펙터 표시
      setSelectedItem(result.item.id);
    } else {
      console.log('제작 실패:', result);
    }
  };

  const canAfford = (cost) => {
    for (const [resource, amount] of Object.entries(cost)) {
      if (state.res[resource] < amount) return false;
    }
    return true;
  };

  const cost = item.actualCost || item.craftingCost;
  const affordable = canAfford(cost);

  // 스탯 이름 변환 함수
  function getStatName(stat) {
    const statNames = {
      attack: '공격력',
      defense: '방어력',
      health: '체력',
      STR: '힘',
      DEX: '민첩',
      INT: '지능',
      WIS: '지혜',
      CON: '체력',
      CHA: '매력'
    };
    return statNames[stat] || stat;
  }

  return (
    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur rounded-2xl shadow-lg p-2 w-[400px] md:w-[400px] w-[95vw] text-xs">
      {/* 헤더 */}
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          <div className="font-semibold text-xs">{item.name}</div>
          <span className="text-xs bg-slate-200 px-2 py-0.5 rounded-full">
            {item.slot === 'weapon' ? '무기' : 
             item.slot === 'helmet' ? '투구' :
             item.slot === 'armor' ? '갑옷' :
             item.slot === 'boots' ? '신발' :
             item.slot === 'necklace' ? '목걸이' :
             item.slot === 'ring' ? '반지' : item.slot}
          </span>
        </div>
        <button className="text-slate-400 hover:text-slate-600 text-sm font-bold" onClick={() => setSelectedItem(null)}>×</button>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {/* 기본 정보 */}
        <div className="border rounded-lg p-1.5 h-32 flex flex-col">
          <div className="flex-1 overflow-auto space-y-0.5">
            <div className="text-xs">
              <div className="font-semibold">종류: 장비</div>
              <div className="font-semibold">슬롯: {item.slot === 'weapon' ? '무기' : 
                                                      item.slot === 'helmet' ? '투구' :
                                                      item.slot === 'armor' ? '갑옷' :
                                                      item.slot === 'boots' ? '신발' :
                                                      item.slot === 'necklace' ? '목걸이' :
                                                      item.slot === 'ring' ? '반지' : item.slot}</div>
            </div>
            <div className="text-xs">
              <div className="text-slate-700">{item.description}</div>
            </div>
          </div>
        </div>

        {/* 스탯/재료 */}
        <div className="border rounded-lg p-1.5 h-32 flex flex-col">
          <div className="flex-1 overflow-auto pr-1 space-y-0.5">
            {/* 예상 스탯 */}
            {item.baseStats && (
              <div className="mb-1">
                <div className="text-xs text-slate-500 mb-0.5 font-medium">예상 스탯</div>
                {Object.entries(item.baseStats).map(([stat, value]) => (
                  <div key={stat} className="flex items-center justify-between text-xs">
                    <span>{getStatName(stat)}</span>
                    <span className="font-semibold text-green-600">+{value}</span>
                  </div>
                ))}
              </div>
            )}

            {/* 소모 재료 */}
            <div className="mb-1">
              <div className="text-xs text-slate-500 mb-0.5 font-medium">소모 재료</div>
              {Object.entries(cost).map(([resource, amount]) => (
                <div key={resource} className="flex items-center justify-between text-xs">
                  <span>{resource === 'food' ? '식량' : 
                         resource === 'gold' ? '금' : 
                         resource === 'ore' ? '광물' : 
                         resource === 'herb' ? '허브' : 
                         resource === 'wood' ? '나무' : resource}</span>
                  <span className={`font-semibold ${
                    state.res[resource] >= amount ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {amount}/{state.res[resource] || 0}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 제작 버튼 */}
      <div className="mt-2 pt-1 border-t border-slate-200">
        <button
          onClick={handleCraft}
          disabled={!affordable}
          className={`w-full px-2 py-1 rounded text-xs font-medium ${
            affordable
              ? 'bg-blue-500 hover:bg-blue-600 text-white'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {affordable ? '제작하기' : '재료 부족'}
        </button>
      </div>
    </div>
  );
}
