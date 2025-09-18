import React from 'react';
import { state, subscribe, setSelectedItem } from '../game/state';
import { ITEM_DEFINITIONS, ITEM_TYPES } from '../game/content/items';
import { craftItem } from '../game/systems/crafting';

export default function CraftingTab() {
  const [, force] = React.useReducer(x => x + 1, 0);

  React.useEffect(() => {
    const unsub = subscribe(() => force());
    return unsub;
  }, []);

  // 제작 가능한 아이템 목록 (장비만)
  const allEquipmentItems = Object.values(ITEM_DEFINITIONS).filter(item => item.type === ITEM_TYPES.EQUIPMENT);

  const handleCraftItem = (itemId) => {
    const result = craftItem(itemId, state);
    if (result && result.success) {
      // 제작 성공
      console.log(`${result.item.name} 제작 완료!`);
      if (result.item.specialAbilities && result.item.specialAbilities.length > 0) {
        console.log('특수 능력:', result.item.specialAbilities.map(ability => ability.name).join(', '));
      }
      if (result.item.quality === 'high') {
        console.log('고품질 아이템 제작!');
      }
    }
  };

  const handleItemClick = (itemId) => {
    setSelectedItem(itemId);
  };

  const canAfford = (cost) => {
    for (const [resource, amount] of Object.entries(cost)) {
      if (state.res[resource] < amount) return false;
    }
    return true;
  };

  return (
    <div className="space-y-2 max-h-[50vh] overflow-auto pr-1">
      {/* 제작 가능한 아이템 목록 */}
      <div className="space-y-2">
        {allEquipmentItems.length === 0 ? (
          <div className="text-gray-400 text-center py-8">
            제작 가능한 아이템이 없습니다.
          </div>
        ) : (
          allEquipmentItems.map((item) => {
            const cost = item.actualCost || item.craftingCost;
            const affordable = canAfford(cost);
            
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                disabled={!affordable}
                className={`w-full flex items-center justify-between border rounded-lg px-2 py-1 text-sm ${
                  affordable
                    ? "bg-emerald-50 hover:bg-emerald-100 border-emerald-300"
                    : "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="font-medium">{item.name}</span>
                  {item.specialAbilities && item.specialAbilities.length > 0 && (
                    <span className="text-xs bg-blue-500 text-blue-100 px-1 py-0.5 rounded">
                      {item.specialAbilities.length}개 특수능력
                    </span>
                  )}
                </div>
                <div className="text-right">
                  <div className="text-[11px] tabular-nums">
                    {Object.entries(cost).map(([k, v]) => `${k}:${v}`).join(" ") || "무료"}
                  </div>
                </div>
              </button>
            );
          })
        )}
      </div>
    </div>
  );
}

// 자원 이모지 매핑
function getResourceEmoji(resource) {
  const emojiMap = {
    food: '🍞',
    gold: '💰',
    ore: '⛏️',
    herb: '🌿',
    wood: '🪵'
  };
  return emojiMap[resource] || '❓';
}
