const fs = require('fs');
const arr = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
let p = 0;
const N = arr[p++], D = arr[p++], K = arr[p++], C = arr[p++];
const belt = arr.slice(p, p + N);

const cnt = Array(D + 1).fill(0);
let kinds = 0;

// 초기 윈도우 [0..K-1]
for (let i = 0; i < K; i++) {
  const s = belt[i];
  if (cnt[s] === 0) kinds++;
  cnt[s]++;
}
let answer = kinds + (cnt[C] === 0 ? 1 : 0);

// 윈도우를 N-1번 밀기 (원형)
for (let i = 1; i < N; i++) {
  // 왼쪽 제거
  const left = belt[i - 1];
  if (--cnt[left] === 0) kinds--;

  // 오른쪽 추가
  const right = belt[(i + K - 1) % N];
  if (cnt[right] === 0) kinds++;
  cnt[right]++;

  // 쿠폰 고려
  const cur = kinds + (cnt[C] === 0 ? 1 : 0);
  if (cur > answer) answer = cur;
}

console.log(answer);
