## 2025-09-11

- 현상: 게임 시작 직후 프레임 급락(렉)
  - 원인(복합):
    1) Scene3D 프레임 루프에서 매 프레임 라벨 전량 업데이트
    2) 라벨 매니저의 O(B*U) 스캔으로 유닛 수 증가 시 급격한 비용
    3) 상태 알림 `notify()` 다중 호출로 과도한 리렌더/씬 갱신
    4) 이벤트 리스너 바인딩이 매 인스턴스마다 새로 생성되어 dispose 미정합 가능성
  - 조치:
    - 라벨 업데이트를 구독 콜백으로 이동(상태 변경 시에만)
    - O(B+U)로 스캔 최적화(유닛 1회 순회→빌딩별 그룹화)
    - `notify()` coalescing 및 틱 배치 알림 적용
    - InteractionHandler의 리스너 바인딩 고정 및 정확한 해제 보장
  - 결과:
    - 시작 렉 해소, 틱/프레임 안정성 향상, 장시간 플레이 시 누수/스파이크 완화
 
## 2025-09-15

- 현상: 간헐적으로 그래픽이 깨지듯 잔상이 생겼다가 돌아오는 깜빡임
  - 원인(가능성):
    1) 캔버스가 `alpha:true`로 문서 배경과 합성될 때 클리어 순서/중첩 레이어에 따른 아티팩트
    2) 컴포넌트 언마운트 후에도 남아있는 `requestAnimationFrame` 중복 루프
  - 조치:
    - `WebGLRenderer`를 불투명(`alpha:false`)으로 전환, `setClearColor(0xeaf7ff,1)` 및 `autoClear=true` 명시
    - 렌더 루프에 `running` 플래그와 `rafId`를 도입하여 언마운트 시 `cancelAnimationFrame`로 정리
  - 결과:
    - 잔상/깜빡임 현상 재현 빈도 크게 감소, 탭 전환/리마운트 이후 안정성 향상
# TroubleShooting

## 2025-09-04

- 현상: `README.md`에 깨진 문자(라이선스 섹션 제목) 발견
  - 원인: 기존 문서 인코딩 상 이슈로 보임
  - 조치: "## 라이선스"로 교체하여 정규화

- 현상: `WalkingHuman3D.jsx` 발 위치가 경사면에서 미세 흔들림
  - 원인: 지면 노멀 근사(eps=0.5)로 인한 프레임별 샘플 변동
  - 조치: 발 Y는 groundHeight만 사용, 노멀은 몸 기울임 시에만 사용(향후 보완)

- 현상: `units` 미전달 시와 전달 시 애니메이션 속도 차이
  - 원인: 상태 기반일 때 `state`의 이동 속도와 보행 속도 매핑이 필요
  - 조치: 초안으로 `state`의 `u.state`에 따라 보행 강도 보정. 향후 속도 필드 매핑 예정

## 2025-01-12

- 현상: `Scene3D.jsx` 500 Internal Server Error로 로딩 실패
  - 원인: Scene3D.jsx 파일이 손상되어 import/export 구문이 없고 파일 구조가 불완전
  - 조치: Scene3D.jsx 파일을 완전히 새로 작성하여 복구

- 현상: `terrain.js` export 오류 (terrain이 export되지 않음)
  - 원인: `createTerrainSystem` 함수만 export하고 있었으나 Scene3D.jsx에서는 `terrain` 객체를 직접 import하려 함
  - 조치: terrain.js에 `export const terrain = createTerrainSystem();` 추가하여 기본 인스턴스 생성 후 export

- 현상: 건물 고스트(청사진) 메쉬가 보이지 않음
  - 원인: Scene3D.jsx 재작성 과정에서 고스트 메쉬 생성 로직이 누락됨
  - 조치: useEffect에서 state.ui.placing 상태에 따른 고스트 메쉬 생성/제거 로직 복구

- 현상: 마을 범위 겹침 시 자연스럽지 않은 표시
  - 원인: 다중 마을 회관의 범위가 겹칠 때 처리 로직이 부족
  - 조치: 겹치는 마을 범위의 투명도를 조정하여 자연스러운 합쳐진 효과 구현

- 현상: 마을 회관 건설 후 에이전트가 안 보임
  - 원인: 초기 시민 수가 0으로 설정되어 있어서 에이전트가 생성되지 않음
  - 조치: App.jsx에서 초기 시민 5명을 생성하도록 수정, construction.js의 기존 회관 건설 완료 시 시민 추가 로직은 이미 정상 작동

## 2024-12-19

- 현상: 건물이 선택한 위치와 다른 곳에 배치되거나 지형에 묻히는 문제
  - 원인: BuildingManager와 InteractionHandler에서 지형 높이를 고려하지 않음
  - 조치: 
    - BuildingManager에서 terrain.groundHeight()를 사용하여 건물 위치 계산
    - InteractionHandler에서 고스트 메쉬도 지형 높이를 고려하도록 수정
    - 건물이 지면에 올바르게 배치되도록 Y 위치 계산 개선

