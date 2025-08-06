const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n');

for(i=0; i<input.length; i++){
    const [A, B] = input[i].split(" ").map(Number);

    console.log(A+B);
}