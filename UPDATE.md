# UPDATE.md - 프로젝트 작업 내역

## 2024년 12월 19일

### 🚀 프로젝트 초기 설정 완료

#### 생성된 파일들:
1. **package.json** - React Three Fiber 프로젝트 의존성 설정
   - React 18, @react-three/fiber, @react-three/drei, Three.js 포함
   - Vite 빌드 도구 설정

2. **index.html** - 메인 HTML 템플릿
   - Tailwind CSS CDN 연결
   - React 앱 마운트 포인트 설정

3. **vite.config.js** - Vite 설정 파일
   - React 플러그인 설정
   - 개발 서버 포트 3000 설정

4. **src/main.jsx** - React 앱 진입점
   - React 18 StrictMode 설정

5. **src/App.jsx** - 메인 App 컴포넌트
   - WalkingHuman3D 컴포넌트 렌더링

6. **src/index.css** - 기본 스타일
   - 전역 CSS 리셋 및 기본 폰트 설정

7. **src/components/WalkingHuman3D.jsx** - 3D 걷는 사람 컴포넌트
   - 기존 파일을 components 폴더로 이동
   - 스틱 피규어 애니메이션 로직 포함

8. **README.md** - 프로젝트 문서
   - 기능 설명, 사용법, 기술 스택 정보

#### 핵심 기능:
- **3D 현실적 캐릭터**: 근육 정의, 체형 커스터마이징이 가능한 사람 모양
- **절차적 걷기 애니메이션**: 수학적 계산을 통한 자연스러운 걷기 동작
- **실시간 컨트롤**: WASD 이동, Shift 달리기, Space 카메라 모드 토글
- **고급 커스터마이징**: 피부색, 의상색, 체형, 근육량, 체지방률 조절
- **향상된 조명**: 다중 조명과 그림자로 현실감 증대

#### 다음 단계:
- `npm install` 실행하여 의존성 설치
- `npm run dev` 실행하여 개발 서버 시작
- 브라우저에서 http://localhost:3000 접속하여 3D 애니메이션 확인

---

## 2024년 12월 19일 (추가)

### 🎮 3D 에이전트 인스턴싱 시스템 완전 교체

#### 변경된 파일:
1. **src/components/WalkingHuman3D.jsx** - 완전히 새로운 코드로 교체
   - 기존 단일 캐릭터 시스템을 다중 에이전트 인스턴싱 시스템으로 변경

#### 새로운 핵심 기능:
- **다중 에이전트 시뮬레이션**: 최대 800개까지의 귀여운 캐릭터 동시 렌더링
- **고성능 인스턴싱**: InstancedMesh를 사용한 최적화된 렌더링
- **파스텔 톤 색상**: 골든레시오 기반의 귀여운 파스텔 색상 시스템
- **유기적 움직임**: 각 에이전트별 개별적인 보행 패턴과 방향 변화
- **실시간 에이전트 수 조절**: 슬라이더로 1~800개 에이전트 수 조절
- **자동 성능 최적화**: 모바일 기기에서 자동으로 에이전트 수 감소

#### 기술적 특징:
- **인스턴싱 메쉬**: 몸통, 머리, 팔, 다리 각각의 InstancedMesh 사용
- **동적 색상**: 에이전트별 고유한 파스텔 색상 할당
- **스프링 애니메이션**: 몸통 스쿼시와 머리 지연 효과
- **경계 처리**: 활동 영역 내에서 자연스러운 방향 전환
- **반응형 UI**: 다크 테마의 모던한 UI 디자인

#### 성능 최적화:
- **모바일 최적화**: 자동으로 에이전트 수를 160개로 제한
- **픽셀 비율 조정**: 디바이스 성능에 따른 자동 조정
- **프레임 안정화**: 큰 프레임 변동 보호 로직

#### 사용법:
- **에이전트 수 조절**: 하단 UI의 슬라이더로 1~800개 조절
- **카메라 조작**: 마우스 드래그로 회전, 휠로 줌
- **자동 최적화**: 성능에 따라 자동으로 설정 조정

---

## 2025년 09월 04일

### 🧱 게임 스캐폴딩 추가 및 보행 물리 개선

#### 추가/수정 파일
1. `src/game/state.js` — 전역 상태/세이브/간단 액션(uid/addUnit/addBuilding)
2. `src/game/gameLoop.js` — 고정 틱 루프(0.5s), 세금/저장 타이머
3. `src/game/content/_defs.sample.js`, `content/buildings.js` — 건물 정의 템플릿
4. `src/game/systems/*` — `production/economy/reputation/construction/buildingXP/spawn`
5. `src/components/HUD.jsx` — 자원/인구/명성 HUD
6. `src/App.jsx` — 게임 루프/HUD 연결, 초기 상태 샘플 주입
7. `src/components/WalkingHuman3D.jsx` — 발 고정(foot planting) + 지면 추종 + `props.units/timeScale` 지원

#### 주요 변화
- 보행: 지지발 고정, 스윙발 곡선 이동, 경사 정상화 기반 지면 높이 추종
- 렌더: `units`가 주어지면 상태 구동형 좌표/방향/크기 반영, 없으면 기존 배회 유지(혼합 모드)
- 시뮬: 생산/세금/명성/건설/건물XP/간이 스폰 루프 작동

#### 다음 권장 작업
- BuildMenu/SelectionOverlay/Inspector 구현(입력→명령)
- construction/assignment 상세 구현(코스트/시간/배치)
- worldAI/spawn/combat 루프 최소 버전

## 2025년 09월 05일

### 🔁 상태 구독/알림(pub-sub) 도입 및 UI/렌더 반응형 전환

#### 변경 파일
1. `src/game/state.js`
   - `subscribe(listener)`/`notify()` 이벤트 버스 추가
   - `setRes`/`addUnit`/`addBuilding`에서 `notify()` 호출
2. `src/game/gameLoop.js`
   - 고정 틱 루프에서 `state.tick++` 직후 `notify()` 호출
3. `src/components/HUD.jsx`
   - 스토어 구독으로 자동 리렌더(실시간 자원/인구/명성 반영)
4. `src/components/agents/Agents.jsx`
   - `props.units` 반영: 외부 상태 기반 위치/방향/크기 렌더
   - 남는 슬롯은 내부 배회(혼합 모드 유지)
5. `src/components/Scene3D.jsx`
   - 변경 없음(하위 Agents가 상태 기반 렌더 지원)
6. `README.md`
   - 상태 구독/알림 방식 문서화 및 구조/설명 최신화

#### 효과
- HUD 수치가 틱/시스템 처리에 맞춰 즉시 갱신
- 에이전트가 외부 상태(`units`) 좌표를 따라 움직임
- 기존 랜덤 배회 시각도 유지되어 가시성/몰입 유지

### 🧱 Build/배치 최소 루프 추가

#### 추가/수정 파일
1. `src/components/BuildMenu.jsx`
   - 우측 상단 건설 메뉴 UI(코스트 표시/건설 버튼)
   - 클릭 시 비용 차감 후 건물 생성(건설 진행 시작), 유휴 인원 자동 배치
2. `src/game/state.js`
   - `canAfford`/`spend` 추가(코스트 체크/지출)
   - `assignUnitToBuilding`/`unassignUnit`/`idleUnits` 추가(배치/해제/유휴 조회)
3. `src/App.jsx`
   - `BuildMenu` 추가 렌더

#### 동작
- 건설 클릭 → 자원 확인/차감 → 건물 청사진 생성(`construct.active=true`) → 자동 배치
- `systems/construction.js`에서 `eta/progress` 감소 → 완료 시 활성화

### 🧭 2025년 09월 05일 (추가)

#### 🧊 배치 고스트/반경 예외/건물 렌더
- 배치 모드에서 마우스를 따라가는 청사진(투명 상자) 표시, 반경 내 유효 시 초록/불가 시 빨강
- 마을 회관은 반경 제한 미적용(어디든 건설 가능)
- 건물 렌더: InstancedMesh 박스 메쉬, 진행도에 따라 높이 증가로 공사 시각화

### 🧩 2025년 09월 06일

#### 🛡️ 배치 규칙 강화 + 시각화 개선
- BUILDING_DEFS에 `placeRadius` 추가(타입별 반경) → 겹침 판정은 두 건물 반지름 합으로 계산
- 고스트 스케일/배경 오브젝트 제거 반경을 `placeRadius` 기반으로 자동 조정
- 회관 반경 표시: 은은한 채움 + 진한 테두리 + 점선 + 반투명 벽(높이 2.5)
- 배치 불가(반경 밖/겹침)일 때 고스트·링·벽이 빨강으로 바뀌며 클릭도 무시

#### 🏗️ 배경 오브젝트 정리
- 배치 시 주변 반경 내 나무/선인장/바위/얼음 메쉬를 제거하여 건설 공간 확보
- 스캐터를 하나의 `Group`으로 관리해 성능/정리 용이

#### 🖱️ 선택/인스펙션
- 더블클릭으로 건물 선택 → 반경 기반 선택 링 표시, 카메라가 부드럽게 포커스 이동
- `Inspector` 패널 추가: 이름/레벨/HP/XP/공사 ETA·진행률, 배치 인원/유휴 인원 관리(배치/해제)

### 🧍‍♂️ 캐릭터 비율 및 모션 리파인

#### 수정 파일
- `src/components/WalkingHuman3D.jsx`

#### 변경 사항
- 얼굴 배치 보정: 눈 간격/높이/앞쪽 오프셋을 현실 비율에 가깝게 조정
- 팔다리 부착점 개선: 어깨 높이 상승, 약간의 전방 오프셋, 고관절 높이 하향 조정
- 보행 리듬 강화: 골반 좌우 스웨이, 상하 바운스, 어깨의 미세 요우/롤 추가로 자연스러운 실루엣
- 팔 스윙 개선: 전후 스윙과 약간의 좌우 흔들림 추가, 손 목표점 곡선 보정
- 입 위치 소폭 상향으로 표정 자연스러움 향상

### 🌍 지형 바이옴 시스템 + 현실적인 팔레트

#### 수정 파일
- `src/components/WalkingHuman3D.jsx`
- `src/world/terrain.js` (신규)

#### 변경 사항
- 팔: 긴 원통 대신 짧은 팔 + 구형 손 파트 추가, 다리 제거
- 상태 기반 모션: 
  - 걷기: 팔 전후 스윙, 몸 상하 바운스
  - 작업(채광/농사/벌목): 양손 위→아래 반복 동작 (느린 속도로 개선)
- 색상 팔레트: 기본값을 `realistic`로 변경(채도↓, 명도↓, 어스톤)
- 지형 모듈화: `src/world/terrain.js`로 분리하여 재사용성 향상
- 바이옴 분포 개선: 맵 크기 300x300으로 확장, 모든 바이옴이 균등하게 나타나도록 조정
- 바이옴별 오브젝트: 숲(나무+줄기), 평원(바위), 사막(선인장), 설원(얼음기둥) 스캐터링
- 오브젝트 밀도 증가: 1200개로 증가하여 바이옴 구분 명확화

#### 기대 효과
- 활동 종류에 따른 동작 차별화로 가독성과 몰입감 향상
- 맵이 생성될 때마다 규칙 있는 랜덤 바이옴 배치로 탐색 재미 증대
- 모든 바이옴이 맵에 균등하게 분포하여 다양성 확보

#### 기대 효과
- 팔다리가 몸통에 ‘붙어 있는’ 느낌 강화, 전신 균형감 개선
- 보행 중 무게중심 이동이 느껴져 더 사람다운 움직임 연출

## 2024년 12월 19일 (오류 수정)

### 🔧 Flow 타입 문법 오류 수정

#### 발생한 문제:
- **Babel 오류**: Flow 타입 문법이 지원되지 않아 컴파일 실패
- **오류 메시지**: "Support for the experimental syntax 'flow' isn't currently enabled"

#### 수정 내용:
1. **src/components/WalkingHuman3D.jsx** - Flow 타입 문법 완전 제거
   - `export type CuteAgents3DProps` 제거
   - `type Agent`, `type Parts` 등 모든 타입 정의 제거
   - 함수 매개변수의 타입 어노테이션 제거
   - `useRef<HTMLDivElement | null>(null)` → `useRef(null)` 변경

#### 수정된 구조:
- **순수 JavaScript**: 모든 Flow 타입 문법을 제거하고 일반 JavaScript로 변경
- **React 컴포넌트**: 기존 기능은 그대로 유지하면서 타입 문법만 제거
- **호환성 향상**: Babel 설정 없이도 정상 동작

#### 결과:
- ✅ 컴파일 오류 해결
- ✅ 개발 서버 정상 실행 가능
- ✅ 모든 기능 정상 동작
- ✅ 모바일 최적화 및 성능 최적화 유지

---

## 2025-01-12 - 주요 시스템 오류 해결

### 📋 작업 개요
**Scene3D.jsx 500 오류 및 관련 시스템 문제들을 종합적으로 해결**

사용자 보고 문제:
- Scene3D.jsx 파일 로딩 시 500 Internal Server Error
- 건물 고스트(청사진) 렌더링 안됨
- 마을 범위 겹치는 부분이 자연스럽지 않음
- 마을 회관 건설 시 에이전트 생성 문제

### 🔧 수정 사항

#### 1. Scene3D.jsx 완전 복구
**파일**: `src/components/Scene3D.jsx`
- **문제**: 파일이 손상되어 import/export 구문이 없고 구조가 불완전
- **해결**: 파일을 완전히 새로 작성하여 복구
  - React/Three.js 기본 구조 복구
  - 건물 인스턴싱 메쉬 시스템 복구
  - 건설 ETA 라벨 시스템 복구
  - 마우스 상호작용 (배치/선택) 복구
  - 카메라 포커스 및 키보드 컨트롤 복구

#### 2. terrain.js export 오류 해결
**파일**: `src/world/terrain.js`
- **문제**: `createTerrainSystem` 함수만 export하고 있어서 Scene3D.jsx에서 terrain 객체를 직접 import할 수 없음
- **해결**: 기본 terrain 인스턴스를 생성하여 export
```javascript
// 추가된 코드:
export const terrain = createTerrainSystem();
```

#### 3. 건물 고스트 메쉬 시스템 복구
**파일**: `src/components/Scene3D.jsx`
- **기능**: 배치 모드에서 건물 청사진 렌더링
- **구현**: 
  - state.ui.placing 상태에 따른 고스트 메쉬 생성/제거
  - 마우스 위치 추적 및 유효성 검사에 따른 색상 변경
  - 건물 크기에 맞는 스케일링

#### 4. 마을 범위 겹침 자연스러운 처리
**파일**: `src/components/Scene3D.jsx`
- **기능**: 다중 마을 회관의 범위가 겹칠 때 자연스러운 병합 효과
- **구현**:
  - 겹치는 마을 범위 감지 로직
  - 겹치는 부분의 투명도 조정 (opacity 감소)
  - 시각적으로 자연스러운 병합 효과

#### 5. 초기 에이전트 생성 문제 해결
**파일**: `src/App.jsx`
- **문제**: 초기 인구수가 0으로 설정되어 에이전트가 보이지 않음
- **해결**: 게임 시작 시 기본 시민 5명 생성
```javascript
// 수정된 코드:
const initialPopulation = 5;
for(let i=0;i<initialPopulation;i++){
  // 시민 생성 로직
}
state.population = initialPopulation;
```

### 📊 시스템 상태

#### 렌더링 시스템:
- ✅ Scene3D.jsx 완전 복구
- ✅ 건물 인스턴싱 메쉬 정상 작동
- ✅ 건물 고스트 렌더링 복구
- ✅ 마을 범위 표시 및 겹침 처리 개선
- ✅ 건설 ETA 라벨 시스템 정상 작동

#### 게임 시스템:
- ✅ 초기 시민 5명 생성
- ✅ 마을 회관 건설 시 시민 추가 (기존 로직 정상)
- ✅ 에이전트 렌더링 및 애니메이션 정상
- ✅ 건물 배치 및 상호작용 정상

#### 성능 최적화:
- ✅ InstancedMesh 기반 건물 렌더링
- ✅ 프레임 안정화 로직 유지
- ✅ 모바일 최적화 유지

### 🎯 결과
- ✅ Scene3D.jsx 500 오류 완전 해결
- ✅ 건물 고스트 렌더링 정상 작동
- ✅ 마을 범위 겹침 자연스러운 병합 효과
- ✅ 에이전트 생성 및 렌더링 정상 작동
- ✅ 모든 3D 렌더링 시스템 정상화
- ✅ 게임 플레이 완전 복구

---

## 2025-01-12 - 초기 시민 설정 및 마을 회관 시민 생성 개선

### 📋 작업 개요
**초기 시민을 0명으로 되돌리고 마을 회관 건설 시 시민 생성 문제 해결**

### 🔧 수정 사항

#### 1. 초기 시민 수 조정
**파일**: `src/App.jsx`
- **변경**: 초기 시민 5명 → 0명으로 변경
- **목적**: 마을 회관 건설을 통해서만 시민을 얻도록 게임 플레이 조정

#### 2. 마을 회관 시민 생성 개선
**파일**: `src/game/systems/construction.js`
- **개선사항**:
  - 명시적 `notify()` 호출 추가로 UI 업데이트 보장
  - 디버깅용 console.log 추가로 시민 생성 과정 추적
  - 시민 생성 및 위치 정보 로깅

```javascript
// 추가된 개선사항:
console.log(`마을 회관 건설 완료! 시민 3명 추가`);
console.log(`시민 ${i+1} 생성: 위치 (${ux.toFixed(1)}, ${uz.toFixed(1)})`);
notify(); // 명시적 상태 변경 알림
console.log(`총 시민 수: ${Object.keys(state.units).length}, 인구: ${state.population}`);
```

### 🎯 결과
- ✅ 초기 시민 0명으로 조정
- ✅ 마을 회관 건설 시 시민 3명 생성 로직 개선
- ✅ UI 업데이트 보장을 위한 명시적 notify() 호출
- ✅ 디버깅 정보 추가로 문제 추적 가능
