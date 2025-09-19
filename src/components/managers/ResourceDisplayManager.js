import * as THREE from "three";

/**
 * 건물 생산 완료 시 자원 이모지와 생산량을 표시하는 매니저
 * 건물 위에 올라가면서 사라지는 애니메이션 효과를 제공
 */
export class ResourceDisplayManager {
  constructor(scene) {
    this.scene = scene;
    this.activeDisplays = new Map(); // 활성 표시 객체들을 관리
    this.resourceEmojis = {
      wood: '🪵',
      ore: '🪨', 
      food: '🍞',
      gold: '💰',
      herb: '🌿',
      iron: '⚒️',
      gems: '💎',
      cloth: '🧵',
      leather: '🦌',
      potions: '🧪',
      books: '📚',
      tools: '🔧',
      weapons: '⚔️',
      armor: '🛡️',
      magic: '✨',
      research: '🔬'
    };
  }

  /**
   * 자원 표시 스프라이트 생성
   * @param {string} resourceKey - 자원 키
   * @param {number} amount - 생산량
   * @param {Object} buildingPosition - 건물 위치 {x, y, z}
   * @returns {Object} 표시 객체
   */
  createResourceDisplay(resourceKey, amount, buildingPosition) {
    const emoji = this.resourceEmojis[resourceKey] || '📦';
    const text = `${emoji} +${amount}`;
    
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // 텍스트만 표시 (배경 없음)
      ctx.font = 'bold 48px sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 2;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.strokeText(text, canvas.width / 2, canvas.height / 2);
      ctx.fillText(text, canvas.width / 2, canvas.height / 2);
    };
    
    draw();
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    const material = new THREE.SpriteMaterial({ 
      map: texture, 
      transparent: true, 
      depthWrite: false, 
      depthTest: true 
    });
    
    const sprite = new THREE.Sprite(material);
    sprite.scale.set(3.0, 1.0, 1.0);
    
    // 건물 위에 위치 설정
    sprite.position.set(
      buildingPosition.x, 
      buildingPosition.y + 2.5, 
      buildingPosition.z
    );
    
    this.scene.add(sprite);
    
    // 애니메이션 상태 초기화
    const displayId = `${Date.now()}_${Math.random()}`;
    const display = {
      id: displayId,
      sprite,
      texture,
      material,
      startTime: Date.now(),
      startY: buildingPosition.y + 2.5,
      targetY: buildingPosition.y + 4.0, // 위로 올라갈 목표 높이
      duration: 2000, // 2초 동안 표시
      fadeStartTime: 1000 // 1초 후부터 페이드 아웃 시작
    };
    
    this.activeDisplays.set(displayId, display);
    return display;
  }

  /**
   * 활성 표시들의 애니메이션 업데이트
   */
  updateDisplays() {
    const currentTime = Date.now();
    
    for (const [id, display] of Array.from(this.activeDisplays.entries())) {
      const elapsed = currentTime - display.startTime;
      const progress = Math.min(elapsed / display.duration, 1);
      
      if (progress >= 1) {
        // 애니메이션 완료 - 표시 제거
        this.removeDisplay(id);
        continue;
      }
      
      // Y 위치 애니메이션 (위로 올라가기)
      const yProgress = Math.min(elapsed / display.duration, 1);
      const currentY = display.startY + (display.targetY - display.startY) * yProgress;
      display.sprite.position.y = currentY;
      
      // 페이드 아웃 효과
      if (elapsed >= display.fadeStartTime) {
        const fadeProgress = (elapsed - display.fadeStartTime) / (display.duration - display.fadeStartTime);
        const alpha = Math.max(0, 1 - fadeProgress);
        display.material.opacity = alpha;
      }
    }
  }

  /**
   * 특정 표시 제거
   * @param {string} displayId - 제거할 표시의 ID
   */
  removeDisplay(displayId) {
    const display = this.activeDisplays.get(displayId);
    if (display) {
      this.scene.remove(display.sprite);
      display.texture.dispose();
      display.material.dispose();
      this.activeDisplays.delete(displayId);
    }
  }

  /**
   * 모든 표시 제거
   */
  clearAllDisplays() {
    for (const [id, display] of Array.from(this.activeDisplays.entries())) {
      this.scene.remove(display.sprite);
      display.texture.dispose();
      display.material.dispose();
    }
    this.activeDisplays.clear();
  }

  /**
   * 리소스 정리
   */
  dispose() {
    this.clearAllDisplays();
  }
}
