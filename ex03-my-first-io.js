//LEARNYOUNODE Exercise 3: My First I/O

const fs = require('fs');
const filePath = process.argv[2];

let contents = fs.readFileSync(filePath);
contents = contents.toString().split("\n");

console.log(contents.length-1);

