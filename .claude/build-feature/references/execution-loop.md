# Execution Loop 상세 가이드

CLAUDE.md에 정의된 Agent Execution Loop의 상세 실행 절차.

## Step 1: validate.ts

```bash
npx tsx design-system/scripts/validate.ts <path-to-changed-files>
```
프로젝트 루트에서 실행. 대상 경로는 루트 기준 (예: `msm-portal/js/msm-portal-web/src/apps/msm-default/component/order/`).

### 옵션
- `--json`: JSON 형식 출력 (reviewer 연계용)
- `--quiet`: 위반 사항만 출력
- `--severity error`: error 레벨만 필터

### 위반 수정 전략
`auto-fix-loop.json`의 14개 자동 수정 전략:
1. 하드코딩 색상 → `theme.mcui.palette.*` 치환
2. 하드코딩 간격 → `theme.mcui.spacing(n)` 치환
3. 하드코딩 폰트 → `theme.mcui.typography.*` 치환
4. inline style → styled-components로 추출
5. 누락된 `$` 접두사 → transient prop에 `$` 추가
6. import 순서 → React → 3rd party → Moloco UI → @msm-portal → relative
7. 누락된 i18n → `t('key')` 래핑
8. SC 접두사 누락 → styled-component에 SC 접두사 추가

### 수정 루프
1. validate.ts 실행
2. 에러 분류 (auto_fixable / semi_auto / manual_only)
3. auto_fixable 직접 수정
4. 재실행 → 에러 0이면 통과, 아니면 반복 (최대 3회)

## Step 2: typecheck

```bash
cd msm-portal/js/msm-portal-web && pnpm typecheck
```

일반적 타입 에러:
- 누락된 props → 타입 정의 확인 후 추가
- import 경로 오류 → vite alias 확인 (`@msm-portal/*`)
- 제네릭 타입 불일치 → api-ui-contracts.json에서 정확한 타입 확인

## Step 3: screenshot

```bash
cd msm-portal/js/msm-portal-web
npx tsx e2e/screenshot-util.ts http://localhost:9000/<page-path> e2e/screenshots/<name>.png
```

전제조건: mock dev 서버 실행 중이어야 한다.
```bash
MOCK_ENABLED=true pnpm start:msm-default:test
```

## Step 4: visual verify

스크린샷을 `visual-inspection.json` 기준으로 검사:
- 색상: 브랜드(#346bea), 위험(#dd1f11), 텍스트 계층, 배경, 테두리
- 간격: 8px 그리드 정렬, 유사 요소 간 일관성
- 타이포: 제목 계층(H_1 34px > H_2 28px > H_3 18px > BODY 14px)
- 레이아웃: 정렬, 반응성, 시각적 균형
- 컴포넌트: 버튼 계층(단일 contained primary), 폼 레이블, 상태 시맨틱 색상
