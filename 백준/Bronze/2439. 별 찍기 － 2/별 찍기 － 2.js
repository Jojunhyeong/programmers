const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();

const N = +input;

for(i=1; i<=N; i++){
    console.log(" ".repeat(N-i) + "*".repeat(i));
}