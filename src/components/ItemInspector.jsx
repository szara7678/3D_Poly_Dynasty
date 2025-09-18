import React, { useState } from 'react';
import { state, subscribe, setSelectedItem } from '../game/state';
import { ITEM_DEFINITIONS, ITEM_TYPES, getEquipmentQualityColor } from '../game/content/items';
import { getItemEquippedBy, equipItem, unequipItem, useItem } from '../game/systems/warehouse';
import CitizenSelectionModal from './CitizenSelectionModal';

export default function ItemInspector() {
  const [, force] = React.useReducer(x => x + 1, 0);
  const [isEditingName, setIsEditingName] = useState(false);
  const [newName, setNewName] = useState('');
  const [showCitizenModal, setShowCitizenModal] = useState(false);
  const [modalType, setModalType] = useState(''); // 'equip' or 'use'

  React.useEffect(() => {
    const unsub = subscribe(() => force());
    return unsub;
  }, []);

  const selectedItemId = state.ui.selectedItemId;
  if (!selectedItemId) {
    return (
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[400px] bg-white border border-slate-300 rounded-lg shadow-lg">
        <div className="p-4 text-center text-slate-400">
          <div className="text-4xl mb-2">📦</div>
          <div>아이템을 선택하세요</div>
        </div>
      </div>
    );
  }

  const warehouse = state.warehouse;
  
  // 아이템 정보 가져오기 (소비 아이템 또는 개별 장비)
  let item, itemCount, equippedInfo;
  
  if (ITEM_DEFINITIONS[selectedItemId]) {
    // 소비 아이템
    item = ITEM_DEFINITIONS[selectedItemId];
    itemCount = warehouse.items[selectedItemId] || 0;
    equippedInfo = null;
  } else if (warehouse.equipment[selectedItemId]) {
    // 개별 장비 아이템
    item = warehouse.equipment[selectedItemId];
    itemCount = 1; // 개별 아이템이므로 항상 1
    equippedInfo = getItemEquippedBy(warehouse, selectedItemId);
  } else {
    return (
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[400px] bg-white border border-slate-300 rounded-lg shadow-lg">
        <div className="p-4 text-center text-slate-400">
          <div className="text-4xl mb-2">❌</div>
          <div>아이템을 찾을 수 없습니다</div>
        </div>
      </div>
    );
  }

  const handleNameEdit = () => {
    setIsEditingName(true);
    setNewName(item.name);
  };

  const handleNameSave = () => {
    if (item.type === ITEM_TYPES.EQUIPMENT) {
      // 장비 아이템 이름 변경
      warehouse.equipment[selectedItemId].name = newName;
    }
    setIsEditingName(false);
  };

  const handleNameCancel = () => {
    setIsEditingName(false);
    setNewName('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleNameSave();
    } else if (e.key === 'Escape') {
      handleNameCancel();
    }
  };

  const handleEquip = () => {
    if (item.type === ITEM_TYPES.EQUIPMENT) {
      setModalType('equip');
      setShowCitizenModal(true);
    }
  };

  const handleUnequip = () => {
    if (item.type === ITEM_TYPES.EQUIPMENT && equippedInfo) {
      unequipItem(warehouse, equippedInfo.citizenId, item.slot);
    }
  };

  const handleUse = () => {
    if (item.type === ITEM_TYPES.CONSUMABLE) {
      if (item.subtype === 'resource_box') {
        // 재료 상자는 바로 사용
        const result = useItem(warehouse, selectedItemId, 1, state);
        if (result) {
          console.log('소비 아이템 사용 완료:', item.name);
          
          // 아이템 수량 확인하여 인스펙터 닫기
          const remainingCount = warehouse.items[selectedItemId] || 0;
          if (remainingCount <= 0) {
            console.log('아이템이 모두 소진되어 인스펙터 닫기');
            setSelectedItem(null);
          }
        } else {
          console.log('소비 아이템 사용 실패:', item.name);
        }
      } else {
        // 재능/스탯 상승 아이템은 시민 선택 필요
        setModalType('use');
        setShowCitizenModal(true);
      }
    }
  };

  const handleCitizenSelect = (citizenId) => {
    console.log('시민 선택됨:', citizenId, '모달 타입:', modalType);
    console.log('선택된 아이템:', selectedItemId, item);
    
    if (modalType === 'equip') {
      console.log('장비 장착 시도:', item.name, '→', state.units[citizenId]?.name);
      // 장비 장착
      const result = equipItem(warehouse, selectedItemId, citizenId);
      console.log('장착 결과:', result);
      if (result) {
        console.log('장비 장착 완료:', item.name, '→', state.units[citizenId]?.name);
      } else {
        console.log('장비 장착 실패:', item.name);
      }
    } else if (modalType === 'use') {
      console.log('소비 아이템 사용 시도:', item.name, '→', state.units[citizenId]?.name);
      // 소비 아이템 사용
      const result = useItem(warehouse, selectedItemId, 1, state);
      console.log('사용 결과:', result);
      if (result) {
        console.log('소비 아이템 사용 완료:', item.name, '→', state.units[citizenId]?.name);
        // TODO: 시민에게 효과 적용
        
        // 아이템 수량 확인하여 인스펙터 닫기
        const remainingCount = warehouse.items[selectedItemId] || 0;
        if (remainingCount <= 0) {
          console.log('아이템이 모두 소진되어 인스펙터 닫기');
          setSelectedItem(null);
        }
      } else {
        console.log('소비 아이템 사용 실패:', item.name);
      }
    }
    
    console.log('모달 닫기');
    setShowCitizenModal(false);
    setModalType('');
  };

  const specialAbilitiesCount = item.specialAbilities ? item.specialAbilities.length : 0;
  const qualityColor = getEquipmentQualityColor(specialAbilitiesCount);

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
    <>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[400px] bg-white border border-slate-300 rounded-lg shadow-lg">
        <div className="p-3">
          {/* 헤더 */}
          <div className="flex items-center justify-between mb-3">
            {isEditingName ? (
              <div className="flex items-center gap-2 flex-1">
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  onKeyDown={handleKeyPress}
                  className="text-sm font-bold border border-slate-300 rounded px-2 py-1"
                  autoFocus
                />
                <button
                  onClick={handleNameSave}
                  className="text-green-600 hover:text-green-800 text-xs"
                >
                  ✓
                </button>
                <button
                  onClick={handleNameCancel}
                  className="text-red-600 hover:text-red-800 text-xs"
                >
                  ✕
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2 flex-1">
                {item.type === ITEM_TYPES.EQUIPMENT && (
                  <span className="text-xs text-slate-500">
                    {item.slot === 'weapon' ? '무기' : 
                     item.slot === 'helmet' ? '투구' :
                     item.slot === 'armor' ? '갑옷' :
                     item.slot === 'boots' ? '신발' :
                     item.slot === 'necklace' ? '목걸이' :
                     item.slot === 'ring' ? '반지' : item.slot}
                  </span>
                )}
                <h3 className={`text-sm font-bold ${qualityColor}`}>{item.name}</h3>
                {item.type === ITEM_TYPES.EQUIPMENT && (
                  <button
                    onClick={handleNameEdit}
                    className="text-slate-400 hover:text-slate-600 text-xs"
                  >
                    ✏️
                  </button>
                )}
              </div>
            )}
            <button
              onClick={() => setSelectedItem(null)}
              className="text-slate-400 hover:text-slate-600 text-sm"
            >
              ✕
            </button>
          </div>

          {/* 아이템 정보 */}
          <div className="space-y-2">
            {/* 기본 정보 */}
            <div className="border rounded-lg p-2">
              <div className="text-xs text-slate-600 mb-1 font-medium">기본 정보</div>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-700">종류</span>
                  <span className="font-semibold">
                    {item.type === ITEM_TYPES.CONSUMABLE ? '소비 아이템' : '장비'}
                  </span>
                </div>
                {item.type === ITEM_TYPES.CONSUMABLE && (
                  <div className="flex justify-between">
                    <span className="text-slate-700">수량</span>
                    <span className="font-semibold">{itemCount}</span>
                  </div>
                )}
                {item.type === ITEM_TYPES.EQUIPMENT && (
                  <div className="flex justify-between">
                    <span className="text-slate-700">슬롯</span>
                    <span className="font-semibold">
                      {item.slot === 'weapon' ? '무기' : 
                       item.slot === 'helmet' ? '투구' :
                       item.slot === 'armor' ? '갑옷' :
                       item.slot === 'boots' ? '신발' :
                       item.slot === 'necklace' ? '목걸이' :
                       item.slot === 'ring' ? '반지' : item.slot}
                    </span>
                  </div>
                )}
                {equippedInfo && (
                  <div className="flex justify-between">
                    <span className="text-slate-700">장착 상태</span>
                    <span className="font-semibold text-yellow-600">
                      {state.units[equippedInfo.citizenId]?.name || '알 수 없음'}에게 장착됨
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* 스탯 정보 (장비만) */}
            {item.type === ITEM_TYPES.EQUIPMENT && item.baseStats && (
              <div className="border rounded-lg p-2">
                <div className="text-xs text-slate-600 mb-1 font-medium">스탯</div>
                <div className="space-y-1 text-xs">
                  {Object.entries(item.baseStats).map(([stat, value]) => (
                    <div key={stat} className="flex justify-between">
                      <span className="text-slate-700">{getStatName(stat)}</span>
                      <span className="font-semibold text-green-600">+{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 특수 능력 (장비만) */}
            {item.type === ITEM_TYPES.EQUIPMENT && item.specialAbilities && item.specialAbilities.length > 0 && (
              <div className="border rounded-lg p-2">
                <div className="text-xs text-slate-600 mb-1 font-medium">특수 능력</div>
                <div className="space-y-1">
                  {item.specialAbilities.map((ability, index) => (
                    <div key={index} className="bg-blue-50 p-1 rounded text-xs">
                      <div className="font-medium text-blue-800">{ability.name}</div>
                      <div className="text-blue-600">{ability.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 설명 */}
            <div className="border rounded-lg p-2">
              <div className="text-xs text-slate-600 mb-1 font-medium">설명</div>
              <div className="text-xs text-slate-700">{item.description}</div>
            </div>
          </div>

          {/* 액션 버튼들 */}
          <div className="mt-3 pt-2 border-t border-slate-200">
            <div className="flex gap-2">
              {item.type === ITEM_TYPES.EQUIPMENT ? (
                <>
                  {equippedInfo ? (
                    <button
                      onClick={handleUnequip}
                      className="flex-1 bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs font-medium"
                    >
                      장착 해제
                    </button>
                  ) : (
                    <button
                      onClick={handleEquip}
                      className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium"
                    >
                      장착
                    </button>
                  )}
                </>
              ) : (
                <button
                  onClick={handleUse}
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium"
                >
                  사용
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 시민 선택 모달 */}
      <CitizenSelectionModal
        isOpen={showCitizenModal}
        onClose={() => {
          console.log('모달 닫기 호출됨');
          setShowCitizenModal(false);
          setModalType('');
        }}
        onSelect={(citizenId) => {
          console.log('모달에서 시민 선택됨:', citizenId);
          handleCitizenSelect(citizenId);
        }}
        title={modalType === 'equip' ? '장비 장착' : '아이템 사용'}
        message={modalType === 'equip' ? '장착할 시민을 선택하세요.' : '효과를 적용할 시민을 선택하세요.'}
      />
    </>
  );
}