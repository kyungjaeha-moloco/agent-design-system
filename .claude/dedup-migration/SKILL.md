---
name: dedup-migration
description: "MSM Portal 크로스 클라이언트 코드 중복 제거 스킬. 4개 클라이언트(msm-default, tving, shortmax, onboard-demo) 간 92.6% 중복된 코드를 client-shared/ 레이어로 추출한다. '중복 제거', '코드 통합', 'dedup', 'deduplicate', '공유 코드 추출', 'client-shared 마이그레이션' 요청 시 이 스킬을 사용할 것. 일회성 마이그레이션 프로젝트용."
---

# Dedup Migration

크로스 클라이언트 코드 중복 제거 워크플로우. 연구 #10, #13 기반.

## 현황

- 4개 클라이언트에 506개 파일씩 중복
- 95개 바이트 동일, 369개 import 경로만 다름, 37개만 실제 다름
- 총 670,000줄 불필요 중복

## Phase 0: 사전 준비

1. `pnpm typecheck` 실행 — 현재 빌드 통과 확인
2. 37개 genuinely different 파일 목록 확인
3. 테스트 인프라 확인 (최소 스모크 테스트 필요)

## Phase 1: 공유 레이어 생성

1. `src/client-shared/` 디렉토리 생성
2. vite.config.ts에 alias 추가: `@msm-portal/client` → `src/client-shared/`
3. msm-default를 기준으로 공유 파일 복사:
   - page/ → client-shared/page/
   - container/ → client-shared/container/
   - component/ → client-shared/component/
   - hook/ → client-shared/hook/

## Phase 2: Import 경로 재작성

1. 각 클라이언트의 공유 파일에서 import를 `@msm-portal/client/`로 변경
2. 클라이언트별 다른 파일은 원래 위치 유지
3. `pnpm typecheck` 실행하여 확인

## Phase 3: 클라이언트 Config 통합

1. `MTClientConfig` 타입 정의
2. `ClientConfigProvider` 컨텍스트 생성
3. 각 클라이언트의 `clientConfig.ts` 작성
4. `useClientConfig()` 훅으로 공유 코드에서 config 접근

## Phase 4: 중복 파일 제거

1. 각 클라이언트에서 client-shared로 이동한 파일 삭제
2. `pnpm typecheck` 실행
3. 4개 클라이언트 모두 빌드 확인

## 롤백 전략

- 각 Phase 완료 후 커밋
- typecheck 실패 시 해당 Phase 롤백
- Phase별 독립적으로 롤백 가능

## 검증

- 모든 클라이언트 `pnpm typecheck` 통과
- 모든 클라이언트 `pnpm build:{client}:test` 통과
- import 경로에 이전 클라이언트별 alias 없음
