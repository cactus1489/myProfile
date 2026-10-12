import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
let safeUrl; try { safeUrl = require('../dist/link-utils.js').safeUrl; } catch { safeUrl = () => undefined; }
const cases = [ ['https 주소', 'https://example.com/path', 'https://example.com/path'], ['http 주소', 'http://example.com', 'http://example.com/'], ['공백 정리',' https://example.com ','https://example.com/'], ['빈 주소','',null], ['누락',undefined,null], ['실행 주소','javascript:alert(1)',null], ['상대 주소','/profile',null], ['잘못된 주소','https://',null], ['데이터 주소','data:text/html,test',null], ['숫자',123,null] ];
let failed = 0;
for (const [name, value, expected] of cases) { try { assert.equal(safeUrl(value),expected); console.log('PASS',name); } catch (error) { failed++; console.log('FAIL',name, error.message); } }
if (failed) process.exitCode = 1;
