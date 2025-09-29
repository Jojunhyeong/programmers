const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split('\n');
const n = +input[0];
const m = +input[1];

const adj = Array.from({ length: n + 1 }, () => []);
for (let i = 2; i < 2 + m; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  adj[a].push(b);
  adj[b].push(a);
}

const visited = Array(n + 1).fill(false);
let infected = 0;

function dfs(u) {
  visited[u] = true;
  for (const v of adj[u]) {
    if (!visited[v]) {
      infected++;
      dfs(v);
    }
  }
}

dfs(1);
console.log(infected);
