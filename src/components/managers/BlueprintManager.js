import * as THREE from "three";
import { BUILDING_DEFS } from "../../game/content/buildings.js";
import { terrain } from "../../world/terrain.js";

/**
 * 청사진 시스템 관리 클래스
 * 건물 배치 시 맵 중앙에 청사진을 생성하고 드래그로 위치 조정
 */
export class BlueprintManager {
  constructor(scene) {
    this.scene = scene;
    this.blueprintMesh = null;
    this.blueprintType = null;
    this.isDragging = false;
    this.dragOffset = new THREE.Vector3();
    this.isValidPlacement = false;
    
    // 청사진 위치 (맵 중앙에서 시작)
    this.blueprintPosition = new THREE.Vector3(0, 0, 0);
  }

  /**
   * 청사진 생성
   * @param {string} buildingType - 건물 타입
   * @param {THREE.Camera} camera - 카메라 객체
   */
  createBlueprint(buildingType, camera) {
    this.clearBlueprint();
    
    const def = BUILDING_DEFS[buildingType];
    if (!def) return;

    this.blueprintType = buildingType;
    
    // 건물 타입에 따른 지오메트리 생성 (실제 건물 메쉬 사용)
    const geometry = this.createBuildingGeometry(buildingType);
    
    // 청사진 재질 (파란색, 반투명, 솔리드)
    const material = new THREE.MeshBasicMaterial({
      color: 0x3b82f6, // 파란색
      transparent: true,
      opacity: 0.8, // 투명도를 높여서 더 잘 보이게
      wireframe: false, // 솔리드로 변경
      side: THREE.DoubleSide
    });

    this.blueprintMesh = new THREE.Mesh(geometry, material);
    
    // 카메라 중앙에 위치 설정 (카메라가 보고 있는 지점)
    if (camera) {
      // 카메라 위치에서 앞쪽으로 일정 거리 떨어진 지점 계산
      const cameraDirection = new THREE.Vector3();
      camera.getWorldDirection(cameraDirection);
      
      // 카메라 위치에서 앞쪽으로 10 단위 떨어진 지점
      const targetPosition = camera.position.clone().add(cameraDirection.multiplyScalar(10));
      
      // 지면과의 교차점 계산 (y=0 평면)
      const groundY = terrain.groundHeight(targetPosition.x, targetPosition.z);
      this.blueprintPosition.set(targetPosition.x, groundY, targetPosition.z);
    } else {
      // 카메라가 없으면 맵 중앙 사용
      this.blueprintPosition.set(0, 0, 0);
    }
    
    this.updateBlueprintPosition();
    this.scene.add(this.blueprintMesh);
  }

  /**
   * 건물 타입에 따른 지오메트리 생성
   */
  createBuildingGeometry(buildingType) {
    const typeDefs = {
      town_hall: new THREE.BoxGeometry(3.0, 1.8, 3.0),
      farm: new THREE.BoxGeometry(3.2, 0.3, 3.2),
      woodcutter: new THREE.ConeGeometry(1.0, 1.6, 8),
      gatherer: new THREE.CylinderGeometry(0.9, 0.9, 1.2, 10),
      mine: new THREE.BoxGeometry(1.6, 1.4, 1.6),
      barracks: new THREE.BoxGeometry(2.6, 1.2, 1.6),
      mage_tower: new THREE.CylinderGeometry(0.8, 0.8, 2.4, 12),
      smithy: new THREE.BoxGeometry(1.8, 1.0, 1.8),
    };

    return typeDefs[buildingType] || new THREE.BoxGeometry(1.2, 1.2, 1.2);
  }

  /**
   * 외부에서 청사진의 XZ 위치를 지정하고 즉시 위치를 갱신한다
   * @param {number} x
   * @param {number} z
   */
  setPositionXZ(x, z) {
    if (!this.blueprintMesh) return;
    this.blueprintPosition.set(x, 0, z);
    this.updateBlueprintPosition();
  }

  /**
   * 청사진 위치 업데이트
   */
  updateBlueprintPosition() {
    if (!this.blueprintMesh) return;

    // 지형 높이 계산
    const groundY = terrain.groundHeight(this.blueprintPosition.x, this.blueprintPosition.z);
    const blueprintY = groundY + 0.1; // 지면 위 0.1 높이 (거의 지면에 붙여서)

    this.blueprintMesh.position.set(
      this.blueprintPosition.x,
      blueprintY,
      this.blueprintPosition.z
    );
  }

  /**
   * 청사진 드래그 시작
   * @param {THREE.Vector3} hitPoint - 클릭 위치
   */
  startDrag(hitPoint) {
    if (!this.blueprintMesh) return;
    
    this.isDragging = true;
    this.dragOffset.subVectors(this.blueprintPosition, hitPoint);
  }

  /**
   * 청사진 드래그 업데이트
   * @param {THREE.Vector3} hitPoint - 마우스 위치
   * @param {boolean} isValidPlacement - 배치 유효성
   */
  updateDrag(hitPoint, isValidPlacement) {
    if (!this.isDragging || !this.blueprintMesh) return;

    // 드래그 오프셋 적용
    this.blueprintPosition.copy(hitPoint).add(this.dragOffset);
    this.updateBlueprintPosition();

    // 배치 유효성에 따른 색상 변경
    this.setValidity(isValidPlacement);
  }

  /**
   * 청사진 드래그 종료
   */
  endDrag() {
    this.isDragging = false;
    this.dragOffset.set(0, 0, 0);
  }

  /**
   * 배치 유효성 색상/상태만 갱신
   * @param {boolean} isValidPlacement
   */
  setValidity(isValidPlacement){
    this.isValidPlacement = !!isValidPlacement;
    if (this.blueprintMesh && this.blueprintMesh.material) {
      this.blueprintMesh.material.color.set(this.isValidPlacement ? 0x3b82f6 : 0xef4444);
    }
  }

  /**
   * 청사진 제거
   */
  clearBlueprint() {
    if (this.blueprintMesh) {
      this.scene.remove(this.blueprintMesh);
      this.blueprintMesh.geometry.dispose();
      this.blueprintMesh.material.dispose();
      this.blueprintMesh = null;
    }
    this.blueprintType = null;
    this.isDragging = false;
    this.dragOffset.set(0, 0, 0);
    this.isValidPlacement = false;
  }

  /**
   * 현재 청사진 위치 반환
   */
  getBlueprintPosition() {
    return this.blueprintPosition.clone();
  }

  /**
   * 현재 청사진 타입 반환
   */
  getBlueprintType() {
    return this.blueprintType;
  }

  /**
   * 배치 유효성 반환
   */
  getIsValidPlacement() {
    return this.isValidPlacement;
  }

  /**
   * 리소스 정리
   */
  dispose() {
    this.clearBlueprint();
  }
}
