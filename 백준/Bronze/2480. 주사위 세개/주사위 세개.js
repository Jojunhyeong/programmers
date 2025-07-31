const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split(" ");

const A = parseInt(input[0]);
const B = parseInt(input[1]);
const C = parseInt(input[2]);

if (A === B && B === C && A === C) {
    console.log(10000 + (A*1000));
} else if(A === B) {
    console.log(1000 + (A * 100));
} else if(B === C) {
    console.log(1000 + (B * 100));
} else if(A === C) {
    console.log(1000 + (A * 100));
} else {
    console.log(Math.max(A, B, C) * 100);
}