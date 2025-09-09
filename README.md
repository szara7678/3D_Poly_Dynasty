# Insu 전략 시뮬 — 클라이언트 사이드 전략 시뮬 (Vite + React + Three.js)

완전 클라이언트 사이드로 동작하는 상태 구동형 전략 시뮬레이션. 3D 에이전트 렌더러(`src/components/agents/Agents.jsx` + `components/Scene3D.jsx`)를 시뮬레이션 상태와 연결하고, 자원/세금/명성/인구/생산 루프를 시작점으로 구현합니다. GH Pages 배포 호환.

## 🚀 현재 구현 핵심

- **게임 루프**: 고정 틱(0.5s) + 저장(5초), 세금(10초)
- **상태 저장소**: 전역 `state`(불변 갱신 지향), LocalStorage 저장/로드 스텁
- **시스템**: 생산/세금/명성/건설/건물XP/간이 스폰(명성+1)
  - 시민 데이터 구조: 스탯(`STR/AGI/VIT/INT`), 스킬(재능, `Farming~Admin`), 수련치(practice: 0~5), 인벤토리, 외형
  - 시민 무작위 생성 유틸: 이름/외형/스탯/스킬(재능)/수련치를 부여해 스폰 시 자동 적용
- **HUD**: 상단 좌측 자원/인구/명성 표시(스토어 구독 기반 실시간 갱신)
- **3D 렌더**: InstancedMesh, 보행/스윙, 지형/바이옴, 상태 구동형 `props.units` 반영
- **BuildMenu**: 우측 상단에서 건물 선택 → 코스트 체크 → 건설 시작(타이머 진행) → 유휴 인원 자동 배치
 - **선택/인스펙터**: 건물 또는 시민을 클릭해 선택, 하단 인스펙터 표시(더블클릭 포커스 이동)
   - 시민 인스펙터: 가로 3단(스탯 · 스킬(재능)/수련치 병합 스크롤 · 인벤토리 스크롤)

## 🛠️ 기술 스택

- **React 18** - 사용자 인터페이스
- (직접 Three.js 제어) - 고성능 인스턴싱 기반
- **Three.js** - 3D 그래픽 라이브러리
- **Vite** - 빌드 도구 및 개발 서버
- **Tailwind CSS** - 스타일링

## 📁 프로젝트 구조

```
3d world/
├── src/
│   ├── components/
│   │   ├── Scene3D.jsx           # 메인 3D 씬 컴포넌트 (리팩토링됨)
│   │   ├── managers/             # 3D 씬 관리 모듈들
│   │   │   ├── BuildingManager.js    # 건물 렌더링 및 인스턴싱 관리
│   │   │   ├── LabelManager.js       # 건설 ETA 라벨 및 시민 이름 라벨 관리
│   │   │   ├── TownRangeManager.js   # 마을 범위 표시 및 겹침 처리
│   │   │   ├── InteractionHandler.js # 마우스 상호작용 처리
│   │   │   └── SelectionRingManager.js # 선택된 건물/유닛 링 표시
│   │   └── agents/Agents.jsx     # InstancedMesh 에이전트 렌더러(상태/자체배회 혼합)
│   ├── App.jsx                   # 게임 루프/HUD 연결
│   ├── main.jsx                  # React 진입점
│   └── index.css                 # 기본 스타일
│
│   └── game/
│       ├── state.js              # 상태/세이브/액션 + pub-sub (subscribe/notify)
│       ├── gameLoop.js           # 고정 틱 루프
│       ├── content/
│       │   ├── buildings.js
│       │   └── _defs.sample.js
│       │   └── units.js              # 시민 스키마/랜덤 롤 함수
│       ├── factory/
│       │   └── citizen.js            # createRandomCitizen(pos)
│       └── systems/
│           ├── production.js
│           ├── economy.js
│           ├── reputation.js
│           ├── construction.js
│           ├── buildingXP.js
│           └── spawn.js
├── package.json                   # 의존성 및 스크립트
├── vite.config.js                 # Vite 설정
├── index.html                     # HTML 템플릿
├── README.md                      # 프로젝트 문서
└── UPDATE.md                      # 작업 내역 기록
```

## 🎮 사용법

### 컨트롤
- 에이전트 수: 하단 UI 슬라이더(1~800)
- 카메라: 마우스 드래그 회전, 휠 줌, WASD 이동, Q/E 회전, Space/Shift 상하
- 자동 최적화: 픽셀 비율/프레임 안정화

### 애니메이션/렌더 특징(요약)
- 상태 구동형: `props.units` 좌표/방향/크기 반영, 미지정 슬롯은 내부 배회
- 지형/바이옴: `world/terrain.js` + `biomePalette.js`
- 팔다리 모션: 걷기 스윙, 몸체 바운스, 어깨 오프셋, 손 목표 보간

## 🚀 실행 방법

1. **의존성 설치**
   ```bash
   npm install
   ```

2. **개발 서버 실행**
   ```bash
   npm run dev
   ```

3. **브라우저에서 확인**
   - http://localhost:3000 으로 접속

## 📦 빌드

```bash
npm run build
npm run preview
```

## 🔧 개발 환경

- Node.js 16+
- npm 또는 yarn
- 모던 브라우저 (WebGL 지원)

## 🎨 기술적 특징

- **인스턴싱 메쉬**: 몸통, 머리, 팔, 다리 각각의 InstancedMesh 사용
- **동적 색상**: 에이전트별 고유한 파스텔 색상 할당
- **스프링 애니메이션**: 몸통 스쿼시와 머리 지연 효과
- **경계 처리**: 활동 영역 내에서 자연스러운 방향 전환
- **반응형 UI**: 다크 테마의 모던한 UI 디자인

## ⚡ 성능 최적화

- **모바일 최적화**: 자동으로 에이전트 수를 160개로 제한
- **픽셀 비율 조정**: 디바이스 성능에 따른 자동 조정
- **프레임 안정화**: 큰 프레임 변동 보호 로직

## 🔔 상태 갱신 방식

- `src/game/state.js`에 `subscribe(listener)`/`notify()`를 제공
- 틱 처리와 리소스 변경(setRes), addUnit/addBuilding 이후 `notify()` 호출
- `HUD.jsx`와 상위 `App.jsx`/`Scene3D.jsx`는 구독을 통해 리렌더/프롭스 갱신

## 🧱 Build/배치 루프(최소)

- `components/BuildMenu.jsx`: 건물 목록/코스트 표시, 클릭 시 `spend()` 후 `addBuilding()`으로 청사진 생성(`construct.active=true`/`eta` 감소)
- 신규 건물 생성 시 `idleUnits()`에서 인원을 골라 `assignUnitToBuilding()`으로 자동 배치(최대 수용 인원)
- 건설 진행은 `systems/construction.js`에서 틱마다 `progress/eta` 갱신, 완료 시 `construct.active=false`

## 라이선스

MIT License
