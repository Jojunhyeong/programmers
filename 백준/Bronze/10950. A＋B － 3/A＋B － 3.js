const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

const T = parseInt(input[0]);

for(i = 1; i<=T; i++) {
    const [A, B] = input[i].split(' ').map(Number);
    console.log(A+B);
}