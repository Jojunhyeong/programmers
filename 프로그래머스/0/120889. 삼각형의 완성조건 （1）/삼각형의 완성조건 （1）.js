function solution(sides) {
    var max = Math.max(...sides);
    var idx = sides.indexOf(max);

    sides.splice(idx, 1);
    
    let sum = sides.reduce((a,b) => a + b, 0)
    if (max < sum){
        return 1;
    } else return 2;
}