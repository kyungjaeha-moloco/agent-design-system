# Visual Inspection — 스크린샷 기반 시각 검사

`design-system/src/visual-inspection.json`의 21개 기준 상세.

## 색상 검증

| 대상 | 기대 값 | 확인 방법 |
|------|---------|----------|
| Primary 버튼 배경 | #346bea (브랜드 블루) | 버튼 영역 색상 확인 |
| Danger/Error 텍스트 | #dd1f11 | 에러 메시지, 삭제 버튼 |
| 기본 텍스트 | content.primary 토큰 | 본문 텍스트 |
| 보조 텍스트 | content.secondary 토큰 | 설명, 힌트 텍스트 |
| 배경 | background.primary 토큰 | 페이지 배경 |
| 테두리 | border.primary 토큰 | 카드, 입력 필드 테두리 |

## 간격 검증

- 모든 간격이 8px 그리드에 맞는지 확인 (4, 8, 12, 16, 24, 32, 40, 48, 64)
- 유사 요소 간 간격이 일관적인지
- 적절한 밀도

## 타이포그래피 검증

| 요소 | 기대 크기 | 기대 무게 |
|------|----------|----------|
| H_1 | 34px | bold |
| H_2 | 28px | bold |
| H_3 | 18px | bold |
| H_4 | 16px | semibold |
| BODY | 14px | regular |
| 최소 | 12px | - |

## 레이아웃 검증

- 좌우 정렬 일관성
- 반응형 레이아웃 (1440px viewport)
- 시각적 균형 (좌우 여백 동일, 섹션 간 간격 일관)

## 컴포넌트 검증

- 버튼 계층: 한 화면에 contained primary 버튼은 하나만
- 폼 레이블: 모든 입력 필드에 레이블 존재
- 상태 시맨틱 색상: success=green, warning=amber, error=red, info=blue
- Loading state: MCCircularLoader 사용
- Empty state: 의미 있는 메시지 + 액션 제안
