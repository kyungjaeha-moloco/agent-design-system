---
name: build-feature
description: "MSM Portal UI 코드를 생성하는 스킬. 새 페이지, 폼, 컴포넌트를 3-layer 아키텍처(Page→Container→Component)로 생성하고, Execution Loop(validate→typecheck→screenshot)까지 실행한다. '페이지 만들어줘', '폼 만들어줘', '화면 만들어줘', '컴포넌트 만들어줘', '리스트 페이지', '상세 페이지', '생성 페이지', '편집 페이지', '폼 필드 추가', '페이지 수정해줘', 'create page', 'new component', 'add form', 'update component', 'modify page', 'add field to form' 요청 시 반드시 이 스킬을 사용할 것. 기존 폼에 필드 추가, 기존 컴포넌트 수정, 페이지 레이아웃 변경도 포함. 주의: 디자인 시스템 JSON 파일 자체를 수정하려면 update-design-system을 사용할 것 — 이 스킬은 소스 코드(.tsx)만 다룬다."
---

# Build Feature

MSM Portal UI 기능을 생성하는 통합 워크플로우.

## Phase 1: Understand — 요구사항 분석

1. `design-system/src/index.json`의 `task_loading_guide`를 읽는다
2. 작업 유형을 분류한다:
   - **새 페이지**: list / detail / create / edit → `references/create-page.md` 로드
   - **새 폼**: create / edit with Formik → `references/create-form.md` 로드
   - **새 컴포넌트**: 재사용 가능한 UI 단위 → `references/create-component.md` 로드
   - **기존 수정**: `api-ui-contracts.json`에서 대상 엔티티 매핑 확인
3. 필요한 디자인 시스템 JSON만 선택적으로 로드한다:

| 작업 유형 | 로드할 파일 |
|----------|-----------|
| 새 페이지 | conventions.json → patterns.json → api-ui-contracts.json → components.json → tokens.json |
| 새 폼 | conventions.json → components.json (MCForm*) → state-machines.json → patterns.json |
| 새 컴포넌트 | conventions.json → components.json → tokens.json → component-dependencies.json |
| 기존 수정 | api-ui-contracts.json → components.json → tokens.json |

## Phase 2: Plan — 설계

1. 대상 패턴을 `patterns.json`에서 선택한다
2. 파일 구조를 계획한다 (`patterns.json`의 `file_checklist` 참조):
   - Page: `src/apps/{client}/page/{entity}/`
   - Container: `src/apps/{client}/container/{entity}/{action}/`
   - Component: `src/apps/{client}/component/{entity}/` 또는 `src/common/component/`
3. 컴포넌트를 선택한다 (`index.json`의 `decision_trees` 참조)
4. 모든 사용자 상태를 계획한다: loading, error, empty, success

## Phase 3: Generate — 코드 생성

1. **3-layer 순서로 생성**: Page → Container → Component
   - Page: thin wrapper만 (hook/logic 금지)
   - Container: useTranslation, useNavigate, useEntityParam, 데이터 페칭, useMemo, useCallback
   - Component: 순수 UI, props로만 데이터 수신
2. `components.json`의 `importStatement`를 그대로 사용한다
3. 토큰은 `tokens.json`에서 참조 — 하드코딩 금지:
   - 색상: `theme.mcui.palette.*`
   - 간격: `theme.mcui.spacing(n)`
   - 타이포: `theme.mcui.typography.*`
4. i18n: 모든 사용자 대면 문자열에 `useTranslation()` 적용
5. 폼: 모든 입력은 `<Formik>` 내부에서 MCForm* 컴포넌트 사용
6. styled-components: SC 접두사, 비HTML props에 `$` 접두사
7. **Route 등록** (새 페이지인 경우):
   - `src/route/types.ts`에 `MERouteKey` 추가
   - `src/app-builder/route/template/routeTemplate.tsx`에 path 등록
   - `src/apps/{client}/config/route.tsx`에 Component 매핑 + import 추가
8. **i18n 양언어 등록**:
   - `src/i18n/assets/en/sot-resource.json`에 네임스페이스 + 키 추가
   - `src/i18n/assets/ko/sot-resource.json`에 동일 구조로 한국어 번역 추가
   - 한국어 번역이 불확실하면 `[TODO: translate]` 마커 사용

## Phase 4: Validate — Execution Loop

1. **validate.ts 실행** (프로젝트 루트에서):
   ```bash
   npx tsx design-system/scripts/validate.ts msm-portal/js/msm-portal-web/src/apps/<생성된-파일-경로>
   ```
   에러 발견 시 `error-patterns.json`과 `auto-fix-loop.json` 참조하여 수정. 최대 3회 반복.

2. **typecheck 실행**:
   ```bash
   cd msm-portal/js/msm-portal-web && pnpm typecheck
   ```
   타입 에러 직접 수정, 최대 3회.

3. **mock 서버 실행 확인 및 screenshot 캡처**:
   ```bash
   # mock 서버가 실행 중인지 확인 (localhost:9000 접근 가능 여부)
   # 미실행 시 스크린샷 단계를 건너뛰고 보고서에 명시
   # 실행 중이면:
   cd msm-portal/js/msm-portal-web && npx tsx e2e/screenshot-util.ts http://localhost:9000/<page-path> e2e/screenshots/<name>.png
   ```

## Phase 5: Handoff — reviewer에게 전달

1. 산출물 목록 정리 (생성된 파일 경로, validate 결과, typecheck 결과)
2. 스크린샷 경로 포함 (있을 경우)
3. 잔여 위반 사항 명시 (있을 경우)

## 작업 유형별 상세 워크플로우

작업 유형에 따라 references/ 하위의 상세 가이드를 참조한다:
- 페이지 생성: `references/create-page.md`
- 폼 생성: `references/create-form.md`
- 컴포넌트 생성: `references/create-component.md`
- Execution Loop 상세: `references/execution-loop.md`
