const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

const A = parseInt(input[0]);
const B = input[1];

console.log(A * parseInt(B[2]));
console.log(A * parseInt(B[1])); 
console.log(A * parseInt(B[0])); 
console.log(A * parseInt(B));  
