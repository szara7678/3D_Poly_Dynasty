import * as THREE from "three";
import { BUILDING_DEFS } from "../../game/content/buildings.js";

/**
 * 건물 렌더링 및 인스턴싱 관리 클래스
 * Scene3D에서 건물 관련 기능을 분리하여 관리
 */
export class BuildingManager {
  constructor(scene) {
    this.scene = scene;
    this.buildingMeshes = {};
    this.MAX_PER_TYPE = 128;
    
    // 임시 변수들 (성능 최적화)
    this.tmpM = new THREE.Matrix4();
    this.tmpQ = new THREE.Quaternion();
    this.tmpS = new THREE.Vector3();
    this.tmpP = new THREE.Vector3();
    
    this.initializeBuildingTypes();
  }

  /**
   * 건물 타입별 지오메트리와 재질 정의
   */
  initializeBuildingTypes() {
    const typeDefs = {
      town_hall: { geo: new THREE.BoxGeometry(3.0, 1.8, 3.0), color: '#8b5cf6' },
      farm: { geo: new THREE.BoxGeometry(3.2, 0.3, 3.2), color: '#84cc16' },
      hunter: { geo: new THREE.ConeGeometry(1.0, 1.6, 8), color: '#22c55e' },
      gatherer: { geo: new THREE.CylinderGeometry(0.9, 0.9, 1.2, 10), color: '#14b8a6' },
      mine: { geo: new THREE.BoxGeometry(1.6, 1.4, 1.6), color: '#71717a' },
      barracks: { geo: new THREE.BoxGeometry(2.6, 1.2, 1.6), color: '#ef4444' },
      mage_tower: { geo: new THREE.CylinderGeometry(0.8, 0.8, 2.4, 12), color: '#06b6d4' },
      smithy: { geo: new THREE.BoxGeometry(1.8, 1.0, 1.8), color: '#f59e0b' },
      monster_den: { geo: new THREE.DodecahedronGeometry(1.2, 0), color: '#4b5563' },
    };

    for (const t in typeDefs) {
      const mat = new THREE.MeshStandardMaterial({ 
        color: new THREE.Color(typeDefs[t].color), 
        metalness: 0.02, 
        roughness: 0.9 
      });
      const baseGeo = typeDefs[t].geo.clone();
      const inst = new THREE.InstancedMesh(baseGeo, mat, this.MAX_PER_TYPE);
      inst.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      inst.frustumCulled = false;
      inst.count = 0;
      this.scene.add(inst);
      this.buildingMeshes[t] = inst;
    }
  }

  /**
   * 건물 상태에 따라 렌더링 갱신
   * @param {Object} buildings - 건물 상태 객체
   */
  refreshBuildings(buildings) {
    // 카운트 리셋
    for (const t in this.buildingMeshes) {
      this.buildingMeshes[t].count = 0;
    }
    
    const counter = {};
    for (const t in this.buildingMeshes) counter[t] = 0;
    
    for (const id in buildings) {
      const b = buildings[id];
      const inst = this.buildingMeshes[b.type];
      if (!inst) continue;
      
      const idx = counter[b.type];
      if (idx >= this.MAX_PER_TYPE) continue;
      counter[b.type] = idx + 1;
      
      const x = b.tile?.x || 0;
      const z = b.tile?.z || 0;
      const progress = (b.construct?.active) ? Math.max(0.1, Math.min(1, b.construct.progress || 0)) : 1;
      const baseH = 1.0;
      const height = baseH * (0.2 + 0.8 * progress);
      
      this.tmpP.set(x, height / 2, z);
      this.tmpQ.set(0, 0, 0, 1);
      const sizeMult = 1.0 + 0.05 * (b.level - 1);
      this.tmpS.set(sizeMult, height, sizeMult);
      this.tmpM.compose(this.tmpP, this.tmpQ, this.tmpS);
      inst.setMatrixAt(idx, this.tmpM);
      inst.count = counter[b.type];
      inst.instanceMatrix.needsUpdate = true;
    }
  }

  /**
   * 리소스 정리
   */
  dispose() {
    for (const t in this.buildingMeshes) {
      const inst = this.buildingMeshes[t];
      this.scene.remove(inst);
      inst.geometry.dispose();
      inst.material.dispose();
    }
    this.buildingMeshes = {};
  }
}
