function solution(n, lost, reserve) {
    var answer = 0;
    lost = lost.sort((a, b) => a - b);
    reserve = reserve.sort((a,b) => a - b);
    
    lost = lost.filter(x => reserve.includes(x) ? (reserve = reserve.filter(y => y !== x), false) : true)
    
    lost = lost.filter(v => {
        if(reserve.includes(v-1)) {
            reserve = reserve.filter(y => y !== v-1);
            return false
        } else if (reserve.includes(v+1)) {
            reserve = reserve.filter(y => y !== v + 1);
            return false;
        } return true
    })
    answer = lost.length
    return n - answer;
}