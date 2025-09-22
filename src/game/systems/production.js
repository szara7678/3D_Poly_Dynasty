import { state, setRes, addMonster, uid } from "../state";
import { BUILDING_DEFS } from "../content/buildings";
import { handleProductionPractice } from "./skillTraining";
import { createRandomGoblin } from "../content/goblins";
import { setGoblinHomeNest } from "./simpleMonsterSystem";
import { monsterNestManager } from "./monsterNestManager";

// 생산 시스템 - 시민별 개별 생산 진행률 및 재능에 따른 확률적 수련치 상승
export function runProduction(){
  for(const id in state.buildings){
    const b = state.buildings[id]; 
    const def = BUILDING_DEFS[b.type]; 
    if(!def || (!def.produces && !def.trains) || !b.workers?.length) continue;
    
    const workers = b.workers.map(wid => state.units[wid]).filter(Boolean);
    const hiddenWorkers = workers.filter(w => w.hidden && w.hiddenBuildingId === id);
    
    // 숨겨진 시민들만 생산에 참여
    if(hiddenWorkers.length === 0) continue;
    
    const skillKey = def.skill;
    const levelMult = 1 + 0.08*(b.level-1);
    
    // 각 숨겨진 시민별로 개별 생산/수련 처리
    for(const worker of hiddenWorkers) {
      // 시민별 생산 진행률 초기화
      if(!worker.production) {
        worker.production = {};
        
        // 생산품 처리
        if(def.produces) {
          for(const resourceKey in def.produces) {
            worker.production[resourceKey] = { 
              progress: 0, 
              time: def.produces[resourceKey].time,
              startTime: Date.now() // 숨겨진 시점 기록
            };
          }
        }
        
        // 수련 처리
        if(def.trains) {
          for(const skillKey in def.trains) {
            worker.production[`train_${skillKey}`] = { 
              progress: 0, 
              time: def.trains[skillKey].time,
              startTime: Date.now() // 숨겨진 시점 기록
            };
          }
        }
      }
      
      // 생산품 처리
      if(def.produces) {
        for(const resourceKey in def.produces) {
          const prodDef = def.produces[resourceKey];
          const prodState = worker.production[resourceKey];
          
          if(!prodState) continue;
          
          // 개별 시민의 생산 효율 계산
          const talent = (worker.talents?.[skillKey]||0)/10; // 재능 0~10 범위
          const practice = Math.max(0, Math.min(500, (worker.practice?.[skillKey]||0))); // 수련치 0~500 범위
          const practiceBonus = practice * 0.04;
          
          const { STR=0,AGI=0,VIT=0,INT=0 } = worker.stats||{};
          
          // 스킬별 관련 스탯 보너스
          let relevantStatBonus = 0;
          switch(skillKey) {
            case 'Farming': relevantStatBonus = VIT * 0.05; break; // 농사 - 체력
            case 'Woodcutting': relevantStatBonus = (STR + VIT) * 0.03; break; // 벌목 - 힘+체력
            case 'Gathering': relevantStatBonus = AGI * 0.05; break; // 채집 - 민첩
            case 'Mining': relevantStatBonus = (STR + VIT) * 0.03; break; // 광부 - 힘+체력
            case 'Sword': relevantStatBonus = (STR + AGI + VIT) * 0.02; break; // 전사 - 힘+민첩+체력
            case 'Magic': relevantStatBonus = INT * 0.05; break; // 마법 - 지력
            case 'Smithing': relevantStatBonus = (STR + VIT) * 0.03; break; // 대장장이 - 힘+체력
            case 'Admin': relevantStatBonus = (INT + AGI) * 0.03; break; // 행정 - 지력+민첩
          }
          
          const statBonus = (STR*0.02 + AGI*0.01 + VIT*0.02 + INT*0.03)/100;
          
          const efficiency = levelMult + talent*0.4 + practiceBonus + statBonus + relevantStatBonus;
          
          // 인구수 배율: 마을 회관에서만 적용
          const populationMultiplier = (b.type === 'town_hall') ? Math.max(1, state.population * 0.1) : 1;
          const finalEfficiency = efficiency * populationMultiplier;
          
          // 생산 진행률 증가 (몬스터 생산은 고정 속도, 일반 자원은 효율 적용)
          const progressIncrement = (resourceKey === 'goblin' || resourceKey === 'orc') 
            ? 0.5 / prodState.time // 몬스터는 고정 속도
            : (0.5 / prodState.time) * finalEfficiency; // 일반 자원은 효율 적용
          prodState.progress += progressIncrement;
          
          // 생산 완료 체크
          if(prodState.progress >= 1.0) {
            const amount = (resourceKey === 'goblin' || resourceKey === 'orc') 
              ? prodDef.base // 몬스터는 고정 생산량
              : Math.floor(prodDef.base * finalEfficiency); // 일반 자원은 효율 적용
            if(amount > 0) {
              // 몬스터 생산 처리
              if(resourceKey === 'goblin' || resourceKey === 'orc') {
                // 몬스터 군락지 매니저를 사용하여 몬스터 생산
                const newMonster = monsterNestManager.produceMonster(b.id);
                
                if (newMonster && typeof window !== 'undefined' && window.__INSU_DEBUG_LOG__) {
                  console.log(`${worker.name}이(가) 몬스터 ${newMonster.name} 생산 완료!`, newMonster.stats, `홈 군락지: ${b.id}`);
                }
                
                // 몬스터 생산 표시 생성
                if (typeof window !== 'undefined' && window.__INSU_THREE_REF__?.resourceDisplayManager) {
                  const buildingPosition = {
                    x: b.tile?.x || 0,
                    y: b.tile?.y || 0,
                    z: b.tile?.z || 0
                  };
                  window.__INSU_THREE_REF__.resourceDisplayManager.createResourceDisplay(resourceKey, 1, buildingPosition);
                }
              } else {
                // 일반 자원 생산
                setRes({ [resourceKey]: amount });
                if (typeof window !== 'undefined' && window.__INSU_DEBUG_LOG__) {
                  console.log(`${worker.name}이(가) ${resourceKey} ${amount}개 생산 완료! (효율: ${finalEfficiency.toFixed(2)}, 인구배율: ${populationMultiplier.toFixed(2)})`);
                }
                
                // 자원 표시 생성 (건물 위에 올라가면서 사라지는 애니메이션)
                if (typeof window !== 'undefined' && window.__INSU_THREE_REF__?.resourceDisplayManager) {
                  const buildingPosition = {
                    x: b.tile?.x || 0,
                    y: b.tile?.y || 0,
                    z: b.tile?.z || 0
                  };
                  window.__INSU_THREE_REF__.resourceDisplayManager.createResourceDisplay(resourceKey, amount, buildingPosition);
                }
              }
              
              // 생산으로 인한 수련치 상승 처리
              handleProductionPractice(worker, skillKey);
              
              // 건물 경험치 증가 (생산 완료 시에만)
              if (!b.xp) b.xp = 0;
              b.xp += Math.floor(amount * 1); // 생산량의 2배만큼 경험치
            }
            
            // 생산 완료 후 진행률 리셋 (다음 생산 사이클 시작)
            prodState.progress = 0;
            prodState.startTime = Date.now(); // 새로운 생산 시작 시간 기록
          }
        }
      }
      
      // 수련 처리
      if(def.trains) {
        for(const trainSkillKey in def.trains) {
          const trainDef = def.trains[trainSkillKey];
          const trainState = worker.production[`train_${trainSkillKey}`];
          
          if(!trainState) continue;
          
          // 수련 진행률 증가 (고정 속도)
          const progressIncrement = 0.5 / trainState.time; // 0.5초 틱 기준
          trainState.progress += progressIncrement;
          
          // 수련 완료 체크
          if(trainState.progress >= 1.0) {
            if (typeof window !== 'undefined' && window.__INSU_DEBUG_LOG__) {
              console.log(`${worker.name}이(가) ${trainSkillKey} 수련 완료!`);
            }
            
            // 수련으로 인한 수련치 상승 처리
            handleProductionPractice(worker, trainSkillKey);
            
            // 건물 경험치 증가 (수련 완료 시에만)
            if (!b.xp) b.xp = 0;
            b.xp += 2; // 수련 완료 시 고정 경험치
            
            // 수련 완료 후 진행률 리셋
            trainState.progress = 0;
            trainState.startTime = Date.now();
          }
        }
      }
    }
  }
}


