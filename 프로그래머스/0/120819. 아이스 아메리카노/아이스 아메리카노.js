function solution(money) {
    var answer = [];
    const count = Math.floor(money/5500);
    const change = money % 5500;
    
    answer.push(count, change);
    return answer;
}