const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim();

const N = parseInt(input);

let res = '';

for(i = 0; i<N/4; i++){
    res = res + "long "
}

console.log(res + "int");
