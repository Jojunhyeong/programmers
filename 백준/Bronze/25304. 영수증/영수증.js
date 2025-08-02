const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

const sum = parseInt(input[0]);
const item = parseInt(input[1]);

let count = 0;

for (i=2; i<=item+1; i++){
    const [A,B] = input[i].split(' ').map(Number);
    count = count + (A * B);
}

if (count === sum){
    console.log('Yes');
} else console.log('No');