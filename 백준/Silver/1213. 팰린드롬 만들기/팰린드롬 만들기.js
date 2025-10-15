const s = require('fs').readFileSync(0, 'utf8').trim();
const arr = s.split('').sort(); // 알파벳 순 정렬

let left = [];
let center = '';
let i = 0;

while (i < arr.length) {
  const ch = arr[i];
  let cnt = 0;

  // 같은 문자 몇 개인지 세기
  while (i < arr.length && arr[i] === ch) {
    cnt++;
    i++;
  }

  // 홀수 개면 하나는 중앙에 쓸 수 있고,
  // 나머지는 절반만 왼쪽에 넣기
  if (cnt % 2 === 1) {
    if (center) {
      console.log("I'm Sorry Hansoo");
      return;
    }
    center = ch;
  }

  // 짝수 부분을 왼쪽에 추가
  left.push(ch.repeat(Math.floor(cnt / 2)));
}

// 왼쪽 문자열 완성
left = left.join('');

// 오른쪽은 왼쪽을 뒤집기
const right = [...left].reverse().join('');

// 결과 출력
console.log(left + center + right);

