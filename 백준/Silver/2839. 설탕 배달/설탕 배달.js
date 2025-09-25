// 5키로랑 3키로 조합으로 담는 경우의 수를 찾은 다음에 5키로를 가장 많이 쓰는게 답 아닌가?

const fs = require('fs');
const input = fs.readFileSync(0, "utf-8").toString().trim();

const N = parseInt(input);

function solution(n) {
    let count = 0;
    while (n >=0) {
        if(n % 5 === 0){
            return count + n/5;
        }
        n-=3;
        count++;
    }
    return -1;
}

console.log(solution(N));