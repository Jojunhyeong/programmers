const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split(" ");

const A = parseInt(input);

for(i = 1; i<=9; i++){
    console.log(`${A} * ${i} = ${A * i}`);
}