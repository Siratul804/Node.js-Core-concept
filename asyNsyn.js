const fs = require("fs");
const os = require("os");

console.log(os.cpus().length);

//Blocking
console.log("1");

const resultS = fs.readFileSync("./test.txt", "Utf-8");

console.log(resultS);

console.log("2");

//Non - Blocking (use threads by default 4 bit)

console.log("1");

fs.readFile("./test.txt", "Utf-8", (err, resultA) => {
  console.log(resultA);
});

console.log("2");

// need to add stream and cluster concepts
