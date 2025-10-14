const s = require('fs').readFileSync(0, 'utf8').trim();
const a = [...s], n = a.length;
const ans = Array(n).fill(''), out = [];

const f = (l, r) => {
  if (l > r) return;
  let m = l;
  for (let i = l + 1; i <= r; i++) if (a[i] < a[m]) m = i;
  ans[m] = a[m];
  out.push(ans.join(''));
 
  f(m + 1, r); 
  f(l, m - 1); 
};

f(0, n - 1);
console.log(out.join('\n'));
