const fs = require('fs');
const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const arr = Array.from({length:N}, (v,i) => i+1)


for(a = 1; a <= M; a++){
    const [i, j] = input[a].split(" ").map(Number);
    let f = 0;
    f = arr[i-1];
    arr[i-1] = arr[j-1];
    arr[j-1] = f

}

console.log(...arr);