const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
let idx = 0;
const N = input[idx++];
const H = input.slice(idx, idx + N);

let answer = 0;

for (let i = 0; i < N; i++) {
  let cnt = 0;

  // 오른쪽: 기울기 최대 갱신
  let maxSlope = -Infinity;
  for (let j = i + 1; j < N; j++) {
    const slope = (H[j] - H[i]) / (j - i);
    if (slope > maxSlope) {
      maxSlope = slope;
      cnt++;
    }
  }

  // 왼쪽: 기울기 최소 갱신
  let minSlope = Infinity;
  for (let j = i - 1; j >= 0; j--) {
    const slope = (H[j] - H[i]) / (j - i);
    if (slope < minSlope) {
      minSlope = slope;
      cnt++;
    }
  }

  if (cnt > answer) answer = cnt;
}

console.log(answer);
