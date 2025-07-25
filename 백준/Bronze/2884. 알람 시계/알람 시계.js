const fs = require('fs');
input = fs.readFileSync(0, "utf-8").toString().trim().split(" ");

let H = parseInt(input[0]);
let M = parseInt(input[1]);

if (M < 45) {
    H = H - 1;
    M = 60 - 45 + M;
    if (H < 0) {
        H = 23;
    }
    console.log(H, M);
} else {
    console.log(H, M - 45);
}
