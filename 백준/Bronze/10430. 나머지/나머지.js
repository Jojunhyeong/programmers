const fs = require('fs');
const input = fs.readFileSync(0, "utf-8").toString().split(" ");
const A = parseInt(input[0]);
const B = parseInt(input[1]);
const C = parseInt(input[2]);

console.log((A+B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A*B) % C);
console.log(((A % C) * (B % C)) % C);

