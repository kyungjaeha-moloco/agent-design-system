---
name: write-tests
description: "MSM Portal 테스트를 작성하는 스킬. Vitest + React Testing Library로 단위/컴포넌트/컨테이너 테스트를 생성하고, MSW로 API 목을 설정한다. '테스트 작성', '테스트 추가', '테스트 만들어줘', '커버리지 높여줘', '커버리지 올려줘', 'MSW 핸들러 추가', 'mock 설정', '실패하는 테스트 고쳐줘', '단위 테스트', 'unit test', 'component test', 'container test', 'snapshot test', 'add tests', 'write tests', 'fix failing test', 'mock API' 요청 시 반드시 이 스킬을 사용할 것. 새 기능 생성 후 테스트 작성, 기존 테스트 수정/보강에도 사용한다."
---

# Write Tests

MSM Portal 테스트 작성 워크플로우.

## Step 1: 대상 분석

1. 테스트 대상 파일을 읽는다
2. 레이어를 식별한다:
   - Page (`src/apps/{client}/page/`) → 스냅샷만
   - Container (`src/apps/{client}/container/`) → 훅 + 에러 처리 + 데이터 변환
   - Component (`src/apps/{client}/component/` 또는 `src/common/component/`) → props 렌더링 + 인터랙션
   - Utils/Converters (`src/common/utils/`) → 순수 함수 단위 테스트
3. `design-system/src/code-examples.json`에서 유사 패턴을 확인한다
4. `design-system/src/error-patterns.json`에서 관련 에러 패턴을 확인한다

## Step 2: 테스트 계획

### 레이어별 테스트 전략

| 레이어 | 테스트 종류 | 커버리지 목표 | 우선순위 |
|--------|-----------|-------------|---------|
| Utils/Converters | 순수 함수 단위 테스트 | 90%+ | 최고 |
| Component | props 렌더링, 인터랙션, a11y | 60%+ | 높음 |
| Container | 훅 동작, 에러 처리, 데이터 변환 | 40%+ | 중간 |
| Page | 스냅샷 스모크 테스트 | 10% | 낮음 |

### 테스트 케이스 설계
- **정상 경로**: 기본 렌더링, 주요 인터랙션
- **에러 경로**: API 에러, 검증 실패, 빈 데이터
- **경계 조건**: 빈 배열, null 값, 최대 길이
- **error-patterns.json 기반**: 22개 알려진 에러 재현 테스트

## Step 3: 테스트 작성

### 파일 위치
- `src/common/utils/__tests__/{name}.test.ts` — 유틸 테스트
- `src/apps/{client}/component/{entity}/__tests__/{name}.test.tsx` — 컴포넌트 테스트
- `src/apps/{client}/container/{entity}/__tests__/{name}.test.tsx` — 컨테이너 테스트
- MSW 핸들러: `src/test/msw/handlers.ts`

### 필수 import 패턴
```tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@moloco/moloco-cloud-react-ui';
import { describe, it, expect, vi } from 'vitest';
```

### 테스트 유틸리티
```tsx
// renderWithTheme — 모든 컴포넌트 테스트에 사용
function renderWithTheme(ui: React.ReactElement) {
  return render(
    <ThemeProvider theme={theme}>{ui}</ThemeProvider>
  );
}

// renderWithFormik — 폼 컴포넌트 테스트에 사용
function renderWithFormik(ui: React.ReactElement, initialValues = {}) {
  return render(
    <ThemeProvider theme={theme}>
      <Formik initialValues={initialValues} onSubmit={vi.fn()}>
        {ui}
      </Formik>
    </ThemeProvider>
  );
}
```

## Step 4: MSW 설정 (컨테이너 테스트용)

상세 MSW 패턴은 `references/msw-patterns.md` 참조.

```tsx
// 기본 패턴
import { server } from '../test/msw/server';
import { http, HttpResponse } from 'msw';

// 에러 시뮬레이션
server.use(
  http.get('/api/orders', () => new HttpResponse(null, { status: 500 }))
);
```

## Step 5: 실행 및 검증

```bash
cd msm-portal/js/msm-portal-web && npx vitest run <테스트-파일-경로>
```

실패 시 디버깅 순서:
1. import 경로 확인 (vite alias)
2. mock 설정 확인 (i18n, router, API)
3. 비동기 처리 확인 (waitFor, act)
4. 최대 2회 자체 수정

## 상세 참조

- 테스트 컨벤션: `references/testing-conventions.md`
- MSW 패턴: `references/msw-patterns.md`
