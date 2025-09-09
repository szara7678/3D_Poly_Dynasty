import * as THREE from "three";
import { BUILDING_DEFS } from "../../game/content/buildings.js";

/**
 * 선택 링 관리 클래스
 * Scene3D에서 선택된 건물/유닛의 링 표시 기능을 분리하여 관리
 */
export class SelectionRingManager {
  constructor(scene) {
    this.scene = scene;
    this.selectionRing = null;
  }

  /**
   * 선택 링 업데이트
   * @param {Object} buildings - 건물 상태 객체
   * @param {Object} units - 유닛 상태 객체
   * @param {string} selectedBuildingId - 선택된 건물 ID
   * @param {string} selectedUnitId - 선택된 유닛 ID
   */
  updateSelectionRing(buildings, units, selectedBuildingId, selectedUnitId) {
    if (selectedBuildingId) {
      const b = buildings[selectedBuildingId];
      if (b) {
        this.showBuildingRing(b);
        return;
      }
    }
    
    if (selectedUnitId) {
      const u = units[selectedUnitId];
      if (u) {
        this.showUnitRing(u);
        return;
      }
    }
    
    // 선택된 것이 없으면 링 숨기기
    if (this.selectionRing) {
      this.selectionRing.visible = false;
    }
  }

  /**
   * 건물 선택 링 표시
   * @param {Object} building - 건물 객체
   */
  showBuildingRing(building) {
    if (!this.selectionRing) {
      this.createSelectionRing();
    }
    
    const r = Math.max(1.2, (BUILDING_DEFS[building.type]?.placeRadius || 1.2));
    const newGeo = new THREE.RingGeometry(Math.max(0, r - 0.12), r + 0.12, 64);
    newGeo.rotateX(-Math.PI / 2);
    this.selectionRing.geometry.dispose();
    this.selectionRing.geometry = newGeo;
    this.selectionRing.position.set(building.tile?.x || 0, 0.03, building.tile?.z || 0);
    this.selectionRing.visible = true;
  }

  /**
   * 유닛 선택 링 표시
   * @param {Object} unit - 유닛 객체
   */
  showUnitRing(unit) {
    if (!this.selectionRing) {
      this.createSelectionRing();
    }
    
    const newGeo = new THREE.RingGeometry(Math.max(0, 0.7 - 0.06), 0.9 + 0.06, 64);
    newGeo.rotateX(-Math.PI / 2);
    this.selectionRing.geometry.dispose();
    this.selectionRing.geometry = newGeo;
    this.selectionRing.position.set(unit.pos?.x || 0, 0.03, unit.pos?.z || 0);
    this.selectionRing.visible = true;
  }

  /**
   * 선택 링 생성
   */
  createSelectionRing() {
    const g = new THREE.RingGeometry(1.2, 1.35, 48);
    g.rotateX(-Math.PI / 2);
    const m = new THREE.MeshBasicMaterial({ 
      color: 0x3b82f6, 
      transparent: true, 
      opacity: 0.85, 
      side: THREE.DoubleSide 
    });
    const ring = new THREE.Mesh(g, m);
    ring.position.y = 0.03;
    this.scene.add(ring);
    this.selectionRing = ring;
  }

  /**
   * 리소스 정리
   */
  dispose() {
    if (this.selectionRing) {
      this.scene.remove(this.selectionRing);
      this.selectionRing.geometry.dispose();
      this.selectionRing.material.dispose();
      this.selectionRing = null;
    }
  }
}
