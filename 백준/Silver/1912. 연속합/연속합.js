const fs = require('fs');
const tokens = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

let p = 0;
const N = tokens[p++];
const arr = tokens.slice(p, p + N);

let best = arr[0];     // 지금까지 본 최대 연속합
let cur = arr[0];      // 현재 위치에서 끝나는 최대 연속합

for (let i = 1; i < N; i++) {
  cur = Math.max(arr[i], cur + arr[i]);
  best = Math.max(best, cur);
}

console.log(best);
