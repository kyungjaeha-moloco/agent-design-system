# Testing Conventions — MSM Portal 테스트 컨벤션

## 도구

- **테스트 러너**: Vitest
- **컴포넌트 테스트**: React Testing Library (@testing-library/react)
- **DOM 매처**: @testing-library/jest-dom
- **환경**: jsdom
- **API 목**: MSW (Mock Service Worker)

## 파일 네이밍

- 단위 테스트: `{name}.test.ts`
- 컴포넌트 테스트: `{name}.test.tsx`
- 테스트 유틸: `src/test/utils.tsx`
- MSW 핸들러: `src/test/msw/handlers.ts`
- MSW 서버: `src/test/msw/server.ts`
- 테스트 셋업: `src/test/setup.ts`

## 테스트 셋업 (글로벌)

```tsx
// src/test/setup.ts
import '@testing-library/jest-dom';
import { vi } from 'vitest';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { language: 'en', changeLanguage: vi.fn() },
  }),
  Trans: ({ children }: any) => children,
}));

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => vi.fn(),
    useParams: () => ({}),
    useSearchParams: () => [new URLSearchParams(), vi.fn()],
  };
});
```

## 네이밍 컨벤션

- describe: 컴포넌트/함수 이름
- it: 행동 기술 (영어)
- 한국어 금지

## 커버리지 목표

| 대상 | 목표 | 근거 |
|------|------|------|
| Converters | 90%+ | 순수 함수, 비즈니스 핵심 |
| Utils | 80%+ | 공유 로직 |
| Shared Components | 60%+ | 재사용 빈도 높음 |
| Containers | 40%+ | create/edit 흐름 중심 |
| Pages | 10% | thin wrapper |

## 테스트하지 않을 것

- styled-components CSS 값 (Playwright 담당)
- 라이브러리 내부 동작
- 3rd party 라이브러리 자체 동작
