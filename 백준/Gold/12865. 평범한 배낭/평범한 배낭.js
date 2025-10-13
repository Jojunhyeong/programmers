const input = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

const N = input[0];
const K = input[1];

const items = [];
for (let i = 0; i < N; i++) {
  const weight = input[2 + i * 2];
  const value = input[3 + i * 2];
  items.push([weight, value]);
}

const dp = Array(K + 1).fill(0);

for (const [w, v] of items) {
  for (let c = K; c >= w; c--) {
    dp[c] = Math.max(dp[c], dp[c - w] + v);
  }
}

console.log(dp[K]);
