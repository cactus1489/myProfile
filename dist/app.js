(function () {
  const profile = window.PROFILE || {};
  const name = profile.name || '나의 이름';
  document.getElementById('profile-name').textContent = name;
  document.getElementById('handle').textContent = profile.handle || '';
  document.getElementById('bio').textContent = profile.bio || '';
  document.title = name + ' · 나의 작은 공간';
  const avatar = document.getElementById('avatar');
  avatar.alt = name + ' 프로필 사진';
  avatar.addEventListener('error', () => { avatar.src = './assets/avatar.svg'; }, { once: true });
  avatar.src = profile.image || './assets/avatar.svg';
  const links = Array.isArray(profile.links) ? profile.links.filter(item => item && typeof item === 'object') : [];
  document.getElementById('link-count').textContent = String(links.length).padStart(2, '0') + ' LINKS';
  const container = document.getElementById('links');
  for (const item of links) {
    const url = LinkUtils.safeUrl(item.url);
    const card = document.createElement(url ? 'a' : 'div');
    card.className = 'link-card' + (item.featured ? ' featured' : '');
    card.dataset.ready = String(Boolean(url));
    if (url) { card.href = url; card.target = '_blank'; card.rel = 'noopener noreferrer'; }
    const thumb = document.createElement('span');
    thumb.className = 'thumb ' + (['pink','purple','green','peach','yellow'].includes(item.tone) ? item.tone : 'pink');
    thumb.setAttribute('aria-hidden', 'true');
    thumb.textContent = item.icon || '♡';
    if (item.image) {
      const image = document.createElement('img'); image.src = item.image; image.alt = ''; image.loading = 'lazy';
      image.addEventListener('error', () => { thumb.textContent = item.icon || '♡'; }, { once: true });
      thumb.replaceChildren(image);
    }
    const copy = document.createElement('div'); copy.className = 'card-copy';
    const title = document.createElement('p'); title.className = 'card-title'; title.textContent = item.title || '새 링크'; copy.append(title);
    if (item.description) { const description = document.createElement('p'); description.className = 'card-description'; description.textContent = item.description; copy.append(description); }
    if (!url) { const pending = document.createElement('span'); pending.className = 'pending'; pending.textContent = '링크 준비 중'; copy.append(pending); }
    const end = document.createElement('span'); end.className = 'card-end'; end.setAttribute('aria-hidden', 'true'); end.textContent = url ? '↗' : '·';
    if (url) card.setAttribute('aria-label', (item.title || '새 링크') + ' (새 탭에서 열림)');
    card.append(thumb, copy, end); container.append(card);
  }
  if (!links.length) { const empty = document.createElement('p'); empty.className = 'bio'; empty.textContent = '새로운 링크를 준비하고 있어요.'; container.append(empty); }
})();
