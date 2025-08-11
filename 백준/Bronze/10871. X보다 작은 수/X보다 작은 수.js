const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');

const [N, X] = input[0].trim().split(' ').map(Number);

const arr = input[1].trim().split(' ').map(Number);

const ans = [];

arr.forEach((n) => {
    if(n < X) {
        ans.push(n);
    }
})

    console.log(ans.join(' '));