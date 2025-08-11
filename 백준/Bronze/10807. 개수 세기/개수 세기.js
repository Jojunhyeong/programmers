const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');

const N = input[0];

const arr = input[1].split(' ').map(Number);
let count = 0;
for(const v of arr) {
    if(v === +input[2]){
        count++;
    }
}
console.log(count);