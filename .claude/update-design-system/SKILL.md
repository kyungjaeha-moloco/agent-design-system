---
name: update-design-system
description: "MSM Portal 디자인 시스템 JSON 파일(tokens.json, components.json, patterns.json, conventions.json 등 17개)을 업데이트하는 스킬. 컴포넌트 메타데이터 등록, 토큰 정의 변경, 패턴 추가, 아이콘 카탈로그 등록, API 매핑 수정을 수행하고, 스키마 검증 → 문서 재생성 → 동기화 체크 파이프라인을 실행한다. '디자인 시스템에 추가', '디자인 시스템 수정', '토큰 정의 바꿔', '패턴 추가', '아이콘 등록', 'components.json 업데이트', 'tokens.json 수정', 'design system JSON 수정', 'add token definition', 'register component in DS', 'update DS' 요청 시 이 스킬을 사용할 것. 주의: 페이지/컴포넌트 소스 코드(.tsx)를 생성하는 것은 build-feature를 사용할 것 — 이 스킬은 JSON 메타데이터만 다룬다."
---

# Update Design System

디자인 시스템 JSON 파일 업데이트 워크플로우.

## Step 1: 변경 대상 식별

| 변경 유형 | 대상 파일 | 스키마 |
|----------|----------|--------|
| 새 컴포넌트 | components.json | components.schema.json |
| 새 토큰 | tokens.json | tokens.schema.json |
| 새 패턴 | patterns.json | patterns.schema.json |
| 컨벤션 변경 | conventions.json | conventions.schema.json |
| API 매핑 | api-ui-contracts.json | (구조 따름) |
| 컴포넌트 행동 | component-behaviors.json | (구조 따름) |
| 상태 머신 | state-machines.json | (구조 따름) |
| 에러 패턴 | error-patterns.json | (구조 따름) |
| 코드 예시 | code-examples.json | (구조 따름) |
| 컴포넌트 의존성 | component-dependencies.json | (구조 따름) |

## Step 2: 스키마 읽기

스키마가 있는 파일: `design-system/schemas/{target}.schema.json`을 읽고 구조에 맞게 준비.

## Step 3: 현재 파일 읽기

수정 대상 JSON 파일의 기존 구조를 파악하고 삽입 위치를 결정한다.

## Step 4: 수정 적용

- JSON 문법: 2-space indent, no trailing commas, double quotes
- 삭제 금지: deprecated로 표시
- 한 파일씩 수정

### components.json 필수 필드
name, path, description, formikRequired, props[], states[], accessibility{}, dos[], donts[], example

### tokens.json 필수 필드
- color: name, token, hex, usage
- spacing: multiplier, px, usage
- typography: name, token, usage

## Step 5: 검증 파이프라인

반드시 이 순서로 실행:
```bash
cd design-system
npm run validate    # 스키마 검증
npm run generate    # docs/*.md 재생성
npm run sync-check  # 경로 동기화 확인
```

## Step 6: 예시 코드 확인

추가한 컴포넌트/토큰의 example 코드가 유효한지: import 경로 존재, props 타입 일치, 토큰 참조 정확.

## 상세 참조

- 스키마 가이드: `references/schema-guide.md`
