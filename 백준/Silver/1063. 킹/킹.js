const fs = require('fs');
const t = fs.readFileSync(0, 'utf8').trim().split(/\s+/);

const cols = ['A','B','C','D','E','F','G','H']; // 체스판의 열(가로)

// 문자열 좌표 → 숫자 좌표 변환
let kx = cols.indexOf(t[0][0]);
let ky = Number(t[0][1]) - 1;
let sx = cols.indexOf(t[1][0]);
let sy = Number(t[1][1]) - 1;

const N = +t[2];                 // 명령 개수
const cmds = t.slice(3, 3 + N);  // 명령어 목록

// 8방향 이동 벡터
const d = {
  R:[1,0], L:[-1,0], B:[0,-1], T:[0,1],
  RT:[1,1], LT:[-1,1], RB:[1,-1], LB:[-1,-1],
};

// 체스판 범위 검사
const inBoard = (x, y) => x >= 0 && x < 8 && y >= 0 && y < 8;

for (const c of cmds) {
  const [dx, dy] = d[c];        // 현재 명령의 방향 벡터
  const nkx = kx + dx;          // 킹이 이동할 새 x
  const nky = ky + dy;          // 킹이 이동할 새 y

  if (!inBoard(nkx, nky)) continue; // 킹이 밖으로 나가면 무시

  // 돌과 부딪히는 경우
  if (nkx === sx && nky === sy) {
    const nsx = sx + dx;        // 돌의 새 위치
    const nsy = sy + dy;
    if (!inBoard(nsx, nsy)) continue; // 돌이 밖으로 나가면 무시
    kx = nkx; ky = nky; sx = nsx; sy = nsy; // 둘 다 이동
  } else {
    kx = nkx; ky = nky;         // 돌이 없으면 킹만 이동
  }
}

// 숫자 → 문자열 좌표로 복원
const king = cols[kx] + (ky + 1);
const stone = cols[sx] + (sy + 1);

console.log(king);
console.log(stone);

