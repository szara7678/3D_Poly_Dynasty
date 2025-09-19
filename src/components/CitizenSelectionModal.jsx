import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { state, subscribe } from '../game/state';
import { getCitizenEquipment } from '../game/systems/warehouse';
import { getEquipmentQualityColor } from '../game/content/items';

export default function CitizenSelectionModal({ isOpen, onClose, onSelect, title, message }) {
  const [, force] = React.useReducer(x => x + 1, 0);
  const [searchTerm, setSearchTerm] = useState('');

  React.useEffect(() => {
    const unsub = subscribe(() => force());
    return unsub;
  }, []);

  if (!isOpen) return null;

  const allCitizens = Object.values(state.units);
  const filteredCitizens = allCitizens.filter(citizen => 
    citizen.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return createPortal(
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 2147483647,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div 
        style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          padding: '20px',
          width: '400px',
          maxHeight: '80vh',
          overflowY: 'auto',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-slate-800">{title}</h3>
          <button
            onMouseDown={(e) => {
              console.log('모달 닫기 버튼 클릭');
              e.stopPropagation();
              e.preventDefault();
              onClose();
            }}
            className="text-slate-400 hover:text-slate-600 text-xl"
          >
            ✕
          </button>
        </div>
        
        <p className="text-slate-600 mb-4">{message}</p>
        
        {/* 검색 입력 */}
        <div style={{ marginBottom: '16px' }}>
          <input
            type="text"
            placeholder="시민 이름으로 검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '8px 12px',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              fontSize: '14px',
              outline: 'none'
            }}
          />
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
          {filteredCitizens.map((citizen) => {
            const equippedItems = getCitizenEquipment(state.warehouse, citizen.id);
            
            // 시민의 소속 건물 정보 가져오기
            const getCitizenBuilding = (citizenId) => {
              for (const [buildingId, building] of Object.entries(state.buildings)) {
                if (building.assignedUnits && building.assignedUnits.includes(citizenId)) {
                  return building.name || building.type;
                }
              }
              return '무소속';
            };
            
            const buildingName = getCitizenBuilding(citizen.id);
            
            // 현재 장착할 장비의 부위 정보 가져오기 (ItemInspector에서 전달받은 아이템 정보)
            const getCurrentItemSlot = () => {
              const selectedItemId = state.ui.selectedItemId;
              if (selectedItemId && state.warehouse.equipment[selectedItemId]) {
                return state.warehouse.equipment[selectedItemId].slot;
              }
              return null;
            };
            
            const currentSlot = getCurrentItemSlot();
            const equippedItemInSlot = currentSlot ? equippedItems[currentSlot] : null;
            const equippedItem = equippedItemInSlot ? state.warehouse.equipment[equippedItemInSlot] : null;
            
            return (
              <button
                key={citizen.id}
                onMouseDown={(e) => {
                  console.log('시민 선택 버튼 클릭:', citizen.id, citizen.name);
                  e.stopPropagation();
                  e.preventDefault();
                  onSelect(citizen.id);
                }}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  padding: '5px 8px',
                  fontSize: '11px',
                  backgroundColor: '#f0fdf4',
                  borderColor: '#bbf7d0',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#dcfce7';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#f0fdf4';
                }}
              >
                {/* 왼쪽: 시민 이름 + 소속 배지 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontWeight: '500', fontSize: '12px' }}>{citizen.name}</span>
                  <span style={{ 
                    fontSize: '9px', 
                    backgroundColor: '#e2e8f0', 
                    color: '#475569',
                    padding: '1px 4px', 
                    borderRadius: '3px',
                    fontWeight: '500'
                  }}>
                    {buildingName}
                  </span>
                </div>
                
                {/* 오른쪽: 장착 중인 같은 부위 장비 정보 */}
                <div style={{ fontSize: '10px', color: '#64748b' }}>
                  {equippedItem ? (
                    <span style={{ fontWeight: '500' }}>{equippedItem.name}</span>
                  ) : (
                    <span style={{ color: '#94a3b8' }}>
                      {currentSlot === 'weapon' ? '무기' :
                       currentSlot === 'helmet' ? '투구' :
                       currentSlot === 'armor' ? '갑옷' :
                       currentSlot === 'boots' ? '신발' :
                       currentSlot === 'necklace' ? '목걸이' :
                       currentSlot === 'ring' ? '반지' : '장비'} 없음
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
        
        {filteredCitizens.length === 0 && (
          <div style={{ textAlign: 'center', color: '#94a3b8', padding: '16px 0' }}>
            {searchTerm ? '검색 결과가 없습니다.' : '선택할 수 있는 시민이 없습니다.'}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
