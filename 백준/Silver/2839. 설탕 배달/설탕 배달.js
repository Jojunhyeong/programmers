const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const N = parseInt(input);

console.log(solution(N));

function solution(N) {
    let x = Math.floor(N/5);
    while(x >= 0){
        let rest = N - 5 * x;
        if(rest % 3 === 0){
            let y = rest / 3;
            return x + y;
        }
        x--;
    }
    return -1;
}
