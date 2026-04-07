---
name: msm-orchestrator
description: "MSM Portal 에이전트 팀 오케스트레이터. 여러 단계가 필요한 복합 작업(기능 생성+검증+테스트, DS 업데이트+리뷰 등)을 builder/reviewer/test-writer/ds-maintainer 팀으로 조율한다. '처음부터 끝까지 해줘', '만들고 검증까지', '팀으로 처리해줘', '전체 파이프라인', '기능 만들고 테스트까지', '생성하고 리뷰해줘', '만들어서 검수까지', 'full pipeline', 'end to end', 'build and review', 'build and test' 요청 시 이 스킬을 사용할 것. 이전 에이전트 결과 기반으로 '다시 해줘', '수정해줘', '보완해줘', '재실행해줘' 요청에도 사용한다. 단일 작업(리뷰만, 테스트만, 기능 생성만)은 각 전담 스킬(review-code, write-tests, build-feature)을 직접 사용할 것."
---

# MSM Portal Orchestrator

MSM Portal 개발 작업을 전문 에이전트 팀으로 조율하는 오케스트레이터.

## Phase 0: 컨텍스트 확인

1. `_workspace/` 디렉토리 존재 여부를 확인한다
2. 실행 모드를 결정한다:
   - `_workspace/` 없음 → **초기 실행**
   - `_workspace/` 있음 + 사용자가 부분 수정 요청 → **부분 재실행** (해당 에이전트만)
   - `_workspace/` 있음 + 새 입력 → **새 실행** (`_workspace/`를 `_workspace_prev/`로 이동)

## Phase 1: 작업 분류

사용자 요청을 분석하여 작업 유형을 결정한다:

| 작업 유형 | 키워드 | 에이전트 조합 |
|----------|--------|-------------|
| **새 기능 생성** | 페이지, 폼, 컴포넌트, 만들어, create, build, add | builder → reviewer → test-writer |
| **코드 리뷰** | 리뷰, 검증, 체크, review, validate, 검수 | reviewer 단독 |
| **테스트 작성** | 테스트, test, 커버리지, coverage | test-writer 단독 |
| **DS 업데이트** | 디자인 시스템, 토큰, 아이콘, 패턴, design system | ds-maintainer → reviewer |
| **중복 제거** | 중복, dedup, 통합, shared, 마이그레이션 | builder (dedup-migration 스킬) |

## Phase 2: 팀 구성

### 새 기능 생성 (파이프라인 + 생성-검증)

```
TeamCreate:
  name: "msm-feature-team"
  members:
    - builder (model: opus, agent: .claude/agents/builder.md)
    - reviewer (model: opus, agent: .claude/agents/reviewer.md)
    - test-writer (model: opus, agent: .claude/agents/test-writer.md)

TaskCreate:
  tasks:
    - id: "build"
      assignee: builder
      description: "{요구사항 상세}"
      dependencies: []
    - id: "review"
      assignee: reviewer
      description: "builder 산출물 검증"
      dependencies: ["build"]
    - id: "test"
      assignee: test-writer
      description: "생성된 코드 테스트 작성"
      dependencies: ["review"]
```

### 코드 리뷰 (단독)

```
Agent(reviewer):
  model: opus
  agent: .claude/agents/reviewer.md
  prompt: "다음 파일을 검증하라: {대상 경로}"
```

### 테스트 작성 (단독)

```
Agent(test-writer):
  model: opus
  agent: .claude/agents/test-writer.md
  prompt: "다음 파일의 테스트를 작성하라: {대상 경로}"
```

### DS 업데이트 (파이프라인)

```
TeamCreate:
  name: "msm-ds-team"
  members:
    - ds-maintainer (model: opus, agent: .claude/agents/ds-maintainer.md)
    - reviewer (model: opus, agent: .claude/agents/reviewer.md)

TaskCreate:
  tasks:
    - id: "update"
      assignee: ds-maintainer
      description: "{업데이트 상세}"
      dependencies: []
    - id: "verify"
      assignee: reviewer
      description: "JSON 정합성 검증 (DS 검증 모드: npm run validate + sync-check)"
      dependencies: ["update"]
```

## Phase 3: 실행 및 모니터링

1. 팀을 생성하고 작업을 할당한다
2. 각 작업 완료 시 결과를 확인한다
3. 생성-검증 루프를 관리한다:

### 생성-검증 루프 (새 기능 생성 시)

```
builder 완료
    ↓
reviewer 검증
    ├── 통과 → test-writer에게 전달
    ├── auto_fixable → reviewer 자체 수정 → 재검증
    ├── semi_auto → builder에게 반려 (1회만)
    │     ↓
    │   builder 수정
    │     ↓
    │   reviewer 재검증
    │     ├── 통과 → test-writer에게 전달
    │     └── 실패 → 사용자 에스컬레이션
    └── manual_only → 사용자에게 보고
```

## Phase 4: 결과 종합

1. 모든 에이전트 작업 완료를 확인한다
2. 산출물을 종합한다:
   - 생성/수정된 파일 목록
   - validate.ts 최종 점수
   - UX 평가 점수
   - 테스트 결과 (통과/실패 수)
   - 잔여 manual_only 항목
3. 사용자에게 종합 보고서를 제출한다

## Phase 5: 정리

1. 팀을 정리한다 (TeamCreate 자동 정리 또는 명시적 정리)
2. `_workspace/`에 중간 산출물을 보존한다
3. 사용자에게 피드백을 요청한다:
   - "결과에서 개선할 부분이 있나요?"
   - "에이전트 팀 구성이나 워크플로우에 바꾸고 싶은 점이 있나요?"

## 에러 핸들링

| 에러 유형 | 처리 |
|----------|------|
| builder 빌드 실패 3회 | 사용자 에스컬레이션 + 에러 로그 전달 |
| reviewer-builder 반려 후 재실패 | 사용자 에스컬레이션 + 양측 결과 비교 |
| test-writer vitest 실패 2회 | 사용자에게 보고 + 수동 디버깅 제안 |
| ds-maintainer 스키마 검증 실패 | ds-maintainer 재시도 1회 → 사용자 에스컬레이션 |
| Mock 서버 미실행 (스크린샷 불가) | 스크린샷 단계 건너뛰기 + 보고서에 명시 |

## 데이터 전달

| 전략 | 용도 |
|------|------|
| TaskCreate/TaskUpdate | 작업 할당, 진행 추적, 의존성 관리 |
| SendMessage | builder↔reviewer 반려/재요청 실시간 통신 |
| 파일 기반 | 산출물 전달: `_workspace/{phase}_{agent}_{artifact}.{ext}` |

## 테스트 시나리오

### 정상 흐름: 새 리스트 페이지

1. 사용자: "publisher 리스트 페이지 만들어줘"
2. 오케스트레이터: 작업 유형 = 새 기능 생성, 팀 구성 (builder + reviewer + test-writer)
3. builder: conventions → patterns → api-ui-contracts → components → tokens 로드, 3-layer 코드 생성, validate.ts 통과, typecheck 통과
4. reviewer: validate.ts --json 재실행, UX 평가 (목표 90+), 통과
5. test-writer: 컨테이너 테스트 + 컴포넌트 테스트 작성, vitest 통과
6. 종합 보고서 제출

### 에러 흐름: 검증 실패 + 반려

1. 사용자: "creative 생성 폼 만들어줘"
2. builder: 코드 생성 완료, validate.ts에서 warning 2개 (하드코딩 색상)
3. builder: auto-fix 시도, 1개 수정 성공, 1개 잔여
4. reviewer: validate.ts 재실행, 잔여 1개 = auto_fixable, 직접 수정
5. reviewer: UX 평가 92점, 통과
6. test-writer: 테스트 작성, vitest 통과
7. 종합 보고서 제출 (auto_fix 내역 포함)
