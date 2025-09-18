import * as THREE from "three";

/**
 * 마을 범위 표시 관리 클래스
 * Scene3D에서 회관 범위 표시 및 겹침 처리 기능을 분리하여 관리
 */
export class TownRangeManager {
  constructor(scene) {
    this.scene = scene;
    this.townRangeGroups = new Map();
  }

  /**
   * 마을 범위 표시 업데이트
   * @param {Object} buildings - 건물 상태 객체
   * @param {string} placingType - 현재 배치 중인 건물 타입
   * @param {boolean} isValidPlacement - 배치 유효성 여부
   */
  updateTownRanges(buildings, placingType = null, isValidPlacement = true) {
    const halls = Object.values(buildings).filter(b => b.type === "town_hall" && !b.construct?.active);
    const seen = new Set();
    
    for (const h of halls) {
      const hid = h.id;
      seen.add(hid);
      const level = h.level || 1;
      const radius = 15 + 8 * (level - 1);
      
      let g = this.townRangeGroups.get(hid);
      if (!g) {
        g = this.createTownRangeGroup(radius);
        g.userData._radius = radius;
        this.townRangeGroups.set(hid, g);
      } else {
        // 반경이 변한 경우에만 지오메트리 재생성
        if (g.userData._radius !== radius) {
          this.updateTownRangeGroup(g, radius);
          g.userData._radius = radius;
        }
      }
      
      // 회관 위치에 그룹 배치
      const hx = h.tile?.x || 0;
      const hz = h.tile?.z || 0;
      g.position.set(hx, 0.0, hz);
    }
    
    // 마을 범위 겹치는 부분 처리 - 겹치는 부분의 투명도를 조정
    this.handleOverlappingRanges(halls);
    
    // 배치 모드일 때 색상 변경
    if (placingType && placingType !== 'town_hall') {
      this.updateRangeColorsForPlacement(isValidPlacement);
    }
    
    // 정리
    this.cleanupUnusedGroups(seen);
  }

  /**
   * 마을 범위 그룹 생성
   * @param {number} radius - 범위 반경
   * @returns {THREE.Group} 생성된 그룹
   */
  createTownRangeGroup(radius) {
    const g = new THREE.Group();
    
    // 채우기 (원형)
    const fillGeo = new THREE.CircleGeometry(radius, 128);
    fillGeo.rotateX(-Math.PI / 2);
    const fillMat = new THREE.MeshBasicMaterial({ 
      color: 0x10b981, 
      transparent: true, 
      opacity: 0.12, 
      side: THREE.DoubleSide, 
      depthWrite: false
    });
    const fill = new THREE.Mesh(fillGeo, fillMat);
    g.add(fill);
    
    // 테두리 (링) - 클리핑 셰이더 적용
    const edgeGeo = new THREE.RingGeometry(Math.max(0, radius - 0.12), radius + 0.12, 192);
    edgeGeo.rotateX(-Math.PI / 2);
    const edgeMat = this.createClippingEdgeMaterial(0x065f46, 0.9);
    const edge = new THREE.Mesh(edgeGeo, edgeMat);
    edge.position.y = 0.01;
    g.add(edge);
    
    // 벽 (실린더) - 클리핑 셰이더 적용
    const wallGeo = new THREE.CylinderGeometry(radius, radius, 2.5, 96, 1, true);
    const wallMat = this.createClippingWallMaterial(0x10b981, 0.22);
    const wall = new THREE.Mesh(wallGeo, wallMat);
    wall.position.y = 1.25;
    g.add(wall);
    
    g.userData = { fill, edge, wall };
    this.scene.add(g);
    return g;
  }

  /**
   * 겹치는 부분을 잘라내는 링 셰이더 머티리얼 생성
   */
  createClippingEdgeMaterial(hexColor, opacity) {
    const color = new THREE.Color(hexColor);
    const uniforms = {
      uColor: { value: new THREE.Vector3(color.r, color.g, color.b) },
      uOpacity: { value: opacity },
      uSelfCenter: { value: new THREE.Vector2(0, 0) },
      uSelfRadius: { value: 1.0 },
      uOthersCount: { value: 0 },
      uOthersCenters: { value: new Array(16).fill(0).map(() => new THREE.Vector2()) },
      uOthersRadii: { value: new Float32Array(16) },
      uClipEps: { value: 0.1 }
    };

    const vertexShader = `
      varying vec3 vWorldPos;
      void main(){
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `;

    const fragmentShader = `
      precision highp float;
      varying vec3 vWorldPos;
      uniform vec3 uColor;
      uniform float uOpacity;
      uniform vec2 uSelfCenter;
      uniform float uSelfRadius;
      uniform int uOthersCount;
      uniform vec2 uOthersCenters[16];
      uniform float uOthersRadii[16];
      uniform float uClipEps;
      
      void main(){
        vec2 p = vWorldPos.xz;
        
        // 다른 회관 원 내부에 있는 픽셀은 잘라냄
        for(int i=0;i<16;i++){
          if(i >= uOthersCount) break;
          vec2 oc = uOthersCenters[i];
          float orad = uOthersRadii[i];
          float d = length(p - oc);
          if(d < orad - uClipEps){
            discard;
          }
        }
        
        gl_FragColor = vec4(uColor, uOpacity);
      }
    `;

    return new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide
    });
  }

  /**
   * 겹치는 부분을 잘라내는 벽 셰이더 머티리얼 생성
   */
  createClippingWallMaterial(hexColor, opacity) {
    const color = new THREE.Color(hexColor);
    const uniforms = {
      uColor: { value: new THREE.Vector3(color.r, color.g, color.b) },
      uOpacity: { value: opacity },
      uSelfCenter: { value: new THREE.Vector2(0, 0) },
      uSelfRadius: { value: 1.0 },
      uOthersCount: { value: 0 },
      uOthersCenters: { value: new Array(16).fill(0).map(() => new THREE.Vector2()) },
      uOthersRadii: { value: new Float32Array(16) },
      uClipEps: { value: 0.1 }
    };

    const vertexShader = `
      varying vec3 vWorldPos;
      void main(){
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `;

    const fragmentShader = `
      precision highp float;
      varying vec3 vWorldPos;
      uniform vec3 uColor;
      uniform float uOpacity;
      uniform vec2 uSelfCenter;
      uniform float uSelfRadius;
      uniform int uOthersCount;
      uniform vec2 uOthersCenters[16];
      uniform float uOthersRadii[16];
      uniform float uClipEps;
      
      void main(){
        vec2 p = vWorldPos.xz;
        
        // 다른 회관 원 내부에 있는 픽셀은 잘라냄
        for(int i=0;i<16;i++){
          if(i >= uOthersCount) break;
          vec2 oc = uOthersCenters[i];
          float orad = uOthersRadii[i];
          float d = length(p - oc);
          if(d < orad - uClipEps){
            discard;
          }
        }
        
        gl_FragColor = vec4(uColor, uOpacity);
      }
    `;

    return new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide
    });
  }

  /**
   * 마을 범위 그룹 업데이트
   * @param {THREE.Group} g - 업데이트할 그룹
   * @param {number} radius - 새로운 반경
   */
  updateTownRangeGroup(g, radius) {
    const { fill, edge, wall } = g.userData || {};
    
    // 채우기 지오메트리 업데이트
    const fg = new THREE.CircleGeometry(radius, 128);
    fg.rotateX(-Math.PI / 2);
    fill.geometry.dispose();
    fill.geometry = fg;
    
    // 테두리 지오메트리 업데이트
    const eg = new THREE.RingGeometry(Math.max(0, radius - 0.12), radius + 0.12, 192);
    eg.rotateX(-Math.PI / 2);
    edge.geometry.dispose();
    edge.geometry = eg;
    
    // 벽 지오메트리 업데이트
    const wg = new THREE.CylinderGeometry(radius, radius, 2.5, 96, 1, true);
    wall.geometry.dispose();
    wall.geometry = wg;
    wall.position.y = 1.25;
  }


  /**
   * 겹치는 범위 처리 - 셰이더 기반 클리핑으로 겹치는 부분 잘라내기
   * @param {Array} halls - 회관 배열
   */
  handleOverlappingRanges(halls) {
    // 모든 회관의 중심/반경 정보 수집
    const hallInfo = halls.map(h => ({
      id: h.id,
      center: new THREE.Vector2(h.tile?.x || 0, h.tile?.z || 0),
      radius: 24 + 8 * ((h.level || 1) - 1)
    }));

    // 각 범위 그룹에 대해 클리핑 정보 업데이트
    for (const [hid, grp] of this.townRangeGroups) {
      const { edge, wall } = grp.userData || {};
      
      // 현재 회관 정보 찾기
      const currentHall = hallInfo.find(h => h.id === hid);
      if (!currentHall) continue;

      // 다른 회관들의 정보 수집 (현재 회관 제외)
      const otherHalls = hallInfo.filter(h => h.id !== hid);
      
      // 셰이더 uniforms 업데이트
      if (edge && edge.material.uniforms) {
        const edgeUniforms = edge.material.uniforms;
        edgeUniforms.uSelfCenter.value.set(currentHall.center.x, currentHall.center.y);
        edgeUniforms.uSelfRadius.value = currentHall.radius;
        edgeUniforms.uOthersCount.value = Math.min(otherHalls.length, 16);
        
        for (let i = 0; i < Math.min(otherHalls.length, 16); i++) {
          const other = otherHalls[i];
          edgeUniforms.uOthersCenters.value[i].set(other.center.x, other.center.y);
          edgeUniforms.uOthersRadii.value[i] = other.radius;
        }
      }
      
      if (wall && wall.material.uniforms) {
        const wallUniforms = wall.material.uniforms;
        wallUniforms.uSelfCenter.value.set(currentHall.center.x, currentHall.center.y);
        wallUniforms.uSelfRadius.value = currentHall.radius;
        wallUniforms.uOthersCount.value = Math.min(otherHalls.length, 16);
        
        for (let i = 0; i < Math.min(otherHalls.length, 16); i++) {
          const other = otherHalls[i];
          wallUniforms.uOthersCenters.value[i].set(other.center.x, other.center.y);
          wallUniforms.uOthersRadii.value[i] = other.radius;
        }
      }
    }
  }

  /**
   * 배치 모드에 따른 범위 색상 업데이트
   * @param {boolean} isValidPlacement - 배치 유효성 여부
   */
  updateRangeColorsForPlacement(isValidPlacement) {
    for (const [hid, grp] of this.townRangeGroups) {
      const { fill, edge, wall } = grp.userData || {};
      const col = isValidPlacement ? 0x10b981 : 0xef4444;
      const ecol = isValidPlacement ? 0x065f46 : 0x991b1b;
      
      if (fill) fill.material.color.set(col);
      
      // 셰이더 머티리얼의 경우 uniforms 업데이트
      if (edge && edge.material.uniforms) {
        const edgeColor = new THREE.Color(ecol);
        edge.material.uniforms.uColor.value.set(edgeColor.r, edgeColor.g, edgeColor.b);
      } else if (edge) {
        edge.material.color.set(ecol);
      }
      
      if (wall && wall.material.uniforms) {
        const wallColor = new THREE.Color(col);
        wall.material.uniforms.uColor.value.set(wallColor.r, wallColor.g, wallColor.b);
      } else if (wall) {
        wall.material.color.set(col);
      }
    }
  }

  /**
   * 사용하지 않는 그룹 정리
   * @param {Set} seen - 현재 사용 중인 그룹 ID들
   */
  cleanupUnusedGroups(seen) {
    for (const [hid, grp] of Array.from(this.townRangeGroups.entries())) {
      if (!seen.has(hid)) {
        const { fill, edge, wall } = grp.userData || {};
        for (const m of [fill, edge, wall]) {
          if (m) {
            if (m.geometry) m.geometry.dispose();
            if (m.material) m.material.dispose();
          }
        }
        this.scene.remove(grp);
        this.townRangeGroups.delete(hid);
      }
    }
  }

  /**
   * 리소스 정리
   */
  dispose() {
    for (const [hid, grp] of this.townRangeGroups) {
      const { fill, edge, wall } = grp.userData || {};
      for (const m of [fill, edge, wall]) {
        if (m) {
          if (m.geometry) m.geometry.dispose();
          if (m.material) m.material.dispose();
        }
      }
      this.scene.remove(grp);
    }
    this.townRangeGroups.clear();
  }
}
