import * as THREE from "three";

/**
 * 건설 ETA 라벨 및 시민 이름 라벨 관리 클래스
 * Scene3D에서 라벨 관련 기능을 분리하여 관리
 */
export class LabelManager {
  constructor(scene) {
    this.scene = scene;
    this.labelMap = new Map();
  }

  /**
   * 라벨 스프라이트 생성
   * @param {string} text - 표시할 텍스트
   * @returns {Object} 라벨 객체 (sprite, canvas, ctx, draw, lastText)
   */
  makeLabelSprite(text) {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 96;
    const ctx = canvas.getContext('2d');
    
    const draw = (t) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(16,185,129,0.85)';
      const pad = 8;
      const w = canvas.width - pad * 2;
      const h = 40;
      const y = 28;
      ctx.fillRect(pad, y, w, h);
      ctx.fillStyle = '#0b2';
      ctx.fillRect(pad, y + h - 4, w, 4);
      ctx.font = 'bold 28px sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(t, canvas.width / 2, y + h / 2);
    };
    
    draw(text);
    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false });
    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(3.0, 1.2, 1.0);
    this.scene.add(sprite);
    return { sprite, canvas, ctx, draw, lastText: text };
  }

  /**
   * 건설 라벨 업데이트
   * @param {Object} buildings - 건물 상태 객체
   * @param {Object} units - 유닛 상태 객체
   */
  updateConstructionLabels(buildings, units) {
    // 완료된 라벨 제거
    for (const [id, entry] of Array.from(this.labelMap.entries())) {
      const b = buildings[id];
      if (!b || !b.construct?.active) {
        this.scene.remove(entry.sprite);
        entry.sprite.material.map.dispose();
        entry.sprite.material.dispose();
        this.labelMap.delete(id);
      }
    }
    
    // 활성 건설 라벨 추가/업데이트
    for (const bid in buildings) {
      const b = buildings[bid];
      if (!b) continue;
      
      // 건설 중인 건물의 ETA 표시
      if (b.construct?.active) {
        const eta = Math.max(0, b.construct?.eta || 0);
        const text = `${eta.toFixed(1)}s`;
        let entry = this.labelMap.get(bid);
        
        if (!entry) {
          entry = this.makeLabelSprite(text);
          this.labelMap.set(bid, entry);
        }
        
        if (entry.lastText !== text) {
          entry.draw(text);
          entry.sprite.material.map.needsUpdate = true;
          entry.lastText = text;
        }
        
        const progress = Math.max(0.1, Math.min(1, b.construct?.progress || 0));
        const baseH = 1.0;
        const height = baseH * (0.2 + 0.8 * progress);
        entry.sprite.position.set(b.tile?.x || 0, height + 1.2, b.tile?.z || 0);
      }
      // 완성된 건물의 숨겨진 시민들 표시
      else if (!b.construct?.active) {
        const hiddenWorkers = Object.values(units).filter(u => 
          u.hidden && u.hiddenBuildingId === bid
        );
        
        if (hiddenWorkers.length > 0) {
          // 기존 라벨들 제거
          for (let i = 0; i < 10; i++) { // 최대 10개까지 지원
            const labelKey = `${bid}_worker_${i}`;
            const entry = this.labelMap.get(labelKey);
            if (entry) {
              this.scene.remove(entry.sprite);
              this.labelMap.delete(labelKey);
            }
          }
          
          // 각 시민별로 개별 라벨 생성
          hiddenWorkers.forEach((worker, index) => {
            const labelKey = `${bid}_worker_${index}`;
            const text = worker.name;
            let entry = this.labelMap.get(labelKey);
            
            if (!entry) {
              entry = this.makeLabelSprite(text);
              this.labelMap.set(labelKey, entry);
            }
            
            if (entry.lastText !== text) {
              entry.draw(text);
              entry.sprite.material.map.needsUpdate = true;
              entry.lastText = text;
            }
            
            const baseH = 1.0;
            const height = baseH + (index * 0.5); // 세로로 배치 (간격 증가)
            entry.sprite.position.set(b.tile?.x || 0, height + 1.2, b.tile?.z || 0);
          });
        } else {
          // 숨겨진 시민이 없으면 모든 라벨 제거
          for (let i = 0; i < 10; i++) {
            const labelKey = `${bid}_worker_${i}`;
            const entry = this.labelMap.get(labelKey);
            if (entry) {
              this.scene.remove(entry.sprite);
              this.labelMap.delete(labelKey);
            }
          }
        }
      }
    }
  }

  /**
   * 리소스 정리
   */
  dispose() {
    for (const [id, entry] of Array.from(this.labelMap.entries())) {
      this.scene.remove(entry.sprite);
      entry.sprite.material.map.dispose();
      entry.sprite.material.dispose();
    }
    this.labelMap.clear();
  }
}
