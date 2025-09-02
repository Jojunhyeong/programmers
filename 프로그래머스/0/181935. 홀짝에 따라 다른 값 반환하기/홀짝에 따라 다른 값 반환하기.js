function solution(n) {
    var ans1 = 0;
    var ans2 = 0;
    if(n % 2 !==0) {
        for(i = 0; i<=n; i++) {
            if(i % 2 !== 0){
                ans1 += i
            }
        } return ans1
    } else {
        for(i = 0; i<=n; i++) {
            if(i % 2 == 0 ) {
                ans2 += i**2;
            }
        } return ans2;
    }
}