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
   * @param {number} progress - 생산 진행률 (0-1)
   * @returns {Object} 라벨 객체 (sprite, canvas, ctx, draw, lastText, lastProgress)
   */
  makeLabelSprite(text, progress = 0) {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 96;
    const ctx = canvas.getContext('2d');
    
    const draw = (t, prog = 0) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // 배경
      ctx.fillStyle = 'rgba(16,185,129,0.85)';
      const pad = 8;
      const w = canvas.width - pad * 2;
      const h = 40;
      const y = 28;
      ctx.fillRect(pad, y, w, h);
      
      // 생산 진행률 바 (배경)
      ctx.fillStyle = 'rgba(0,0,0,0.3)';
      ctx.fillRect(pad, y + h - 8, w, 8);
      
      // 생산 진행률 바 (진행된 부분)
      if(prog > 0) {
        ctx.fillStyle = '#4ade80'; // 밝은 녹색
        ctx.fillRect(pad, y + h - 8, w * prog, 8);
      }
      
      // 텍스트
      ctx.font = 'bold 28px sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(t, canvas.width / 2, y + h / 2);
    };
    
    draw(text, progress);
    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, depthTest: true });
    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(3.0, 1.2, 1.0);
    this.scene.add(sprite);
    return { sprite, canvas, ctx, draw, lastText: text, lastProgress: progress };
  }

  /**
   * 건설 라벨 업데이트
   * @param {Object} buildings - 건물 상태 객체
   * @param {Object} units - 유닛 상태 객체
   */
  updateConstructionLabels(buildings, units) {
    // 1) 건설 라벨: 존재하지 않거나 비활성화된 라벨 정리
    for (const [key, entry] of Array.from(this.labelMap.entries())) {
      // 건설 라벨은 key가 빌딩 id 그 자체
      const b = buildings[key];
      if (!b || !b.construct?.active) {
        // 건설 라벨만 정리 (worker 라벨은 아래에서 별도 처리)
        if (!key.includes('_worker_')) {
          this.scene.remove(entry.sprite);
          entry.sprite.material.map.dispose();
          entry.sprite.material.dispose();
          this.labelMap.delete(key);
        }
      }
    }

    // 1.5) 삭제된 건물의 worker 라벨들 정리
    for (const [key, entry] of Array.from(this.labelMap.entries())) {
      if (key.includes('_worker_')) {
        const buildingId = key.split('_worker_')[0];
        const b = buildings[buildingId];
        if (!b) {
          // 건물이 삭제된 경우 해당 건물의 모든 worker 라벨 제거
          this.scene.remove(entry.sprite);
          entry.sprite.material.map.dispose();
          entry.sprite.material.dispose();
          this.labelMap.delete(key);
        }
      }
    }

    // 2) 활성 건설 라벨 갱신/추가
    for (const bid in buildings) {
      const b = buildings[bid];
      if (!b) continue;
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
        // 원거리 라벨 숨김(간단 LOD)
        const cam = this.scene?.userData?.camera || this.scene?.camera;
        const dx = (b.tile?.x || 0) - (cam?.position?.x || 0);
        const dz = (b.tile?.z || 0) - (cam?.position?.z || 0);
        const d2 = dx*dx + dz*dz;
        entry.sprite.visible = d2 < 120*120;
        entry.sprite.position.set(b.tile?.x || 0, height + 1.2, b.tile?.z || 0);
      }
    }

    // 3) 유닛을 한 번만 순회하여 빌딩별 숨김 근로자 그룹화
    const hiddenByBuilding = new Map();
    for (const uid in units) {
      const u = units[uid];
      if (!u || !u.hidden || !u.hiddenBuildingId) continue;
      const arr = hiddenByBuilding.get(u.hiddenBuildingId) || [];
      arr.push(u);
      hiddenByBuilding.set(u.hiddenBuildingId, arr);
    }

    // 4) 각 빌딩별 worker 라벨 생성/갱신 및 불필요한 라벨 정리
    for (const bid in buildings) {
      const b = buildings[bid]; if (!b || b.construct?.active) continue;
      const hiddenWorkers = hiddenByBuilding.get(bid) || [];

      // 먼저 기존 worker 라벨 중 남지 않는 인덱스 제거
      // 최대 64명까지 안전 처리
      for (let i = hiddenWorkers.length; i < 64; i++) {
        const labelKey = `${bid}_worker_${i}`;
        const entry = this.labelMap.get(labelKey);
        if (entry) {
          this.scene.remove(entry.sprite);
          this.labelMap.delete(labelKey);
        }
      }

      for (let index = 0; index < hiddenWorkers.length; index++) {
        const worker = hiddenWorkers[index];
        const labelKey = `${bid}_worker_${index}`;
        const text = worker.name;
        // 진행률 계산(해당 시민의 production 중 가장 큰 progress)
        let workerProgress = 0;
        const prod = worker.production;
        if (prod) {
          for (const k in prod) {
            const st = prod[k];
            if (st && st.progress > workerProgress) workerProgress = st.progress;
          }
        }
        let entry = this.labelMap.get(labelKey);
        if (!entry) {
          entry = this.makeLabelSprite(text, workerProgress);
          this.labelMap.set(labelKey, entry);
        }
        if (entry.lastText !== text || entry.lastProgress !== workerProgress) {
          entry.draw(text, workerProgress);
          entry.sprite.material.map.needsUpdate = true;
          entry.lastText = text;
          entry.lastProgress = workerProgress;
        }
        const baseH = 1.0;
        const height = baseH + (index * 0.5);
        const cam = this.scene?.userData?.camera || this.scene?.camera;
        const dx = (b.tile?.x || 0) - (cam?.position?.x || 0);
        const dz = (b.tile?.z || 0) - (cam?.position?.z || 0);
        const d2 = dx*dx + dz*dz;
        entry.sprite.visible = d2 < 120*120;
        entry.sprite.position.set(b.tile?.x || 0, height + 1.2, b.tile?.z || 0);
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
