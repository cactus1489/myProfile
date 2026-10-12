import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
const css=await fs.readFile(new URL('../dist/styles.css',import.meta.url),'utf8');
const colors=[css.match(/--muted:(#[0-9a-f]{6})/i)[1],css.match(/\.pending\{[^}]*color:(#[0-9a-f]{6})/i)[1]];
function luminance(hex){const rgb=hex.slice(1).match(/../g).map(v=>parseInt(v,16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4);return rgb[0]*.2126+rgb[1]*.7152+rgb[2]*.0722;}
for(const color of colors){const ratio=1.05/(luminance(color)+.05);assert.ok(ratio>=4.5,color+' small text contrast: '+ratio.toFixed(2));console.log('PASS text contrast',color,ratio.toFixed(2));}
