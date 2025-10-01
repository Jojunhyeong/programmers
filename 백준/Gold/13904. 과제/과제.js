// (d 오름차순 정렬) + 최소 힙에 점수 넣고, 힙 크기가 d를 넘으면 가장 작은 점수 제거
const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
let idx = 0;
const N = input[idx++];

const jobs = [];
for (let i = 0; i < N; i++) {
  const d = input[idx++], w = input[idx++];
  jobs.push([d, w]);
}

jobs.sort((a, b) => a[0] - b[0]);

// 최소 힙 구현 (점수 기준)
class MinHeap {
  constructor() { this.a = []; }
  size() { return this.a.length; }
  peek() { return this.a[0]; }
  push(x) {
    const a = this.a;
    a.push(x);
    let i = a.length - 1;
    while (i > 0) {
      const p = ((i - 1) >> 1);
      if (a[p] <= a[i]) break;
      [a[p], a[i]] = [a[i], a[p]];
      i = p;
    }
  }
  pop() {
    const a = this.a;
    if (a.length === 0) return undefined;
    const top = a[0];
    const last = a.pop();
    if (a.length) {
      a[0] = last;
      let i = 0;
      while (true) {
        let l = i * 2 + 1, r = l + 1, s = i;
        if (l < a.length && a[l] < a[s]) s = l;
        if (r < a.length && a[r] < a[s]) s = r;
        if (s === i) break;
        [a[i], a[s]] = [a[s], a[i]];
        i = s;
      }
    }
    return top;
  }
}

const heap = new MinHeap();

for (const [d, w] of jobs) {
  heap.push(w);
  if (heap.size() > d) {
    heap.pop();
  }
}

let ans = 0;
while (heap.size()) ans += heap.pop();

console.log(ans);
