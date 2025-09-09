import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Agents } from "./agents/Agents.jsx";
import { terrain } from "../world/terrain.js";
import { updateKeyboardOrbit } from "../controls/keyboard.js";
import { state, subscribe, spend, uid, addBuilding, idleUnits, assignUnitToBuilding, setPlacing, setSelectedBuilding } from "../game/state.js";
import { BUILDING_DEFS } from "../game/content/buildings.js";

export default function Scene3D({ className = "", units = [], count = 260, maxCount = 800, timeScale = 1 }) {
  const containerRef = useRef();
  const canvasRef = useRef();
  const threeRef = useRef();
  const keysRef = useRef({});

  // 키보드 리스너
  useEffect(() => {
    const keys = keysRef.current;
    const onKeyDown = (e) => { keys[e.code] = true; };
    const onKeyUp = (e) => { keys[e.code] = false; };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
    };
  }, []);

  // Three.js 메인 씬 초기화
  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // 기본 씬 세팅
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xeaf7ff);

    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 500);
    camera.position.set(10, 12, 10);

    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.minDistance = 3;
    controls.maxDistance = 50;
    controls.minPolarAngle = 0.1;
    controls.maxPolarAngle = Math.PI * 0.48;

    // 조명
    const dir = new THREE.DirectionalLight(0xffffff, 1.2);
    dir.position.set(50, 60, 30);
    dir.castShadow = true;
    dir.shadow.mapSize.setScalar(2048);
    dir.shadow.camera.near = 1;
    dir.shadow.camera.far = 200;
    dir.shadow.camera.left = -80;
    dir.shadow.camera.right = 80;
    dir.shadow.camera.top = 80;
    dir.shadow.camera.bottom = -80;
    scene.add(dir);
    
    const amb = new THREE.AmbientLight(0xffffff, 0.40);
    scene.add(amb);

    // 지형 + 배경 오브젝트
    const terrainMesh = terrain.buildTerrainMesh(300, 250);
    scene.add(terrainMesh);
    const scatterGroup = terrain.scatterObjects(scene, 1200);

    // 건물 인스턴싱 (타입별)
    const MAX_PER_TYPE = 128;
    const tmpM = new THREE.Matrix4();
    const tmpQ = new THREE.Quaternion();
    const tmpS = new THREE.Vector3();
    const tmpP = new THREE.Vector3();
    
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

    const buildingMeshes = {};
    for (const t in typeDefs) {
      const mat = new THREE.MeshStandardMaterial({ 
        color: new THREE.Color(typeDefs[t].color), 
        metalness: 0.02, 
        roughness: 0.9 
      });
      const baseGeo = typeDefs[t].geo.clone();
      const inst = new THREE.InstancedMesh(baseGeo, mat, MAX_PER_TYPE);
      inst.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      inst.frustumCulled = false;
      inst.count = 0;
      scene.add(inst);
      buildingMeshes[t] = inst;
    }

    // 건설 ETA 라벨 (Sprite)
    const labelMap = new Map();
    
    function makeLabelSprite(text) {
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 96;
      const ctx = canvas.getContext('2d');
      
      function draw(t) {
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
      }
      
      draw(text);
      const tex = new THREE.CanvasTexture(canvas);
      tex.needsUpdate = true;
      const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false });
      const sprite = new THREE.Sprite(mat);
      sprite.scale.set(3.0, 1.2, 1.0);
      scene.add(sprite);
      return { sprite, canvas, ctx, draw, lastText: text };
    }

    function updateConstructionLabels() {
      // 완료된 라벨 제거
      for (const [id, entry] of Array.from(labelMap.entries())) {
        const b = state.buildings[id];
        if (!b || !b.construct?.active) {
          scene.remove(entry.sprite);
          entry.sprite.material.map.dispose();
          entry.sprite.material.dispose();
          labelMap.delete(id);
        }
      }
      
      // 활성 건설 라벨 추가/업데이트
      for (const bid in state.buildings) {
        const b = state.buildings[bid];
        if (!b || !b.construct?.active) continue;
        
        const eta = Math.max(0, b.construct?.eta || 0);
        const text = `${eta.toFixed(1)}s`;
        let entry = labelMap.get(bid);
        
        if (!entry) {
          entry = makeLabelSprite(text);
          labelMap.set(bid, entry);
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
    }

    function refreshBuildings() {
      // 카운트 리셋
      for (const t in buildingMeshes) {
        buildingMeshes[t].count = 0;
      }
      
      const counter = {};
      for (const t in buildingMeshes) counter[t] = 0;
      
      for (const id in state.buildings) {
        const b = state.buildings[id];
        const inst = buildingMeshes[b.type];
        if (!inst) continue;
        
        const idx = counter[b.type];
        if (idx >= MAX_PER_TYPE) continue;
        counter[b.type] = idx + 1;
        
        const x = b.tile?.x || 0;
        const z = b.tile?.z || 0;
        const progress = (b.construct?.active) ? Math.max(0.1, Math.min(1, b.construct.progress || 0)) : 1;
        const baseH = 1.0;
        const height = baseH * (0.2 + 0.8 * progress);
        
        tmpP.set(x, height / 2, z);
        tmpQ.set(0, 0, 0, 1);
        const sizeMult = 1.0 + 0.05 * (b.level - 1);
        tmpS.set(sizeMult, height, sizeMult);
        tmpM.compose(tmpP, tmpQ, tmpS);
        inst.setMatrixAt(idx, tmpM);
        inst.count = counter[b.type];
        inst.instanceMatrix.needsUpdate = true;
      }
    }

    // 외부에서 호출 가능하도록 저장하고 초기 갱신
    if (!threeRef.current) threeRef.current = {};
    threeRef.current.refreshBuildings = refreshBuildings;
    refreshBuildings();

    const clock = new THREE.Clock();
    const resize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = Math.max(1e-6, w / Math.max(1, h));
      camera.updateProjectionMatrix();
    };
    resize();
    window.addEventListener('resize', resize);

    threeRef.current = { renderer, scene, camera, controls, clock, refreshBuildings, scatterGroup };

    const loop = () => {
      const dt = Math.min(0.033, clock.getDelta()) * Math.max(0.0001, timeScale);
      
      // 카메라 선택 포커스 보간
      if (threeRef.current.__focusTarget) {
        const desired = threeRef.current.__focusTarget;
        const curT = controls.target.clone();
        const to = desired.clone().sub(curT).multiplyScalar(0.12);
        if (to.lengthSq() > 1e-6) {
          controls.target.add(to);
          camera.position.add(to);
        } else {
          threeRef.current.__focusTarget = null;
        }
        
        // 과도한 거리면 살짝 당겨줌
        const off = new THREE.Vector3().subVectors(camera.position, controls.target);
        const dist = off.length();
        const maxDist = 18;
        if (dist > maxDist) {
          off.multiplyScalar(maxDist / Math.max(1e-6, dist));
          camera.position.copy(controls.target).add(off);
        }
      }
      
      updateKeyboardOrbit(controls, camera, keysRef.current, dt, { move: 32, rotate: 5.0, climb: 32 });
      updateConstructionLabels();
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('resize', resize);
      for (const t in buildingMeshes) {
        const inst = buildingMeshes[t];
        scene.remove(inst);
        inst.geometry.dispose();
        inst.material.dispose();
      }
      for (const [id, entry] of Array.from(labelMap.entries())) {
        scene.remove(entry.sprite);
        entry.sprite.material.map.dispose();
        entry.sprite.material.dispose();
      }
      renderer.dispose();
    };
  }, [timeScale, terrain]);

  // 배치 모드: 클릭 위치로 건설 확정 + 회관 레벨 반경 표시
  useEffect(() => {
    const three = threeRef.current;
    if (!three) return;
    
    const { renderer, scene, camera } = three;
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);

    // 마을 범위 표시(회관별 그룹)
    const townRangeGroups = new Map();
    // 청사진(고스트) 메쉬
    let ghostMesh = null;

    const unsub = subscribe(() => {
      const placingType = state.ui.placing;
      
      // 고스트 메쉬 생성/제거
      if (placingType && !ghostMesh) {
        const defPlace = BUILDING_DEFS[placingType];
        const geo = new THREE.BoxGeometry(1.2, 1.2, 1.2);
        const mat = new THREE.MeshBasicMaterial({ 
          color: 0x22c55e, 
          transparent: true, 
          opacity: 0.6, 
          wireframe: false 
        });
        ghostMesh = new THREE.Mesh(geo, mat);
        scene.add(ghostMesh);
      } else if (!placingType && ghostMesh) {
        scene.remove(ghostMesh);
        ghostMesh.geometry.dispose();
        ghostMesh.material.dispose();
        ghostMesh = null;
      }

      // 다중 회관 범위 표시
      const halls = Object.values(state.buildings).filter(b => b.type === "town_hall" && !b.construct?.active);
      const seen = new Set();
      
      for (const h of halls) {
        const hid = h.id;
        seen.add(hid);
        const level = h.level || 1;
        const radius = 30 + 10 * (level - 1);
        
        let g = townRangeGroups.get(hid);
        if (!g) {
          g = new THREE.Group();
          
          // 채우기 (원형)
          const fillGeo = new THREE.CircleGeometry(radius, 128);
          fillGeo.rotateX(-Math.PI / 2);
          const fillMat = new THREE.MeshBasicMaterial({ 
            color: 0x10b981, 
            transparent: true, 
            opacity: 0.12, 
            side: THREE.DoubleSide, 
            depthWrite: false, 
            blending: THREE.AdditiveBlending 
          });
          const fill = new THREE.Mesh(fillGeo, fillMat);
          g.add(fill);
          
          // 테두리 (링)
          const edgeGeo = new THREE.RingGeometry(Math.max(0, radius - 0.12), radius + 0.12, 192);
          edgeGeo.rotateX(-Math.PI / 2);
          const edgeMat = new THREE.MeshBasicMaterial({ 
            color: 0x065f46, 
            transparent: true, 
            opacity: 0.9, 
            side: THREE.DoubleSide, 
            depthWrite: false 
          });
          const edge = new THREE.Mesh(edgeGeo, edgeMat);
          edge.position.y = 0.01;
          g.add(edge);
          
          // 벽 (실린더)
          const wallGeo = new THREE.CylinderGeometry(radius, radius, 2.5, 96, 1, true);
          const wallMat = new THREE.MeshBasicMaterial({ 
            color: 0x10b981, 
            transparent: true, 
            opacity: 0.22, 
            side: THREE.DoubleSide, 
            depthWrite: false 
          });
          const wall = new THREE.Mesh(wallGeo, wallMat);
          wall.position.y = 1.25;
          g.add(wall);
          
          g.userData = { fill, edge, wall };
          three.scene.add(g);
          townRangeGroups.set(hid, g);
        } else {
          // 기존 그룹 업데이트
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
        
        // 회관 위치에 그룹 배치
        const hx = h.tile?.x || 0;
        const hz = h.tile?.z || 0;
        townRangeGroups.get(hid).position.set(hx, 0.0, hz);
      }
      
      // 마을 범위 겹치는 부분 처리 - 겹치는 부분의 투명도를 조정
      for (const [hid1, grp1] of townRangeGroups) {
        const h1 = halls.find(h => h.id === hid1);
        if (!h1) continue;
        
        const level1 = h1.level || 1;
        const radius1 = 30 + 10 * (level1 - 1);
        const pos1 = new THREE.Vector3(h1.tile?.x || 0, 0, h1.tile?.z || 0);
        
        let hasOverlap = false;
        for (const [hid2, grp2] of townRangeGroups) {
          if (hid1 === hid2) continue;
          
          const h2 = halls.find(h => h.id === hid2);
          if (!h2) continue;
          
          const level2 = h2.level || 1;
          const radius2 = 30 + 10 * (level2 - 1);
          const pos2 = new THREE.Vector3(h2.tile?.x || 0, 0, h2.tile?.z || 0);
          
          const distance = pos1.distanceTo(pos2);
          if (distance < radius1 + radius2) {
            hasOverlap = true;
            break;
          }
        }
        
        // 겹치는 경우 투명도 증가
        const { fill, edge, wall } = grp1.userData || {};
        if (hasOverlap) {
          if (fill) fill.material.opacity = 0.06;
          if (edge) edge.material.opacity = 0.6;
          if (wall) wall.material.opacity = 0.15;
        } else {
          if (fill) fill.material.opacity = 0.12;
          if (edge) edge.material.opacity = 0.9;
          if (wall) wall.material.opacity = 0.22;
        }
      }
      
      // 정리
      for (const [hid, grp] of Array.from(townRangeGroups.entries())) {
        if (!seen.has(hid)) {
          const { fill, edge, wall } = grp.userData || {};
          for (const m of [fill, edge, wall]) {
            if (m) {
              if (m.geometry) m.geometry.dispose();
              if (m.material) m.material.dispose();
            }
          }
          three.scene.remove(grp);
          townRangeGroups.delete(hid);
        }
      }

      // 건물 갱신
      threeRef.current?.refreshBuildings?.();

      // 선택 링
      const selectedId = state.ui.selectedBuildingId;
      if (selectedId) {
        const b = state.buildings[selectedId];
        if (b) {
          if (!threeRef.current.__selRing) {
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
            three.scene.add(ring);
            threeRef.current.__selRing = ring;
          }
          
          const r = Math.max(1.2, (BUILDING_DEFS[b.type]?.placeRadius || 1.2));
          const ring = threeRef.current.__selRing;
          const newGeo = new THREE.RingGeometry(Math.max(0, r - 0.12), r + 0.12, 64);
          newGeo.rotateX(-Math.PI / 2);
          ring.geometry.dispose();
          ring.geometry = newGeo;
          ring.position.set(b.tile?.x || 0, 0.03, b.tile?.z || 0);
          ring.visible = true;
        }
      } else if (threeRef.current.__selRing) {
        threeRef.current.__selRing.visible = false;
      }
    });

    const onMove = (e) => {
      if (!state.ui.placing) return;
      
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);
      const hit = new THREE.Vector3();
      raycaster.ray.intersectPlane(plane, hit);
      
      if (ghostMesh) {
        // 유효성(반경) 체크에 따라 색상 변경
        const placingType = state.ui.placing;
        const halls = Object.values(state.buildings).filter(b => b.type === "town_hall" && !b.construct?.active);
        let valid = true;
        let outside = false;
        
        if (placingType !== 'town_hall') {
          if (halls.length === 0) {
            valid = false;
            outside = true;
          } else {
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
            valid = insideAny;
            outside = !insideAny;
          }
        }
        
        // 다른 건물과 겹침 체크
        const defPlace = BUILDING_DEFS[placingType];
        const minDist = Math.max(1.5, defPlace?.placeRadius || 2.0);
        let overlap = false;
        
        for (const id in state.buildings) {
          const b = state.buildings[id];
          const otherDefP = BUILDING_DEFS[b.type];
          const otherR = Math.max(1.5, otherDefP?.placeRadius || 2.0);
          const dx = (b.tile?.x || 0) - hit.x;
          const dz = (b.tile?.z || 0) - hit.z;
          if ((dx * dx + dz * dz) < ((minDist + otherR) * (minDist + otherR))) {
            overlap = true;
            break;
          }
        }
        
        valid = valid && !overlap;
        ghostMesh.material.color.set(valid ? 0x22c55e : 0xef4444);
        ghostMesh.position.set(hit.x, 0.75, hit.z);
        const sizeMult = (defPlace?.placeRadius || 1.2) / 1.2;
        ghostMesh.scale.set(1.2 * sizeMult, 1.0, 1.2 * sizeMult);

        // 모든 마을 범위 그룹 색상 동기화
        if (placingType !== 'town_hall') {
          for (const [hid, grp] of townRangeGroups) {
            const { fill, edge, wall } = grp.userData || {};
            const col = valid && !outside ? 0x10b981 : 0xef4444;
            const ecol = valid && !outside ? 0x065f46 : 0x991b1b;
            if (fill) fill.material.color.set(col);
            if (edge) edge.material.color.set(ecol);
            if (wall) wall.material.color.set(col);
          }
        }
      }
    };

    const onClick = (e) => {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);
      const hit = new THREE.Vector3();
      raycaster.ray.intersectPlane(plane, hit);

      // 선택 모드: placing이 아닐 때는 단일 클릭으로 인스펙터 열기
      if (!state.ui.placing) {
        let bestId = null;
        let bestD2 = 999999;
        for (const id in state.buildings) {
          const b = state.buildings[id];
          const x = b.tile?.x || 0;
          const z = b.tile?.z || 0;
          const dx = x - hit.x;
          const dz = z - hit.z;
          const d2 = dx * dx + dz * dz;
          if (d2 < bestD2) {
            bestD2 = d2;
            bestId = id;
          }
        }
        if (bestId && bestD2 < 4.0) {
          setSelectedBuilding(bestId);
        }
        return;
      }

      const type = state.ui.placing;
      const def = BUILDING_DEFS[type];
      if (!def) return;

      // 허용 반경 체크(다중 회관 중 하나라도 포함되면 OK)
      if (type !== 'town_hall') {
        const halls = Object.values(state.buildings).filter(b => b.type === "town_hall" && !b.construct?.active);
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
      for (const id in state.buildings) {
        const b = state.buildings[id];
        const otherDef2 = BUILDING_DEFS[b.type];
        const otherR = Math.max(1.5, otherDef2?.placeRadius || 2.0);
        const dx = (b.tile?.x || 0) - hit.x;
        const dz = (b.tile?.z || 0) - hit.z;
        if ((dx * dx + dz * dz) < ((minDist + otherR) * (minDist + otherR))) return;
      }

      // 배경 오브젝트 제거(나무/선인장/바위/얼음) - 일정 반경 내부
      const clearR = Math.max(1.6, (defPlace2?.placeRadius || 1.2) + 0.6);
      const clearR2 = clearR * clearR;
      const group = threeRef.current?.scatterGroup;
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
      threeRef.current?.refreshBuildings?.();
    };

    // 더블클릭 시 선택 + 포커스 이동
    const onPick = (e) => {
      if (state.ui.placing) return;
      
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);
      const hit = new THREE.Vector3();
      raycaster.ray.intersectPlane(plane, hit);
      
      let bestId = null;
      let bestD2 = 999999;
      for (const id in state.buildings) {
        const b = state.buildings[id];
        const x = b.tile?.x || 0;
        const z = b.tile?.z || 0;
        const dx = x - hit.x;
        const dz = z - hit.z;
        const d2 = dx * dx + dz * dz;
        if (d2 < bestD2) {
          bestD2 = d2;
          bestId = id;
        }
      }
      
      if (bestId && bestD2 < 4.0) {
        setSelectedBuilding(bestId);
        const b = state.buildings[bestId];
        if (b) {
          threeRef.current.__focusTarget = new THREE.Vector3(b.tile?.x || 0, 0, b.tile?.z || 0);
        }
      }
    };

    renderer.domElement.addEventListener('mousemove', onMove);
    renderer.domElement.addEventListener('click', onClick);
    renderer.domElement.addEventListener('dblclick', onPick);
    
    return () => {
      unsub();
      renderer.domElement.removeEventListener('mousemove', onMove);
      renderer.domElement.removeEventListener('click', onClick);
      renderer.domElement.removeEventListener('dblclick', onPick);
    };
  }, [threeRef]);

  // 초기 마운트 상태 추적
  const [hasInitialUnits, setHasInitialUnits] = React.useState(false);
  
  // 디버깅용 로그 + 조건부 리마운트
  React.useEffect(() => {
    console.log(`Scene3D units 업데이트: ${units.length}명`);
    units.forEach((u, i) => {
      console.log(`  유닛 ${i}: ${u.name} 위치(${u.pos?.x?.toFixed(1)}, ${u.pos?.z?.toFixed(1)}) 상태:${u.state}`);
    });
    
    // 처음으로 유닛이 생성될 때만 리마운트
    if (units.length > 0 && !hasInitialUnits) {
      console.log('처음 유닛 생성 감지 - Agents 컴포넌트 리마운트');
      setHasInitialUnits(true);
    }
  }, [units, hasInitialUnits]);

  return (
    <div ref={containerRef} className={`relative w-full h-full min-h-[480px] bg-[#eaf7ff] rounded-2xl overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <Agents 
        key={hasInitialUnits ? 'agents-ready' : 'agents-empty'}
        threeRef={threeRef} 
        units={units} 
        count={count} 
        maxCount={maxCount} 
      />
    </div>
  );
}