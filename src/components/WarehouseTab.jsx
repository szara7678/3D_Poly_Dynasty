import React, { useState } from 'react';
import { state, subscribe, setSelectedItem } from '../game/state';
import { ITEM_DEFINITIONS, ITEM_TYPES, EQUIPMENT_SLOTS, getEquipmentQualityColor, getEquipmentQualityBorderColor } from '../game/content/items';
import { getWarehouseItemsByType, getWarehouseItemsBySubtype, getWarehouseItemsBySlot, getItemEquippedBy } from '../game/systems/warehouse';

export default function WarehouseTab() {
  const [, force] = React.useReducer(x => x + 1, 0);
  const [filter, setFilter] = useState('all');
  const [subFilter, setSubFilter] = useState('all');

  React.useEffect(() => {
    const unsub = subscribe(() => force());
    return unsub;
  }, []);

  const warehouse = state.warehouse;
  const items = warehouse.items;
  const equipment = warehouse.equipment;

  // 필터링된 아이템 목록
  let filteredItems = {};
  
  if (filter === 'consumable') {
    filteredItems = getWarehouseItemsByType(warehouse, ITEM_TYPES.CONSUMABLE);
    if (subFilter !== 'all') {
      filteredItems = getWarehouseItemsBySubtype(warehouse, subFilter);
    }
  } else if (filter === 'equipment') {
    filteredItems = getWarehouseItemsByType(warehouse, ITEM_TYPES.EQUIPMENT);
    if (subFilter !== 'all') {
      filteredItems = getWarehouseItemsBySlot(warehouse, subFilter);
    }
  } else {
    // 전체 아이템 (소비 아이템 + 장비 아이템)
    filteredItems = {};
    // 소비 아이템 중 수량이 0보다 큰 것만 추가
    for (const [itemId, count] of Object.entries(items)) {
      if (count > 0) {
        filteredItems[itemId] = count;
      }
    }
    // 장비 아이템 추가
    for (const [uniqueItemId, equipmentItem] of Object.entries(equipment)) {
      filteredItems[uniqueItemId] = 1;
    }
  }

  const handleItemClick = (itemId) => {
    setSelectedItem(itemId);
  };

  const getItemEquippedInfo = (itemId) => {
    try {
      const equippedInfo = getItemEquippedBy(warehouse, itemId);
      if (equippedInfo) {
        const citizen = state.units[equippedInfo.citizenId];
        return citizen ? `${citizen.name} 장착` : '장착';
      }
      return null;
    } catch (error) {
      console.error('getItemEquippedInfo 오류:', error);
      return null;
    }
  };

  // 스탯 이름 변환 함수
  const getStatName = (stat) => {
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
  };

  return (
    <div className="space-y-2 max-h-[50vh] overflow-auto pr-1">
      <div className="mb-4">
        {/* 필터 버튼들 */}
        <div className="flex flex-wrap gap-2 mb-3">
          <button
            onClick={() => { setFilter('all'); setSubFilter('all'); }}
            className={`px-3 py-1 rounded text-sm ${
              filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-600 text-gray-300'
            }`}
          >
            전체
          </button>
          <button
            onClick={() => { setFilter('consumable'); setSubFilter('all'); }}
            className={`px-3 py-1 rounded text-sm ${
              filter === 'consumable' ? 'bg-blue-600 text-white' : 'bg-gray-600 text-gray-300'
            }`}
          >
            소비
          </button>
          <button
            onClick={() => { setFilter('equipment'); setSubFilter('all'); }}
            className={`px-3 py-1 rounded text-sm ${
              filter === 'equipment' ? 'bg-blue-600 text-white' : 'bg-gray-600 text-gray-300'
            }`}
          >
            장비
          </button>
        </div>

        {/* 서브 필터 버튼들 */}
        {filter === 'consumable' && (
          <div className="flex flex-wrap gap-2 mb-3">
            <button
              onClick={() => setSubFilter('all')}
              className={`px-2 py-1 rounded text-xs ${
                subFilter === 'all' ? 'bg-green-600 text-white' : 'bg-gray-500 text-gray-300'
              }`}
            >
              전체
            </button>
            <button
              onClick={() => setSubFilter('resource_box')}
              className={`px-2 py-1 rounded text-xs ${
                subFilter === 'resource_box' ? 'bg-green-600 text-white' : 'bg-gray-500 text-gray-300'
              }`}
            >
              재료 상자
            </button>
            <button
              onClick={() => setSubFilter('talent_boost')}
              className={`px-2 py-1 rounded text-xs ${
                subFilter === 'talent_boost' ? 'bg-green-600 text-white' : 'bg-gray-500 text-gray-300'
              }`}
            >
              재능 상승
            </button>
            <button
              onClick={() => setSubFilter('stat_boost')}
              className={`px-2 py-1 rounded text-xs ${
                subFilter === 'stat_boost' ? 'bg-green-600 text-white' : 'bg-gray-500 text-gray-300'
              }`}
            >
              스탯 상승
            </button>
          </div>
        )}

        {filter === 'equipment' && (
          <div className="flex flex-wrap gap-2 mb-3">
            <button
              onClick={() => setSubFilter('all')}
              className={`px-2 py-1 rounded text-xs ${
                subFilter === 'all' ? 'bg-purple-600 text-white' : 'bg-gray-500 text-gray-300'
              }`}
            >
              전체
            </button>
            <button
              onClick={() => setSubFilter(EQUIPMENT_SLOTS.WEAPON)}
              className={`px-2 py-1 rounded text-xs ${
                subFilter === EQUIPMENT_SLOTS.WEAPON ? 'bg-purple-600 text-white' : 'bg-gray-500 text-gray-300'
              }`}
            >
              무기
            </button>
            <button
              onClick={() => setSubFilter(EQUIPMENT_SLOTS.HELMET)}
              className={`px-2 py-1 rounded text-xs ${
                subFilter === EQUIPMENT_SLOTS.HELMET ? 'bg-purple-600 text-white' : 'bg-gray-500 text-gray-300'
              }`}
            >
              투구
            </button>
            <button
              onClick={() => setSubFilter(EQUIPMENT_SLOTS.ARMOR)}
              className={`px-2 py-1 rounded text-xs ${
                subFilter === EQUIPMENT_SLOTS.ARMOR ? 'bg-purple-600 text-white' : 'bg-gray-500 text-gray-300'
              }`}
            >
              갑옷
            </button>
            <button
              onClick={() => setSubFilter(EQUIPMENT_SLOTS.BOOTS)}
              className={`px-2 py-1 rounded text-xs ${
                subFilter === EQUIPMENT_SLOTS.BOOTS ? 'bg-purple-600 text-white' : 'bg-gray-500 text-gray-300'
              }`}
            >
              신발
            </button>
            <button
              onClick={() => setSubFilter(EQUIPMENT_SLOTS.NECKLACE)}
              className={`px-2 py-1 rounded text-xs ${
                subFilter === EQUIPMENT_SLOTS.NECKLACE ? 'bg-purple-600 text-white' : 'bg-gray-500 text-gray-300'
              }`}
            >
              목걸이
            </button>
            <button
              onClick={() => setSubFilter(EQUIPMENT_SLOTS.RING)}
              className={`px-2 py-1 rounded text-xs ${
                subFilter === EQUIPMENT_SLOTS.RING ? 'bg-purple-600 text-white' : 'bg-gray-500 text-gray-300'
              }`}
            >
              반지
            </button>
          </div>
        )}
      </div>

      {/* 아이템 목록 */}
      <div className="space-y-2">
        {Object.keys(filteredItems).length === 0 ? (
          <div className="text-gray-400 text-center py-8">
            {filter === 'all' ? '창고가 비어있습니다.' : '해당 분류의 아이템이 없습니다.'}
          </div>
        ) : (
          Object.entries(filteredItems).map(([itemId, count]) => {
            // 아이템 정보 가져오기 (소비 아이템 또는 개별 장비)
            let item, equippedInfo;
            
            if (ITEM_DEFINITIONS[itemId]) {
              // 소비 아이템
              item = ITEM_DEFINITIONS[itemId];
              equippedInfo = null; // 소비 아이템은 장착되지 않음
            } else if (warehouse.equipment[itemId]) {
              // 개별 장비 아이템
              item = warehouse.equipment[itemId];
              equippedInfo = getItemEquippedInfo(itemId);
            } else {
              return null; // 아이템을 찾을 수 없음
            }
            
            // 장비 품질 색상 결정
            const specialAbilitiesCount = item?.specialAbilities ? item.specialAbilities.length : 0;
            const qualityColor = getEquipmentQualityColor(specialAbilitiesCount);
            const qualityBorderColor = getEquipmentQualityBorderColor(specialAbilitiesCount);
            
            return (
              <button
                key={itemId}
                onClick={() => handleItemClick(itemId)}
                className={`w-full flex items-center justify-between border rounded-lg px-2 py-1 text-sm ${
                  state.ui.selectedItemId === itemId 
                    ? 'bg-blue-600 text-white border-blue-400' 
                    : 'bg-gray-50 hover:bg-gray-100 border-gray-300'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className={`font-medium ${qualityColor}`}>{item.name}</span>
                  {item.type === ITEM_TYPES.CONSUMABLE && (
                    <span className="text-gray-500 text-xs">×{count}</span>
                  )}
                  {equippedInfo && (
                    <span className="text-xs bg-yellow-500 text-yellow-900 px-1 py-0.5 rounded">
                      {equippedInfo}
                    </span>
                  )}
                  {item.quality === 'high' && (
                    <span className="text-xs bg-yellow-400 text-yellow-800 px-1 py-0.5 rounded">
                      고급
                    </span>
                  )}
                </div>
                <div className="text-right">
                  <div className="text-[11px] text-slate-600">
                    {item.type === ITEM_TYPES.EQUIPMENT && item.baseStats ? (
                      Object.entries(item.baseStats).map(([stat, value]) => 
                        `${getStatName(stat)}+${value}`
                      ).join(' ')
                    ) : (
                      item.specialAbilities && item.specialAbilities.length > 0 && 
                      `${item.specialAbilities.length}개 특수능력`
                    )}
                  </div>
                </div>
              </button>
            );
          })
        )}
      </div>

      {/* 창고 용량 표시 (주석처리) */}
      {/*
      <div className="mt-4 pt-3 border-t border-gray-600">
        <div className="flex justify-between text-sm text-gray-300">
          <span>창고 용량</span>
          <span>
            {Object.values(items).reduce((sum, count) => sum + count, 0) + Object.keys(equipment).length} / {warehouse.capacity}
          </span>
        </div>
        <div className="w-full bg-gray-600 rounded-full h-2 mt-1">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ 
              width: `${Math.min(100, ((Object.values(items).reduce((sum, count) => sum + count, 0) + Object.keys(equipment).length) / warehouse.capacity) * 100)}%` 
            }}
          ></div>
        </div>
      </div>
      */}
    </div>
  );
}
