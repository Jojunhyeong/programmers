const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
let idx = 0;

const N = input[idx++];

class Heap {
  constructor(cmp) {
    this.a = [];
    this.cmp = cmp;
  }
  size() { return this.a.length; }
  peek() { return this.a[0]; }
  push(x) {
    const a = this.a;
    a.push(x);
    let i = a.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (this.cmp(a[p], a[i])) break;
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
      this.#down(0);
    }
    return top;
  }
  #down(i) {
    const a = this.a;
    const n = a.length;
    while (true) {
      let l = i * 2 + 1, r = l + 1, best = i;
      if (l < n && !this.cmp(a[best], a[l])) best = l;
      if (r < n && !this.cmp(a[best], a[r])) best = r;
      if (best === i) break;
      [a[i], a[best]] = [a[best], a[i]];
      i = best;
    }
  }
}

// 최대 힙(왼쪽 절반)
const maxHeap = new Heap((p, c) => p >= c);
// 최소 힙(오른쪽 절반
const minHeap = new Heap((p, c) => p <= c);

const out = [];

for (let i = 0; i < N; i++) {
  const x = input[idx++];

  // maxHeap가 같거나 1개 더 많도록
  if (maxHeap.size() === minHeap.size()) {
    maxHeap.push(x);
  } else {
    minHeap.push(x);
  }

  // maxHeap.peek() <= minHeap.peek()가 되게
  if (minHeap.size() && maxHeap.peek() > minHeap.peek()) {
    const a = maxHeap.pop();
    const b = minHeap.pop();
    maxHeap.push(b);
    minHeap.push(a);
  }

  // 현재 중앙값은 항상 maxHeap의 루트
  out.push(String(maxHeap.peek()));
}

console.log(out.join('\n'));
