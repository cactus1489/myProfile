(function (root) {
  function safeUrl(value) {
    if (typeof value !== 'string' || !value.trim()) return null;
    try { const url = new URL(value.trim()); return ['http:', 'https:'].includes(url.protocol) ? url.href : null; } catch { return null; }
  }
  root.LinkUtils = { safeUrl };
  if (typeof module !== 'undefined') module.exports = { safeUrl };
})(globalThis);
