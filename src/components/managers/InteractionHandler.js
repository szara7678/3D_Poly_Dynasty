import * as THREE from "three";
import { BUILDING_DEFS } from "../../game/content/buildings.js";
import { terrain } from "../../world/terrain.js";
import { 
  spend, 
  uid, 
  addBuilding, 
  idleUnits, 
  assignUnitToBuilding, 
  setPlacing, 
  setSelectedBuilding, 
  setSelectedUnit, 
  setUnitMoveTarget 
} from "../../game/state.js";

/**
 * 마우스 상호작용 처리 클래스
 * Scene3D에서 마우스 이벤트 처리 기능을 분리하여 관리
 */
export class InteractionHandler {
  constructor(renderer, camera, scene, threeRef, state) {
    this.renderer = renderer;
    this.camera = camera;
    this.scene = scene;
    this.threeRef = threeRef;
    this.state = state;
    
    this.raycaster = new THREE.Raycaster();
    this.pointer = new THREE.Vector2();
    this.plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    
    this.setupEventListeners();
  }

  /**
   * 화면 좌표를 정규화된 장치 좌표로 변환하고 레이 설정
   */
  setPointerFromEvent(e) {
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    this.pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    this.raycaster.setFromCamera(this.pointer, this.camera);
  }

  /**
   * 지면(지형 메쉬 우선, 실패 시 y=0 평면)에 대한 교차점을 반환
   */
  getGroundIntersection(e) {
    this.setPointerFromEvent(e);
    const terrainMesh = this.threeRef.current?.terrainMesh;
    if (terrainMesh) {
      const hits = this.raycaster.intersectObject(terrainMesh, true);
      if (hits && hits.length > 0) {
        return hits[0].point.clone();
      }
    }
    const p = new THREE.Vector3();
    this.raycaster.ray.intersectPlane(this.plane, p);
    return p;
  }

  /**
   * 이벤트 리스너 설정
   */
  setupEventListeners() {
    this.renderer.domElement.addEventListener('mousemove', this.onMove.bind(this));
    this.renderer.domElement.addEventListener('click', this.onClick.bind(this));
    this.renderer.domElement.addEventListener('dblclick', this.onPick.bind(this));
    this.renderer.domElement.addEventListener('contextmenu', this.preventCtx.bind(this));
    this.renderer.domElement.addEventListener('mouseup', this.onMouseUp.bind(this));
  }

  /**
   * 컨텍스트 메뉴 방지
   */
  preventCtx(e) {
    e.preventDefault();
  }

  /**
   * 마우스 이동 이벤트 처리
   */
  onMove(e) {
    if (!this.state.ui.placing) return;
    const hit = this.getGroundIntersection(e);
    
    const ghostMesh = this.threeRef.current?.ghostMesh;
    if (ghostMesh) {
      const isValidPlacement = this.checkPlacementValidity(hit);
      this.updateGhostMesh(ghostMesh, hit, isValidPlacement);
      this.updateTownRangeColors(isValidPlacement);
    }
  }

  /**
   * 배치 유효성 체크
   * @param {THREE.Vector3} hit - 클릭 위치
   * @returns {boolean} 배치 가능 여부
   */
  checkPlacementValidity(hit) {
    const placingType = this.state.ui.placing;
    const halls = Object.values(this.state.buildings).filter(b => b.type === "town_hall" && !b.construct?.active);
    
    if (placingType !== 'town_hall') {
      if (halls.length === 0) return false;
      
      let insideAny = false;
      for (const h of halls) {
        const r = (30 + 10 * ((h.level || 1) - 1));
        const cx = h.tile?.x || 0;
        const cz = h.tile?.z || 0;
        const d = Math.hypot(hit.x - cx, hit.z - cz);
        if (d <= r) {
          insideAny = true;
          break;
        }
      }
      if (!insideAny) return false;
    }
    
    // 다른 건물과 겹침 체크
    const defPlace = BUILDING_DEFS[placingType];
    const minDist = Math.max(1.5, defPlace?.placeRadius || 2.0);
    
    for (const id in this.state.buildings) {
      const b = this.state.buildings[id];
      const otherDefP = BUILDING_DEFS[b.type];
      const otherR = Math.max(1.5, otherDefP?.placeRadius || 2.0);
      const dx = (b.tile?.x || 0) - hit.x;
      const dz = (b.tile?.z || 0) - hit.z;
      if ((dx * dx + dz * dz) < ((minDist + otherR) * (minDist + otherR))) {
        return false;
      }
    }
    
    return true;
  }

  /**
   * 고스트 메쉬 업데이트
   */
  updateGhostMesh(ghostMesh, hit, isValidPlacement) {
    const placingType = this.state.ui.placing;
    const defPlace = BUILDING_DEFS[placingType];
    
    ghostMesh.material.color.set(isValidPlacement ? 0x22c55e : 0xef4444);
    
    // 지형 높이 계산
    const groundY = terrain.groundHeight(hit.x, hit.z);
    const ghostY = groundY + 0.75; // 지면 위 0.75 높이
    
    ghostMesh.position.set(hit.x, ghostY, hit.z);
    const sizeMult = (defPlace?.placeRadius || 1.2) / 1.2;
    ghostMesh.scale.set(1.2 * sizeMult, 1.0, 1.2 * sizeMult);
  }

  /**
   * 마을 범위 색상 업데이트
   */
  updateTownRangeColors(isValidPlacement) {
    const placingType = this.state.ui.placing;
    if (placingType !== 'town_hall' && this.threeRef.current?.townRangeManager) {
      this.threeRef.current.townRangeManager.updateRangeColorsForPlacement(isValidPlacement);
    }
  }

  /**
   * 클릭 이벤트 처리
   */
  onClick(e) {
    const hit = this.getGroundIntersection(e);

    // 선택 모드: placing이 아닐 때는 단일 클릭으로 인스펙터 열기
    if (!this.state.ui.placing) {
      this.handleSelection(hit);
      return;
    }

    // 배치 모드: 건물 배치
    this.handleBuildingPlacement(hit);
  }

  /**
   * 선택 처리
   */
  handleSelection(hit) {
    // 1) 유닛 우선 피킹(가까운 원형 반경) - 숨겨진 시민 제외
    let bestUnit = null; 
    let bestU2 = 999999;
    for (const id in this.state.units) {
      const u = this.state.units[id];
      // 숨겨진 시민은 선택 대상에서 제외
      if (u.hidden) continue;
      
      const x = u.pos?.x || 0; 
      const z = u.pos?.z || 0;
      const dx = x - hit.x; 
      const dz = z - hit.z; 
      const d2 = dx*dx + dz*dz;
      if (d2 < bestU2) { 
        bestU2 = d2; 
        bestUnit = id; 
      }
    }
    if (bestUnit && bestU2 < 2.5*2.5) {
      setSelectedUnit(bestUnit);
      return;
    }
    
    // 2) 건물 피킹
    let bestId = null; 
    let bestD2 = 999999;
    for (const id in this.state.buildings) {
      const b = this.state.buildings[id];
      const x = b.tile?.x || 0; 
      const z = b.tile?.z || 0;
      const dx = x - hit.x; 
      const dz = z - hit.z; 
      const d2 = dx*dx + dz*dz;
      if (d2 < bestD2) { 
        bestD2 = d2; 
        bestId = id; 
      }
    }
    if (bestId && bestD2 < 4.0) { 
      setSelectedBuilding(bestId); 
    }
  }

  /**
   * 건물 배치 처리
   */
  handleBuildingPlacement(hit) {
    const type = this.state.ui.placing;
    const def = BUILDING_DEFS[type];
    if (!def) return;

    // 허용 반경 체크(다중 회관 중 하나라도 포함되면 OK)
    if (type !== 'town_hall') {
      const halls = Object.values(this.state.buildings).filter(b => b.type === "town_hall" && !b.construct?.active);
      if (halls.length === 0) return;
      
      let insideAny = false;
      for (const h of halls) {
        const r = (30 + 10 * ((h.level || 1) - 1));
        const cx = h.tile?.x || 0;
        const cz = h.tile?.z || 0;
        const d = Math.hypot(hit.x - cx, hit.z - cz);
        if (d <= r) {
          insideAny = true;
          break;
        }
      }
      if (!insideAny) return;
    }

    // 간단 겹침 체크(다른 건물과)
    const defPlace2 = BUILDING_DEFS[type];
    const minDist = Math.max(1.5, defPlace2?.placeRadius || 2.0);
    for (const id in this.state.buildings) {
      const b = this.state.buildings[id];
      const otherDef2 = BUILDING_DEFS[b.type];
      const otherR = Math.max(1.5, otherDef2?.placeRadius || 2.0);
      const dx = (b.tile?.x || 0) - hit.x;
      const dz = (b.tile?.z || 0) - hit.z;
      if ((dx * dx + dz * dz) < ((minDist + otherR) * (minDist + otherR))) return;
    }

    // 배경 오브젝트 제거(나무/선인장/바위/얼음) - 일정 반경 내부
    this.clearBackgroundObjects(hit, defPlace2);

    // 비용 차감 및 배치 확정 + 인스펙터 자동 오픈
    const ok = spend(def.build?.cost || {});
    if (!ok) return;
    
    const id = uid("b");
    addBuilding({ 
      id, 
      type, 
      tile: { x: hit.x, z: hit.z }, 
      level: 1, 
      hp: def.baseHP || 200, 
      hpMax: def.baseHP || 200, 
      xp: 0, 
      xpToNext: 50, 
      capacity: def.baseCap || 1, 
      workers: [], 
      build: def.build, 
      construct: { progress: 0, eta: def.build?.time || 10, active: true } 
    });
    
    const idle = idleUnits();
    const toAssign = Math.min(idle.length, (def.baseCap || 1));
    for (let i = 0; i < toAssign; i++) {
      assignUnitToBuilding(idle[i].id, id);
    }
    
    setPlacing(null);
    setSelectedBuilding(id);
    // 갱신
    this.threeRef.current?.refreshBuildings?.();
  }

  /**
   * 배경 오브젝트 제거
   */
  clearBackgroundObjects(hit, defPlace2) {
    const clearR = Math.max(1.6, (defPlace2?.placeRadius || 1.2) + 0.6);
    const clearR2 = clearR * clearR;
    const group = this.threeRef.current?.scatterGroup;
    if (group) {
      const toRemove = [];
      group.traverse((obj) => {
        if (!obj.isMesh) return;
        const dx = obj.position.x - hit.x;
        const dz = obj.position.z - hit.z;
        if (dx * dx + dz * dz <= clearR2) {
          toRemove.push(obj);
        }
      });
      for (const m of toRemove) {
        group.remove(m);
        if (m.geometry) m.geometry.dispose();
        if (m.material) m.material.dispose();
      }
    }
  }

  /**
   * 더블클릭 이벤트 처리 (포커스 이동)
   */
  onPick(e) {
    if (this.state.ui.placing) return;
    const hit = this.getGroundIntersection(e);
    
    // 더블클릭: 유닛 또는 건물 포커스
    let bestUnit = null; 
    let bestU2 = 999999;
    for (const id in this.state.units) {
      const u = this.state.units[id];
      // 숨겨진 시민은 포커스 대상에서 제외
      if (u.hidden) continue;
      
      const x = u.pos?.x || 0; 
      const z = u.pos?.z || 0;
      const dx = x - hit.x; 
      const dz = z - hit.z; 
      const d2 = dx*dx + dz*dz;
      if (d2 < bestU2) { 
        bestU2 = d2; 
        bestUnit = id; 
      }
    }
    if (bestUnit && bestU2 < 2.0*2.0) {
      setSelectedUnit(bestUnit);
      const u = this.state.units[bestUnit];
      if (u) this.threeRef.current.__focusTarget = new THREE.Vector3(u.pos?.x||0, 0, u.pos?.z||0);
      return;
    }
    
    let bestId = null; 
    let bestD2 = 999999;
    for (const id in this.state.buildings) {
      const b = this.state.buildings[id];
      const x = b.tile?.x || 0; 
      const z = b.tile?.z || 0;
      const dx = x - hit.x; 
      const dz = z - hit.z; 
      const d2 = dx*dx + dz*dz;
      if (d2 < bestD2) { 
        bestD2 = d2; 
        bestId = id; 
      }
    }
    if (bestId && bestD2 < 4.0) {
      setSelectedBuilding(bestId);
      const b = this.state.buildings[bestId];
      if (b) this.threeRef.current.__focusTarget = new THREE.Vector3(b.tile?.x||0, 0, b.tile?.z||0);
    }
  }

  /**
   * 우클릭 이벤트 처리 (유닛 이동 명령)
   */
  onRightClick(e) {
    if (this.state.ui.placing) return;
    const hit = this.getGroundIntersection(e);
    const selU = this.state.ui.selectedUnitId; 
    if (!selU) return;
    setUnitMoveTarget(selU, hit.x, hit.z);
  }

  /**
   * 마우스 업 이벤트 처리
   */
  onMouseUp(e) {
    if (e.button === 2) this.onRightClick(e);
  }

  /**
   * 이벤트 리스너 제거
   */
  dispose() {
    this.renderer.domElement.removeEventListener('mousemove', this.onMove);
    this.renderer.domElement.removeEventListener('click', this.onClick);
    this.renderer.domElement.removeEventListener('dblclick', this.onPick);
    this.renderer.domElement.removeEventListener('contextmenu', this.preventCtx);
    this.renderer.domElement.removeEventListener('mouseup', this.onMouseUp);
  }
}
