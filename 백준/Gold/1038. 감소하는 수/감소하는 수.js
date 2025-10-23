const fs = require('fs');
const N = Number(fs.readFileSync(0, 'utf8').trim());

const nums = [];

// 현재 수 num의 마지막 자리보다 작은 숫자만 붙여서 다음 수를 만든다.
function dfs(num, lastDigit) {
  nums.push(num);
  for (let d = 0; d < lastDigit; d++) {
    dfs(num * 10 + d, d);
  }
}

dfs(0, 0);
for (let first = 1; first <= 9; first++) {
  dfs(first, first);
}

nums.sort((a, b) => a - b);
console.log(N < nums.length ? nums[N] : -1);