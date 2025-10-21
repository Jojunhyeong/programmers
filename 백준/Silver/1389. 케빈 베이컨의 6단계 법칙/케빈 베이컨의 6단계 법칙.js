const fs = require('fs');
const a = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
let p = 0;

const N = a[p++], M = a[p++];
const g = Array.from({ length: N + 1 }, () => []);

for (let i = 0; i < M; i++) {
  const u = a[p++], v = a[p++];
  g[u].push(v);
  g[v].push(u);
}

function bfs(start) {
  const dist = Array(N + 1).fill(-1);
  const q = [start];
  dist[start] = 0;
  let sum = 0;

  while (q.length) {
    const v = q.shift();
    for (const nv of g[v]) {
      if (dist[nv] === -1) {
        dist[nv] = dist[v] + 1;
        sum += dist[nv];
        q.push(nv);
      }
    }
  }
  return sum;
}

let best = Infinity;
let who = 1;

for (let i = 1; i <= N; i++) {
  const score = bfs(i);
  if (score < best) {
    best = score;
    who = i;
  }
}

console.log(who);
