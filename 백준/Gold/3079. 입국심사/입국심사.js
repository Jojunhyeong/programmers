const fs = require('fs');
const tokens = fs.readFileSync(0, 'utf8').trim().split(/\s+/);

let p = 0;
const N = BigInt(tokens[p++]); // 심사대 수
const M = BigInt(tokens[p++]); // 사람 수

// 각 심사대 처리 시간 입력
const T = [];
let maxT = 0n;
for (let i = 0; i < Number(N); i++) {
  const t = BigInt(tokens[p++]);
  T.push(t);
  if (t > maxT) maxT = t;
}

// 이분 탐색 범위
let lo = 1n;
let hi = maxT * M;

while (lo < hi) {
  const mid = (lo + hi) / 2n;

  // mid 시간에 처리 가능한 총 인원 수 계산
  let handled = 0n;
  for (let i = 0; i < T.length; i++) {
    handled += mid / T[i];
    if (handled >= M) break; // 가지치기
  }

  if (handled >= M) {
    hi = mid; // mid 시간 안에 M명 이상 → 더 줄일 수 있음
  } else {
    lo = mid + 1n; // mid 시간으론 부족 → 늘려야 함
  }
}

console.log(lo.toString());
