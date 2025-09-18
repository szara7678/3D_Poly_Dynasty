# Insu 전략 시뮬 — 클라이언트 사이드 전략 시뮬 (Vite + React + Three.js)

완전 클라이언트 사이드로 동작하는 상태 구동형 전략 시뮬레이션. 3D 에이전트 렌더러(`src/components/agents/Agents.jsx` + `components/Scene3D.jsx`)를 시뮬레이션 상태와 연결하고, 자원/세금/명성/인구/생산 루프를 시작점으로 구현합니다. GH Pages 배포 호환.

## 🚀 현재 구현 핵심

- **게임 루프**: 고정 틱(0.5s) + 저장(5초), 세금(10초)
- **상태 저장소**: 전역 `state`(불변 갱신 지향), LocalStorage 저장/로드 스텁
- **시스템**: 생산/세금/명성/건설/건물XP/간이 스폰(명성+1)
  - 밸런스 조정(2025-09-16):
    - 마을 범위(회관 레벨 1) 반경 30 → 24, 레벨 업 증가량 10 → 8
    - 명성 증가 속도 하향: 틱당 상한 0.1 → 0.05, 내부 스케일 0.7배, 합성 스케일 0.14
    - 인구 증가 속도 하향: 요소 가중합 0.8배, 최종 캡 0.05 → 0.035, 세부 확률 전반 하향
  - 시민 데이터 구조: 스탯(`STR/AGI/VIT/INT`), 스킬(재능, `Farming~Admin` — 모든 스킬 최소 1), 수련치(practice: 0~10), 인벤토리, 외형
  - 시민 무작위 생성 유틸: 이름/외형/스탯/스킬(재능)/수련치를 부여해 스폰 시 자동 적용
  - **새로운 생산 시스템**: 시간 기반 생산, 시민 숨김 처리, 생산 진행률 표시, 재능에 따른 확률적 수련치 상승
  - **자원 표시 시스템**: 건물 생산 완료 시 자원 이모지와 생산량이 건물 위에 올라가면서 사라지는 애니메이션
- **HUD**: 상단 좌측 자원/인구/명성 표시(스토어 구독 기반 실시간 갱신)
- **3D 렌더**: InstancedMesh, 보행/스윙, 지형/바이옴, 상태 구동형 `props.units` 반영
- **MainMenu**: 우상단에 건축🏗️, 건물🏠, 시민👥, 창고📦, 제작🔨, 외교🤝 버튼으로 구성된 탭 메뉴 시스템
  - 건축 탭: 건물 목록 및 건설 비용 표시, 클릭 시 건설 모드 진입
  - 건물 탭: 현재 건물 목록 표시, 클릭 시 인스펙터에서 건물 정보 확인
  - 시민 탭: 현재 시민 목록 표시, 클릭 시 인스펙터에서 시민 정보 확인
  - 창고 탭: 아이템 목록 표시, 종류별 필터링(소비/장비), 아이템 클릭 시 인스펙터 표시
  - 제작 탭: 제작 가능한 아이템 목록, 시민 숙련도 기반 제작 비용 계산, 아이템 제작
  - 외교 탭: 미구현 상태
- **선택/인스펙터**: 건물, 시민, 아이템을 클릭해 선택, 하단 인스펙터 표시(더블클릭 포커스 이동)
  - 시민 인스펙터: 가로 3단(기본정보: 직업(속한 건물)/HP(현재/최대)/MP(현재/최대)/스탯/전투스탯 · 스킬(재능)/수련치 · 인벤토리)
  - 아이템 인스펙터: 아이템 정보, 이름 변경, 사용/장착 버튼, 제작 비용 표시

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
│   │   ├── MainMenu.jsx          # 우상단 탭 메뉴 시스템 (건축/건물/시민/창고/제작/외교)
│   │   ├── HUD.jsx               # 상단 좌측 자원/인구/명성 표시
│   │   ├── Inspector.jsx        # 하단 중앙 선택된 건물/시민/아이템 정보 표시
│   │   ├── WarehouseTab.jsx    # 창고 탭 컴포넌트
│   │   ├── CraftingTab.jsx     # 제작 탭 컴포넌트
│   │   ├── ItemInspector.jsx   # 아이템 인스펙터 컴포넌트
│   │   ├── managers/             # 3D 씬 관리 모듈들
│   │   │   ├── BuildingManager.js    # 건물 렌더링 및 인스턴싱 관리
│   │   │   ├── LabelManager.js       # 건설 ETA 라벨 및 시민 이름 라벨 관리
│   │   │   ├── TownRangeManager.js   # 마을 범위 표시 및 겹침 처리
│   │   │   ├── InteractionHandler.js # 마우스 상호작용 처리
│   │   │   ├── SelectionRingManager.js # 선택된 건물/유닛 링 표시
│   │   │   └── ResourceDisplayManager.js # 건물 생산 완료 시 자원 이모지 표시
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
│       │   ├── units.js              # 시민 스키마/랜덤 롤 함수
│       │   └── items.js              # 아이템 정의 및 관리
│       ├── factory/
│       │   └── citizen.js            # createRandomCitizen(pos)
│       └── systems/
│           ├── production.js
│           ├── economy.js
│           ├── reputation.js
│           ├── construction.js
│           ├── buildingXP.js
│           ├── spawn.js
│           ├── warehouse.js         # 창고 시스템 관리
│           └── crafting.js          # 제작 시스템 관리
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
 - 렌더러 안정화: 불투명 프레임버퍼(alpha:false) + 명시적 클리어 색 적용, 언마운트 시 RAF 취소로 잔상/합성 깜빡임 예방

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

## 🚀 GitHub Pages 배포

이 프로젝트는 GitHub Pages를 통해 자동으로 배포됩니다.

### 배포 설정
- **Vite 설정**: `base: '/3d-world/'`로 설정되어 GitHub Pages의 서브디렉토리 배포에 최적화
- **GitHub Actions**: main 브랜치에 푸시할 때마다 자동으로 빌드 및 배포
- **배포 URL**: `https://[사용자명].github.io/3d-world/`

### 배포 과정
1. 코드를 main 브랜치에 푸시
2. GitHub Actions가 자동으로 빌드 실행
3. 빌드된 파일이 gh-pages 브랜치에 배포
4. GitHub Pages에서 자동으로 사이트 업데이트

### 수동 배포 (필요시)
```bash
# 로컬에서 빌드
npm run build

# gh-pages 브랜치에 수동 배포 (gh-pages 패키지 설치 필요)
npx gh-pages -d dist
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

- `components/MainMenu.jsx`: 건축 탭에서 건물 목록/코스트 표시, 클릭 시 `spend()` 후 `addBuilding()`으로 청사진 생성(`construct.active=true`/`eta` 감소)
- 신규 건물 생성 시 `idleUnits()`에서 인원을 골라 `assignUnitToBuilding()`으로 자동 배치(최대 수용 인원)
- 건설 진행은 `systems/construction.js`에서 틱마다 `progress/eta` 갱신, 완료 시 `construct.active=false`

## 라이선스

MIT License
