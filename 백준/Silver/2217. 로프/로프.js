const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n").map(Number);

const N = input[0];
const ropes = input.slice(1);

ropes.sort((a, b) => a - b);

let answer = 0;

// W / k <= min   W = min * k
// 각 로프를 최소값으로 가정했을 때 들 수 있는 무게 계산
for (let i = 0; i < N; i++) {
  const weight = ropes[i] * (N - i); // 최소 로프 × 사용 로프 개수
  answer = Math.max(answer, weight);
}

console.log(answer);
