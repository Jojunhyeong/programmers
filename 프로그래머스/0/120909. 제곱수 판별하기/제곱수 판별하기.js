function solution(n) {
    for(let i = 0; i*i<=n; i++){
        if (i*i == n){
            return 1;
        }
    }return 2;
}