const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

function solution(expression) {
    const parts = expression.split('-');

    // 첫 덩어리는 그냥 + 처리
    let result = parts[0]
        .split('+')
        .reduce((acc, cur) => acc + Number(cur), 0);

    for (let i = 1; i < parts.length; i++) {
        const groupSum = parts[i]
            .split('+')
            .reduce((acc, cur) => acc + Number(cur), 0);
        result -= groupSum;
    }

    return result;
}

console.log(solution(input));
