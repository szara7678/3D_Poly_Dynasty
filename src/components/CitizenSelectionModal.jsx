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
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {filteredCitizens.map((citizen) => {
            const equippedItems = getCitizenEquipment(state.warehouse, citizen.id);
            const equippedSlots = Object.keys(equippedItems);
            
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
                  flexDirection: 'column',
                  border: '1px solid #d1d5db',
                  borderRadius: '8px',
                  padding: '12px',
                  fontSize: '14px',
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
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span style={{ fontWeight: '500' }}>{citizen.name}</span>
                  <span style={{ fontSize: '12px', color: '#64748b' }}>
                    HP {citizen.hp || 0}/{citizen.hpMax || 0}
                  </span>
                </div>
                
                {/* 착용 장비 정보 */}
                {equippedSlots.length > 0 && (
                  <div style={{ fontSize: '12px', color: '#64748b', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {equippedSlots.map((slot) => {
                      const itemId = equippedItems[slot];
                      const item = state.warehouse.equipment[itemId];
                      if (!item) return null;
                      
                      const specialAbilitiesCount = item.specialAbilities ? item.specialAbilities.length : 0;
                      const qualityColor = getEquipmentQualityColor(specialAbilitiesCount);
                      
                      // 스탯 정보 표시
                      const statsText = item.baseStats ? 
                        Object.entries(item.baseStats)
                          .map(([stat, value]) => {
                            const statNames = {
                              attack: '공격력',
                              defense: '방어력',
                              health: '체력',
                              STR: '힘',
                              AGI: '민첩',
                              VIT: '체력',
                              INT: '지능'
                            };
                            return `${statNames[stat] || stat}+${value}`;
                          })
                          .join(' ') : '';
                      
                      return (
                        <div key={slot} className={`${qualityColor} font-medium`}>
                          {item.name} ({statsText})
                        </div>
                      );
                    })}
                  </div>
                )}
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
