const fs = require('fs')

buf = fs.readFileSync(process.argv[2]);
string = buf.toString();
result = string.split("\n");

console.log(result.length-1);