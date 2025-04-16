const filePath = process.platform == 'linux' ? '/dev/stdin' : '../input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

for (let i = 0; i < input.length - 1; i++) {
  const [L, P, V] = input[i].split(' ').map(Number);
  console.log(`Case ${i + 1}: ${solution(L, P, V)}`);
}

function solution(L, P, V){
    let sum = 0;
    while(V >= P){
        sum = sum + L;
        V = V - P;
    }

    if(V < L){
        sum = sum + V;
    }
    else sum = sum + L;

    return sum;
}

solution(5, 8, 20)