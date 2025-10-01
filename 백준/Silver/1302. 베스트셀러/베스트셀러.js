const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const N = Number(input[0]);
const count = new Map();

let bestTitle = null;
let bestCount = 0;

for (let i = 1; i <= N; i++) {
  const title = input[i].trim();
  const c = (count.get(title) || 0) + 1;
  count.set(title, c);

  // 최댓값 갱신 규칙:
  // 더 많이 팔렸으면 교체
  // 동률이면 사전순으로 앞서는 제목으로 교체
  if (
    c > bestCount ||
    (c === bestCount && (bestTitle === null || title < bestTitle))
  ) {
    bestTitle = title;
    bestCount = c;
  }
}

console.log(bestTitle);
