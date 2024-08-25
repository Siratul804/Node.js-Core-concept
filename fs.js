const fs = require("fs");

//syn.....
fs.writeFileSync("./synTest.txt", "Hello World");

const result = fs.readFileSync("./contact.txt", "Utf-8");
console.log(result);

fs.appendFileSync("./test.txt", "hey there\n");

fs.cpSync("./test.txt", "copyTst.txt");

fs.unlinkSync("./copyTst.txt");

fs.mkdirSync("my-doc");

console.log(fs.statSync("./test.txt"));

// we can do staffs with fs.

//async....
fs.writeFile("./asyTest.txt", "Hello World", (err) => {});

fs.readFile("./contact.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});
