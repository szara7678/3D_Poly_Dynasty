import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Agents } from "./agents/Agents.jsx";
import { terrain } from "../world/terrain.js";
import { updateKeyboardOrbit } from "../controls/keyboard.js";
import { state, subscribe, setPlacing, setSelectedBuilding, setSelectedUnit } from "../game/state.js";
import { BUILDING_DEFS } from "../game/content/buildings.js";

// 분리된 매니저 클래스들
import { BuildingManager } from "./managers/BuildingManager.js";
import { LabelManager } from "./managers/LabelManager.js";
import { TownRangeManager } from "./managers/TownRangeManager.js";
import { InteractionHandler } from "./managers/InteractionHandler.js";
import { SelectionRingManager } from "./managers/SelectionRingManager.js";
import { ResourceDisplayManager } from "./managers/ResourceDisplayManager.js";

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
    const renderer = new THREE.WebGLRenderer({ 
      canvas, 
      antialias: true, 
      alpha: false, // 불투명 프레임버퍼로 잔상/합성 이슈 예방
      powerPreference: 'high-performance',
      premultipliedAlpha: false,
      stencil: false,
      depth: true
    });
    // 하드웨어 가속 감지 및 저사양 모드 전환
    let isSoftware = false;
    try{
      const gl = renderer.getContext();
      const dbg = gl && gl.getExtension && gl.getExtension('WEBGL_debug_renderer_info');
      const rstr = gl ? (dbg ? gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER)) : '';
      isSoftware = /swiftshader|software|llvmpipe/i.test(String(rstr||''));
    }catch(e){ /* noop */ }
    const dprCap = isSoftware ? 0.5 : Math.min(window.devicePixelRatio || 1, 2);
    renderer.setPixelRatio(dprCap);
    renderer.shadowMap.enabled = false; // 시작 렉 완화: 그림자 비활성화
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.autoClear = true;
    renderer.setClearColor(0xeaf7ff, 1);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xeaf7ff);

    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 500);
    camera.position.set(10, 12, 10);
    scene.userData.camera = camera;

    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.minDistance = 3;
    controls.maxDistance = 50;
    controls.minPolarAngle = 0.1;
    controls.maxPolarAngle = Math.PI * 0.48;
    
    // 마우스 버튼 설정 변경: 왼쪽 버튼으로 팬(맵 이동), 오른쪽 버튼으로 회전
    controls.mouseButtons = {
      LEFT: THREE.MOUSE.PAN,    // 왼쪽 버튼: 맵 이동
      MIDDLE: THREE.MOUSE.DOLLY, // 가운데 버튼: 줌
      RIGHT: THREE.MOUSE.ROTATE // 오른쪽 버튼: 회전
    };
    
    // 모바일 터치 설정: 한 손가락으로 팬(맵 이동), 두 손가락으로 줌/회전
    controls.touches = {
      ONE: THREE.TOUCH.PAN,           // 한 손가락: 맵 이동
      TWO: THREE.TOUCH.DOLLY_ROTATE   // 두 손가락: 줌 및 회전
    };

    // 조명
    const dir = new THREE.DirectionalLight(0xffffff, 0.9);
    dir.position.set(50, 60, 30);
    dir.castShadow = false;
    scene.add(dir);
    
    const amb = new THREE.AmbientLight(0xffffff, 0.40);
    scene.add(amb);

    // 지형 + 배경 오브젝트
    const terrainMesh = terrain.buildTerrainMesh(300, 250);
    scene.add(terrainMesh);
    const scatterCount = isSoftware ? 300 : 1200;
    const scatterGroup = terrain.scatterObjects(scene, scatterCount);

    // 매니저들 초기화
    const buildingManager = new BuildingManager(scene);
    const labelManager = new LabelManager(scene);
    const townRangeManager = new TownRangeManager(scene);
    const selectionRingManager = new SelectionRingManager(scene);
    const resourceDisplayManager = new ResourceDisplayManager(scene);



    // 외부에서 호출 가능하도록 저장하고 초기 갱신
    if (!threeRef.current) threeRef.current = {};
    threeRef.current.refreshBuildings = () => buildingManager.refreshBuildings(state.buildings);
    threeRef.current.refreshBuildings();

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

    threeRef.current = { 
      renderer, 
      scene, 
      camera, 
      controls, 
      clock, 
      refreshBuildings: () => buildingManager.refreshBuildings(state.buildings), 
      scatterGroup,
      terrainMesh,
      buildingManager,
      labelManager,
      townRangeManager,
      selectionRingManager,
      resourceDisplayManager,
      isSoftware
    };

    // 전역에서 접근 가능하도록 설정 (production.js에서 사용)
    if (typeof window !== 'undefined') {
      window.__INSU_THREE_REF__ = threeRef.current;
    }

    const targetFps = isSoftware ? 20 : 60;
    let lastFrameT = performance.now();
    let running = true;
    let rafId = 0;
    const loop = () => {
      if (!running) return;
      const tStart = performance.now();
      const elapsed = tStart - lastFrameT;
      const minFrameMs = 1000/targetFps;
      if (elapsed < minFrameMs){ rafId = requestAnimationFrame(loop); return; }
      lastFrameT = tStart;
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
      controls.update();
      
      // 자원 표시 애니메이션 업데이트
      resourceDisplayManager.updateDisplays();
      
      const rStart = performance.now();
      renderer.render(scene, camera);
      const rEnd = performance.now();
      // 간단 계측 노출(HUD에서 읽음)
      if (typeof window !== 'undefined') {
        window.__INSU_METRICS = window.__INSU_METRICS || {};
        window.__INSU_METRICS.renderMs = rEnd - rStart;
        window.__INSU_METRICS.isSoftware = isSoftware;
        window.__INSU_METRICS.dpr = dprCap;
      }
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('resize', resize);
      running = false;
      if (rafId) cancelAnimationFrame(rafId);
      
      // 전역 참조 정리
      if (typeof window !== 'undefined') {
        window.__INSU_THREE_REF__ = null;
      }
      
      buildingManager.dispose();
      labelManager.dispose();
      townRangeManager.dispose();
      selectionRingManager.dispose();
      resourceDisplayManager.dispose();
      renderer.dispose();
    };
  }, [timeScale, terrain]);

  // 배치 모드 및 상호작용 처리
  useEffect(() => {
    const three = threeRef.current;
    if (!three) return;
    
    const { renderer, scene, camera, townRangeManager, selectionRingManager, labelManager } = three;
    
    // 상호작용 핸들러 초기화
    const interactionHandler = new InteractionHandler(renderer, camera, scene, threeRef, state);
    
    // 고스트 메쉬 관리
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
        threeRef.current.ghostMesh = ghostMesh;
      } else if (!placingType && ghostMesh) {
        scene.remove(ghostMesh);
        ghostMesh.geometry.dispose();
        ghostMesh.material.dispose();
        ghostMesh = null;
        threeRef.current.ghostMesh = null;
      }

      // 마을 범위 표시 업데이트
      townRangeManager.updateTownRanges(state.buildings, placingType);

      // 건물 갱신
      threeRef.current?.refreshBuildings?.();

      // 라벨 갱신(건설 ETA/숨김 시민 생산 진행)
      labelManager?.updateConstructionLabels?.(state.buildings, state.units);

      // 선택 링 업데이트
      selectionRingManager.updateSelectionRing(
        state.buildings, 
        state.units, 
        state.ui.selectedBuildingId, 
        state.ui.selectedUnitId
      );
    });
    
    return () => {
      unsub();
      interactionHandler.dispose();
      if (ghostMesh) {
        scene.remove(ghostMesh);
        ghostMesh.geometry.dispose();
        ghostMesh.material.dispose();
      }
    };
  }, [threeRef]);

  // 초기 마운트 상태 추적
  const [hasInitialUnits, setHasInitialUnits] = React.useState(false);
  
  // 조건부 리마운트
  React.useEffect(() => {
    // 처음으로 유닛이 생성될 때만 리마운트
    if (units.length > 0 && !hasInitialUnits) {
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