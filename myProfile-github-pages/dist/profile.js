// 이 파일에서 프로필과 링크를 수정하세요. 저장한 뒤 미리 보기 화면을 새로고침하세요.
window.PROFILE = {
  name: '나의 이름', // 화면에 표시할 이름
  handle: '@your_name', // 내 아이디
  bio: '좋아하는 것들을 모아두는 작은 공간.\n나의 일상과 취향을 함께 나눠요 🌷', // 소개글 (\n은 줄바꿈)

  // 프로필 사진: dist/assets에 사진을 넣고 아래 경로를 './assets/profile.jpg'처럼 바꾸세요.
  image: './assets/avatar.svg',

  // 링크는 아래 3개입니다. url의 작은따옴표 안에 실제 https:// 주소를 넣으세요.
  // 주소를 비워두면 '링크 준비 중'으로 표시됩니다.
  links: [
    {
      title: '처음 오셨다면, 여기부터', // 링크 제목
      description: '나를 조금 더 알아가는 이야기', // 짧은 설명
      url: '', // 첫 번째 링크 주소
      // image: './assets/link1.jpg', // 카드 사진: assets에 사진을 넣고 맨 앞의 //를 지우세요.
      icon: '♡', // 카드 사진이 없으면 표시할 아이콘
      tone: 'pink',
      featured: true
    },
    {
      title: '나의 인스타그램',
      description: '소소한 일상과 오늘의 기록',
      url: '', // 두 번째 링크 주소
      // image: './assets/link2.jpg', // 카드 사진 (선택 사항)
      icon: '◎',
      tone: 'purple'
    },
    {
      title: '나의 블로그',
      description: '차곡차곡 쌓아가는 생각들',
      url: '', // 세 번째 링크 주소
      // image: './assets/link3.jpg', // 카드 사진 (선택 사항)
      icon: '✎',
      tone: 'green'
    }
  ]
};
