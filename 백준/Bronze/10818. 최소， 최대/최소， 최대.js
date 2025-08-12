const fs = require('fs');
const input = fs.readFileSync(0, "utf8").toString().trim().split('\n');

const N = parseInt(input[0]);

const arr = input[1].split(" ").map(Number);

const arr2 = [];

const Min = Math.min(...arr);

const Max = Math.max(...arr);

arr2.push(Min);
arr2.push(Max);

console.log(...arr2);