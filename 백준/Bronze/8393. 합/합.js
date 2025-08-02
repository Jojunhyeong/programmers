const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split(' ');

const n = parseInt(input[0]);

let res = 0;

for(i = 1; i<=n; i++){
    res = res + i;
}

console.log(res);