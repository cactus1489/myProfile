import assert from 'node:assert/strict';
for (const file of ['/', '/styles.css', '/profile.js', '/link-utils.js', '/app.js', '/assets/avatar.svg']) {
 const response = await fetch('http://127.0.0.1:4173' + file);
 assert.equal(response.status, 200, file + ' must be served');
 assert.ok((await response.text()).length > 0);
 console.log('PASS', file);
}
const missing = await fetch('http://127.0.0.1:4173/missing'); assert.equal(missing.status,404); console.log('PASS missing file');
