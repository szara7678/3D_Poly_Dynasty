import * as THREE from "three";
import { BIOME_DEFS } from "./biomePalette";

// Simple hash/noise helpers
function hash2D(x, y) { const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453123; return s - Math.floor(s); }
function lerp(a, b, t) { return a + (b - a) * (t < 0 ? 0 : t > 1 ? 1 : t); }
function smoothstep(t) { return t * t * (3 - 2 * t); }
function noise2D(x, y) {
  const xi = Math.floor(x), yi = Math.floor(y);
  const xf = x - xi, yf = y - yi;
  const h00 = hash2D(xi, yi), h10 = hash2D(xi + 1, yi);
  const h01 = hash2D(xi, yi + 1), h11 = hash2D(xi + 1, yi + 1);
  const u = smoothstep(xf), v = smoothstep(yf);
  return lerp(lerp(h00, h10, u), lerp(h01, h11, u), v);
}
export function fbm(x, y, oct = 4, baseAmp = 0.6, baseFreq = 0.08) {
  let tot = 0, amp = baseAmp, freq = baseFreq; for (let o = 0; o < oct; o++) { tot += amp * noise2D(x * freq, y * freq); freq *= 2.0; amp *= 0.5; } return tot;
}

export const BIOMES = [
  { name: 'forest', amp: 1.2, base: -0.08 },
  { name: 'plains', amp: 0.5, base: -0.02 },
  { name: 'desert', amp: 0.35, base: 0.0 },
  { name: 'tundra', amp: 0.8, base: -0.12 },
];

export function createTerrainSystem(seed = Math.random() * 10000 + 1000) {
  function biomeAt(x, z){
    // Voronoi 모자이크 기반 바이옴 배치: 격자/밴드 아티팩트 제거
    const CELL = 90;
    const px = (x + 5000) / CELL;
    const pz = (z + 5000) / CELL;
    const ix = Math.floor(px); const iz = Math.floor(pz);
    let best = Infinity; let bx = ix, bz = iz;
    for(let dz=-1; dz<=1; dz++){
      for(let dx=-1; dx<=1; dx++){
        const cx = ix + dx; const cz = iz + dz;
        const jx = cx + hash2D(cx+seed*0.001, cz+7+seed*0.001); // 셀 랜덤 오프셋
        const jz = cz + hash2D(cx*3+13+seed*0.001, cz+seed*0.001);
        const dxp = px - jx; const dzp = pz - jz; const d2 = dxp*dxp + dzp*dzp;
        if(d2 < best){ best = d2; bx = cx; bz = cz; }
      }
    }
    const r = hash2D(bx*19+seed*0.001, bz*23+seed*0.001);
    const idx = Math.min(3, Math.floor(r * 4));
    return BIOMES[idx];
  }
  function terrainParams(x, z){ const b = biomeAt(x, z); return { amp: b.amp, base: b.base, colors: b } }
  function groundHeight(x, z){ const p = terrainParams(x, z); return p.base + fbm(x + 500, z + 500) * p.amp; }
  function groundNormal(x, z){
    const eps = 0.5;
    const hL = groundHeight(x - eps, z);
    const hR = groundHeight(x + eps, z);
    const hD = groundHeight(x, z - eps);
    const hU = groundHeight(x, z + eps);
    const n = new THREE.Vector3(hL - hR, 2*eps, hD - hU).normalize();
    return n;
  }

  function buildTerrainMesh(size = 160, seg = 180) {
    const geo = new THREE.PlaneGeometry(size, size, seg, seg); geo.rotateX(-Math.PI / 2);
    const pos = geo.attributes.position; const colors = new Float32Array(pos.count * 3);
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i), z = pos.getZ(i); const y = groundHeight(x, z); pos.setY(i, y);
      const bi = biomeAt(x, z).name;
      const pal = BIOME_DEFS[bi].ground;
      const cLow = new THREE.Color(pal.low); const cMid = new THREE.Color(pal.mid); const cHi = new THREE.Color(pal.hi);
      // 바이옴 컬러 대비를 더 크게: 단순 바이옴 색 할당 + 고도 약간만 반영
      const p = terrainParams(x, z);
      const elev = (y - p.base) / (p.amp + 1e-6);
      const mix1 = Math.min(1, Math.max(0, elev * 0.5));
      const c = cLow.lerp(cMid, mix1).lerp(cHi, Math.max(0, elev - 0.85) / 0.15);
      colors[i * 3 + 0] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b;
    }
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3)); geo.computeVertexNormals();
    const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.8, metalness: 0.0 });
    return new THREE.Mesh(geo, mat);
  }

  function scatterObjects(scene, count = 450) {
    // 간단 스캐터: 위치에 따라 바이옴별 기물 배치
    const group = new THREE.Group();
    const treeGeo = new THREE.ConeGeometry(0.35, 1.2, 8);
    const trunkGeo = new THREE.CylinderGeometry(0.08, 0.1, 0.4, 6);
    const rockGeo = new THREE.DodecahedronGeometry(0.25, 0);
    const cactusGeo = new THREE.CylinderGeometry(0.12, 0.16, 0.9, 8);
    const iceGeo = new THREE.ConeGeometry(0.28, 0.9, 6);

    const matGreen = new THREE.MeshStandardMaterial({ color: BIOME_DEFS.forest.object.tree, roughness: 0.9 });
    const matTrunk = new THREE.MeshStandardMaterial({ color: BIOME_DEFS.forest.object.trunk, roughness: 0.9 });
    const matRock = new THREE.MeshStandardMaterial({ color: BIOME_DEFS.plains.object.rock, roughness: 0.95 });
    const matCactus = new THREE.MeshStandardMaterial({ color: BIOME_DEFS.desert.object.cactus, roughness: 0.9 });
    const matIce = new THREE.MeshStandardMaterial({ color: BIOME_DEFS.tundra.object.ice, roughness: 0.95, metalness: 0.02 });

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 280; // 맵 크기에 맞게 확장
      const z = (Math.random() - 0.5) * 280;
      const y = groundHeight(x, z);
      const bi = biomeAt(x, z).name;

      if (bi === 'forest') {
        const trunk = new THREE.Mesh(trunkGeo, matTrunk); trunk.position.set(x, y + 0.2, z); group.add(trunk);
        const tree = new THREE.Mesh(treeGeo, matGreen); tree.position.set(x, y + 0.9, z); group.add(tree);
      } else if (bi === 'plains') {
        // 들판에는 바위 드물게
        if (Math.random() < 0.25) { const rock = new THREE.Mesh(rockGeo, matRock); rock.position.set(x, y + 0.15, z); rock.rotation.y = Math.random()*Math.PI; group.add(rock); }
      } else if (bi === 'desert') {
        const c = new THREE.Mesh(cactusGeo, matCactus); c.position.set(x, y + 0.45, z); group.add(c);
      } else if (bi === 'tundra') {
        const ice = new THREE.Mesh(iceGeo, matIce); ice.position.set(x, y + 0.45, z); group.add(ice);
      }
    }
    scene.add(group);
    return group;
  }

  return { biomeAt, terrainParams, groundHeight, groundNormal, buildTerrainMesh, scatterObjects };
}

// 기본 terrain 인스턴스 생성 및 export
export const terrain = createTerrainSystem();


