const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const arr = Array(N).fill(0);

for(a=1; a<=M; a++){
    const [i, j, k] = input[a].split(" ").map(Number);
    for(b=i-1; b<=j-1; b++){
        arr[b] = (k); 
        
    }
}

console.log(...arr);