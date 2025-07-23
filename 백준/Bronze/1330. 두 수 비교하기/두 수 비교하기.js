const fs = require('fs');
const input = fs.readFileSync(0, "utf-8").toString().split(" ");

A = parseInt(input[0]);
B = parseInt(input[1]);

if(A > B){
    console.log(">");
}
else if(A < B) {
    console.log("<");
} else console.log("==")
