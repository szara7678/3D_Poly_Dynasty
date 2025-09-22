// 렌더링 공통 유틸리티 함수들
import * as THREE from "three";

// 라벨 생성 함수
export function createLabelSprite(text, scene) {
  const canvas = document.createElement('canvas');
  canvas.width = 256; 
  canvas.height = 96;
  const ctx = canvas.getContext('2d');
  
  const draw = (t) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = 'bold 36px system-ui, -apple-system, Segoe UI, Roboto, sans-serif';
    const metrics = ctx.measureText(t);
    const w = Math.min(240, Math.max(80, metrics.width + 24));
    const h = 48; 
    const x = (canvas.width - w) / 2; 
    const y = (canvas.height - h) / 2;
    
    ctx.fillStyle = 'rgba(17,24,39,0.75)';
    ctx.strokeStyle = 'rgba(255,255,255,0.9)';
    ctx.lineWidth = 2;
    ctx.beginPath(); 
    ctx.roundRect(x, y, w, h, 10); 
    ctx.fill(); 
    ctx.stroke();
    
    ctx.textAlign = 'center'; 
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(t, canvas.width / 2, canvas.height / 2);
  };
  
  draw(text);
  const tex = new THREE.CanvasTexture(canvas); 
  tex.needsUpdate = true;
  const mat = new THREE.SpriteMaterial({ 
    map: tex, 
    transparent: true, 
    depthTest: false, 
    depthWrite: false 
  });
  const sprite = new THREE.Sprite(mat);
  sprite.scale.set(2.6, 0.9, 1);
  scene.add(sprite);
  
  return { sprite, canvas, ctx, tex, draw, lastText: text };
}

// 선택 할로 생성 함수
export function createSelectionHalo(scene) {
  const haloTexCanvas = document.createElement('canvas');
  haloTexCanvas.width = 256; 
  haloTexCanvas.height = 256;
  const haloCtx = haloTexCanvas.getContext('2d');
  const grad = haloCtx.createRadialGradient(128,128,10, 128,128,120);
  grad.addColorStop(0, 'rgba(59,130,246,0.75)');
  grad.addColorStop(0.4, 'rgba(59,130,246,0.25)');
  grad.addColorStop(1, 'rgba(59,130,246,0.0)');
  haloCtx.fillStyle = grad; 
  haloCtx.beginPath(); 
  haloCtx.arc(128,128,120,0,Math.PI*2); 
  haloCtx.fill();
  
  const haloTex = new THREE.CanvasTexture(haloTexCanvas); 
  haloTex.needsUpdate = true;
  const haloMat = new THREE.SpriteMaterial({ 
    map: haloTex, 
    transparent: true, 
    depthTest: false, 
    depthWrite: false 
  });
  const haloSprite = new THREE.Sprite(haloMat); 
  haloSprite.scale.set(1.8, 1.8, 1);
  haloSprite.visible = false; 
  scene.add(haloSprite);
  
  return haloSprite;
}

// 숲 군락지 메쉬 생성
export function createForestNestMesh() {
  const group = new THREE.Group();
  
  // 기반 (더 크고 높게)
  const baseGeometry = new THREE.CylinderGeometry(8, 8, 2, 12);
  const baseMaterial = new THREE.MeshLambertMaterial({ color: '#3d2914' });
  const base = new THREE.Mesh(baseGeometry, baseMaterial);
  base.position.y = 1;
  group.add(base);
  
  // 나무들 (더 크고 많이)
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2;
    const radius = 3 + Math.random() * 2;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    
    // 나무 줄기 (더 크게)
    const trunkGeometry = new THREE.CylinderGeometry(0.4, 0.5, 6, 8);
    const trunkMaterial = new THREE.MeshLambertMaterial({ color: '#4a3728' });
    const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
    trunk.position.set(x, 3, z);
    group.add(trunk);
    
    // 나뭇잎 (더 크게)
    const leavesGeometry = new THREE.SphereGeometry(2, 12, 10);
    const leavesMaterial = new THREE.MeshLambertMaterial({ color: '#2d5016' });
    const leaves = new THREE.Mesh(leavesGeometry, leavesMaterial);
    leaves.position.set(x, 6, z);
    group.add(leaves);
  }
  
  return group;
}

// 사막 군락지 메쉬 생성
export function createDesertNestMesh() {
  const group = new THREE.Group();
  
  // 기반 (더 크고 높게)
  const baseGeometry = new THREE.CylinderGeometry(8, 8, 1.5, 12);
  const baseMaterial = new THREE.MeshLambertMaterial({ color: '#8b7355' });
  const base = new THREE.Mesh(baseGeometry, baseMaterial);
  base.position.y = 0.75;
  group.add(base);
  
  // 바위들 (더 크고 많이)
  for (let i = 0; i < 10; i++) {
    const angle = (i / 10) * Math.PI * 2;
    const radius = 3 + Math.random() * 2;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    
    const rockGeometry = new THREE.DodecahedronGeometry(1 + Math.random() * 0.8);
    const rockMaterial = new THREE.MeshLambertMaterial({ color: '#6b5b4f' });
    const rock = new THREE.Mesh(rockGeometry, rockMaterial);
    rock.position.set(x, 1.5 + Math.random() * 1, z);
    group.add(rock);
  }
  
  return group;
}

// 몬스터 타입별 색상 설정
export function getMonsterColor(type) {
  const colors = {
    goblin: new THREE.Color('#4a5d23'),
    orc: new THREE.Color('#6b4423'),
    troll: new THREE.Color('#4d4d4d'),
    skeleton: new THREE.Color('#d4d4aa'),
    wolf: new THREE.Color('#3d3d3d'),
    slime: new THREE.Color('#4a9d4a')
  };
  return colors[type] || new THREE.Color('#444444');
}

// 시민 외형에서 색상 추출
export function getColorFromAppearance(appearance, part = 'top') {
  if (!appearance) {
    const defaultPalette = ['#6b705c','#a5a58d','#b7b7a4','#cb997e','#ddbea9','#b08968','#7f5539','#9c6644'];
    return new THREE.Color(defaultPalette[0]);
  }
  
  if (part === 'top') {
    return new THREE.Color(appearance.outfit?.topColor || '#6b705c');
  } else if (part === 'bottom') {
    return new THREE.Color(appearance.outfit?.bottomColor || '#5c677d');
  }
  return new THREE.Color(appearance.outfit?.topColor || '#6b705c');
}

// 작업 이모지 매핑
export function getUnitJobEmoji(unit, buildings) {
  const JOB_EMOJI = { 
    town_hall:'🏛️', farm:'🌾', hunter:'🏹', gatherer:'🍃', 
    mine:'⛏️', barracks:'⚔️', mage_tower:'🔮', smithy:'🔨', 
    monster_den:'👾' 
  };
  const IDLE_EMOJI = '💤';
  
  const bid = unit.assignedBuildingId; 
  if (!bid) return IDLE_EMOJI;
  const building = buildings[bid]; 
  if (!building) return IDLE_EMOJI;
  return JOB_EMOJI[building.type] || '⚙️';
}
