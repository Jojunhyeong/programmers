function solution(numbers) {
    let sum = numbers.reduce((acc, cur) => {
        return acc+ cur;
    }, 0);
    return sum/numbers.length;
}