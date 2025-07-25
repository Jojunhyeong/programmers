const fs = require('fs');
input = fs.readFileSync(0, "utf8").toString().trim().split("\n");

let [A, B] = input[0].split(" ").map(Number)
const C = parseInt(input[1]);

if (B + C < 60){
    console.log(A, B+C);
} else if (B + C >= 60){
    A = (A + Math.floor((B + C) / 60));
    if(A > 23) {
        A = A - 24;
    }

    console.log(A, (B+C)%60);
}