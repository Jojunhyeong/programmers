const fs = require('fs');
const input = fs.readFileSync(0, "utf-8").toString().trim();

const inputData = parseInt(input);

if ((inputData % 4 === 0 && inputData % 100 !== 0) || inputData % 400 === 0) {
    console.log("1");
} else console.log("0");