# Profile Links Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox syntax for tracking.

**Goal:** 참고 이미지처럼 한국어 프로필과 링크 카드를 표시하는 반응형 페이지를 만든다.
**Architecture:** dist의 정적 HTML/CSS/JavaScript가 profile.js 설정을 읽는다. 링크 검증 로직은 URL을 판별하고 렌더러는 DOM textContent로 콘텐츠를 표시한다.
**Tech Stack:** HTML, CSS, JavaScript, Node 내장 테스트 및 HTTP 서버.
**Spec:** docs/superpowers/specs/2026-10-08-profile-links-design.md

## Global Constraints
- 최대 콘텐츠 너비 480px, 모바일 360px 및 PC 1440px 확인.
- 유효한 HTTP 또는 HTTPS 주소만 이동 링크로 사용한다.
- 최소 44px의 클릭 영역과 읽기 쉬운 대비를 유지한다.
- 외부 링크는 새 탭으로 열고 rel='noopener noreferrer'를 설정한다.
- 외부 의존성 없이 정적 파일을 제공한다.

## Review Focus
- 미설정 주소: 링크 준비 중으로 표시한다.
- javascript 및 상대 주소: 이동하지 않는다.
- 긴 한국어 및 HTML 입력: 줄바꿈하며 텍스트 그대로 표시한다.
- 이미지 실패: 기본 아바타 또는 카드 아이콘을 표시한다.
- 좁은 화면 및 키보드: 가로 넘침 없이 포커스를 표시한다.

### Task 1: 안전한 링크 설정
**Files:** dist/profile.js, dist/link-utils.js, tests/links.test.mjs
**Interfaces:** profile.js는 window.PROFILE을 제공한다. link-utils.js는 globalThis.LinkUtils.safeUrl(value): string|null을 제공하며 Node에서도 CommonJS로 읽을 수 있다.
- [x] Node 내장 테스트로 HTTP(S), 빈값, javascript, 상대 주소, 잘못된 URL 및 공백 처리 검증을 작성하고 실행해 실패 확인.
- [x] safeUrl 구현 및 예시 프로필 설정 작성.
- [x] 테스트를 재실행해 모든 사례 통과 확인.

### Task 2: 페이지와 링크 카드
**Files:** dist/index.html, dist/styles.css, dist/app.js, dist/assets/avatar.svg, README.md, serve.mjs
**Interfaces:** app.js는 PROFILE과 LinkUtils를 소비한다. serve.mjs는 dist를 localhost:4173에 제공한다.
- [x] 한국어 프로필, 소개글, 예시 링크 카드, 기본 아바타와 의미 있는 문서 구조 구현.
- [x] 분홍색 배경, 흰색 카드, 반응형 중앙 정렬, 키보드 포커스 구현.
- [x] textContent 렌더링, 비활성 링크, 새 탭 이동과 이미지 실패 처리를 구현.
- [x] README에 로컬 실행 및 프로필·사진·링크 수정 방법 작성.
- [ ] 브라우저에서 모바일/PC, 긴 텍스트, HTML 입력, 이미지 실패, 링크 준비 및 실제 링크 동작 확인.

### Task 3: 전달과 검증
- [x] 전체 테스트, JavaScript 문법 검사, 정적 파일 응답 확인.
- [x] 최종 코드 리뷰 후 중요한 문제 수정.
- [ ] 지원되는 Sites 게시 절차가 가능하면 비공개 게시. 실행 환경이 막히면 로컬 결과와 게시 제한 전달.

## 실행 결정
사용자가 계획 작성 후 계획대로 진행하도록 명시했으므로 중간 승인 요청 없이 이 세션에서 직접 실행한다. 작업 폴더는 새 프로젝트이며 Git 저장소가 없어 worktree와 Git 커밋은 적용하지 않는다.

## 검증 결과와 제한
주소 검증 10개, HTTP 응답 7개와 JavaScript 문법 검사 4개가 통과했다. 인앱 브라우저가 없어 화면·클릭·키보드 검증은 미확인이다. 게시 절차에 필요한 터미널 도구가 프로세스 생성 오류로 실행되지 않아 Sites 게시를 진행하지 않았다. 로컬 결과물을 제공한다.
