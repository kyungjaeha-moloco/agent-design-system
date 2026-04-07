---
name: review-code
description: "MSM Portal 코드를 검증하고 평가하는 스킬. validate.ts CLI로 16개 디자인 시스템 룰을 체크하고, UX 기준 19개를 평가하며, 스크린샷 기반 시각 검사를 수행한다. auto_fixable 위반은 자동 수정한다. '코드 리뷰', '검증해줘', '체크해줘', '린트 돌려줘', '하드코딩 체크', '스크린샷으로 검사', '시각 검사', '방금 만든 거 확인', '이상 없는지 봐줘', '테스트 파일 검증', 'review', 'validate', 'lint check', 'visual inspection', 'check for hardcoded values' 요청 시 반드시 이 스킬을 사용할 것. builder가 생성한 코드의 후속 검증, 기존 코드 품질 감사에도 사용한다."
---

# Review Code

MSM Portal 코드 품질 검증 및 평가 워크플로우.

## Step 1: validate.ts CLI 실행

```bash
npx tsx design-system/scripts/validate.ts <대상-파일-또는-디렉토리> --json
```
주의: 프로젝트 루트에서 실행. 대상 경로는 루트 기준 (예: `msm-portal/js/msm-portal-web/src/apps/msm-default/component/order/`).

16개 룰을 체크한다:
- 하드코딩 색상/간격/폰트 금지
- styled-components SC 접두사
- transient props `$` 접두사
- Formik 컨텍스트 내 폼 입력
- i18n 적용 여부
- 3-layer 아키텍처 준수
- import 순서
- inline style 금지

## Step 2: 위반 분류 및 처리

### auto_fixable (직접 수정)
| 위반 유형 | 수정 전략 |
|----------|----------|
| 하드코딩 hex 색상 | `semantic-palette.json`에서 매칭 토큰 찾아 치환 |
| 하드코딩 px 간격 | 8px 배수로 `theme.mcui.spacing(n)` 치환 |
| 하드코딩 font-size | `tokens.json` typography에서 매칭 토큰 찾아 치환 |
| 누락된 `$` 접두사 | 비HTML prop에 `$` 추가, 사용처 모두 갱신 |
| SC 접두사 누락 | styled-component 변수명에 SC 접두사 추가 |
| import 순서 | React → 3rd party → Moloco UI → @msm-portal → relative 정렬 |
| inline style | styled-component로 추출 |

수정 후 validate.ts 재실행하여 확인. 최대 3회 반복.

### semi_auto (builder에게 반려)
- 3-layer 아키텍처 위반 (Container에 UI 렌더링, Component에 hook)
- Formik 컨텍스트 외부의 폼 입력
- 비즈니스 로직이 Component에 있음

반려 시 **구체적 수정 지시**를 포함한다:
- 어떤 파일의 어떤 코드가 위반인지
- 어디로 옮겨야 하는지
- 수정 후 기대 결과

### manual_only (사용자에게 보고)
- UX 판단이 필요한 항목
- 비즈니스 로직 정합성
- 접근성 키보드 네비게이션 확인

## Step 3: UX 평가

`design-system/src/ux-criteria.json`의 19개 기준으로 평가:

| 카테고리 | 기준 예시 | 가중치 |
|---------|----------|--------|
| 정보 계층 | 명확한 제목, 시각 계층, 콘텐츠 그룹핑 | 높음 |
| 사용자 흐름 | 진입/퇴출 포인트, 성공 피드백, 에러 복구 | 높음 |
| 인터랙션 | 반응적 피드백, 검증 타이밍 | 중간 |
| 접근성 | 폼 레이블, 키보드 네비게이션 | 중간 |
| 완성도 | 모든 상태 처리, empty state 메시징 | 높음 |

점수화: 각 기준을 Pass/Partial/Fail로 평가, 가중 합산하여 총점 산출.

## Step 4: 스크린샷 시각 검사 (스크린샷 있을 때)

`design-system/src/visual-inspection.json`의 21개 기준:
- **색상**: 브랜드 #346bea, 위험 #dd1f11, 텍스트 계층, 배경, 테두리, 아이콘
- **간격**: 8px 그리드 정렬, 유사 요소 간 일관성, 밀도
- **타이포**: 제목 계층 (H_1 34px > H_2 28px > H_3 18px > H_4 16px > BODY 14px)
- **레이아웃**: 정렬, 반응성, 시각적 균형
- **컴포넌트**: 버튼 계층, 폼 레이블, 상태 시맨틱 색상, loading/empty state

## Step 5: 검증 보고서 작성

```
## 검증 보고서

**대상**: {파일 경로}
**validate.ts 점수**: {점수}/100
**UX 점수**: {점수}/100 ({등급})
**시각 검사**: {Pass/Skip}

### 위반 사항
| # | 심각도 | 유형 | 파일:라인 | 내용 | 조치 |
|---|--------|------|----------|------|------|

### auto_fix 수정 내역
{수정된 항목 목록}

### semi_auto 반려 항목
{builder에게 전달할 구체적 수정 지시}

### 사용자 확인 필요
{manual_only 항목}
```

## 상세 참조

- 16-point 자기 검증 체크리스트: `references/review-checklist.md`
- 스크린샷 시각 검사 상세: `references/visual-inspection.md`
