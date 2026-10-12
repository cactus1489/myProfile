# 나의 작은 공간

참고 이미지의 연한 분홍색 배경과 둥근 카드 느낌을 살린 모바일 프로필 링크 페이지입니다.

## 미리 보기
Node.js가 설치된 환경에서 프로젝트 폴더의 터미널에 다음을 입력합니다.

```powershell
node serve.mjs
```

브라우저에서 http://127.0.0.1:4173 을 엽니다. 서버 종료는 Ctrl+C입니다. 별도 패키지 설치나 빌드가 필요 없습니다. dist/index.html을 직접 열어 볼 수도 있습니다.

## 내 프로필로 바꾸기
`dist/profile.js`에서 name, handle, bio를 수정합니다. bio에서 \n은 줄바꿈입니다. 사진을 `dist/assets/profile.jpg`에 넣고 image를 `./assets/profile.jpg`로 바꾸세요.

## 링크 추가하기
links 배열에서 카드의 title(제목), description(설명), url(실제 주소)을 수정하세요.

```javascript
{ title: '나의 블로그', description: '일상 기록', url: 'https://실제-블로그-주소', image: './assets/blog.jpg', tone: 'green' }
```

실제 HTTP/HTTPS 주소를 넣으면 카드 전체가 클릭 가능해지며 새 탭으로 열립니다. 빈 주소와 잘못된 주소는 '링크 준비 중'으로 표시됩니다. 카드는 배열 순서대로 표시됩니다. image는 선택 사항이며 사진이 없을 때 icon을 표시합니다. tone은 pink, purple, green, peach, yellow 중 선택하세요. featured: true를 넣으면 강조 카드로 표시합니다.

현재 이름, 소개글과 카드 제목은 예시입니다. 본인의 정보로 교체하세요. 위 코드의 주소도 설명용이며 실제 주소로 바꿔야 합니다.

## 검증
`node tests/links.test.mjs`

## 배포
`dist` 폴더 전체를 정적 웹 호스팅에 올리면 됩니다. 별도 데이터베이스는 필요 없습니다. 로컬 주소는 이 PC의 미리 보기 주소이며 다른 사람이 접속할 수 있는 공개 주소는 아닙니다. profile.js를 수정한 뒤 다시 업로드하면 방문자에게 변경 사항이 표시됩니다.

HTTP 파일 응답 검사는 미리 보기 서버를 실행한 상태에서 `node tests/server.test.mjs`로 확인할 수 있습니다.

이번 환경에서는 브라우저 화면 확인과 외부 게시를 완료하지 못했습니다. 사이트 파일과 로컬 서버 동작은 검증했습니다.
텍스트 대비 회귀 검사는 `node tests/contrast.test.mjs`로 실행합니다.

## GitHub Pages 배포

대상 저장소: https://github.com/cactus1489/myProfile

1. 저장소에 이 프로젝트의 dist, tests, .github/workflows/deploy-pages.yml을 같은 구조로 업로드합니다. ZIP 자체를 업로드하지 말고 압축을 풀어 파일을 올리세요. 기존 파일이 있다면 내용을 확인하고 병합합니다.
2. 저장소 Settings → Pages → Build and deployment → Source를 GitHub Actions로 설정합니다.
3. main 브랜치에 변경을 커밋하면 자동 배포합니다. 이미 업로드한 뒤 Pages를 설정했다면 Actions → Deploy profile to GitHub Pages → Run workflow로 다시 실행합니다. 다른 브랜치를 사용한다면 deploy-pages.yml의 branches를 변경하세요.
4. Actions 실행이 성공한 뒤 표시되는 Pages 주소를 공유하세요. 커스텀 도메인이 없다면 예상 주소는 https://cactus1489.github.io/myProfile/ 입니다.

이후 dist/profile.js를 수정하고 커밋하면 자동으로 다시 배포됩니다. GitHub 무료 플랜에서는 공개 저장소로 Pages를 이용할 수 있습니다. 저장소의 현재 공개 여부와 Pages 활성화 여부는 이 환경에서 확인하지 못했습니다.

현재 환경은 GitHub 네트워크 연결이 차단되어 원격 업로드와 실제 배포를 완료하지 못했습니다. 자동 배포 설정 파일을 준비했으며, 실제 게시 완료 여부는 저장소 Actions에서 확인해야 합니다.
