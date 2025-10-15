const data = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
let idx = 0;
const N = data[idx++];

const T = Array(N + 1);
const P = Array(N + 1);
for (let i = 1; i <= N; i++) {
  T[i] = data[idx++];  // 상담 기간
  P[i] = data[idx++];  // 보상
}

let ans = 0;

function dfs(day, sum) {
  if (day > N + 1) return;       // 일정을 넘어가면 종료
  ans = Math.max(ans, sum);      // 현재까지의 최대 수익 갱신
  if (day === N + 1) return;     // 마지막 날 도달 시 종료

  // 오늘 상담을 하는 경우
  const finish = day + T[day];
  if (finish <= N + 1) dfs(finish, sum + P[day]);

  // 오늘 상담을 안 하는 경우
  dfs(day + 1, sum);
}

dfs(1, 0);
console.log(ans);
