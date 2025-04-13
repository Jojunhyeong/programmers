function solution(n) {
    var answer = 0;
    for(var a=1; a<=n; a++){
        if(a%2==0){
            answer = answer + a;
        }
    } return answer;
}