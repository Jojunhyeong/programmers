const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
let village = [];

for (let i = 1; i <= N; i++) {
    const [x, a] = input[i].split(' ').map(Number);
    village.push({ x, a });
}

// 마을 위치 기준 정렬
village.sort((a, b) => a.x - b.x);

// 총 인구 계산
const total = village.reduce((acc, cur) => acc + cur.a, 0);
const middle = Math.ceil(total / 2);

// 가중 중앙값 찾기
let sum = 0;
for (let i = 0; i < N; i++) {
    sum += village[i].a;
    if (sum >= middle) {
        console.log(village[i].x);
        break;
    }
}
