const fs = require("fs");

//* this behave async ways's
fs.readFile("./Notes.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log("Error hai bhai");
    console.log(err);
  }
  console.log(data);
});

// * this behave sync way's

// const data = fs.readFileSync("./Notes.txt", { encoding: "utf-8" });
// console.log(data);
console.log("hello");

//? here we we have to write the file or create the file

// fs.writeFile(
//   "./textCreated.txt",
//   "hello i am writing the file from readFile.",
//   { encoding: "utf-8" },
//   (err) => {
//     console.log(err);
//   }
// );

// ? how to append the created file prev.

fs.appendFile(
  "./textCreated.txt",
  "\nthis is the second data form that file",
  { encoding: "utf-8" },
  (err) => {
    if (err) console.log(err);
    console.log("check the file");
  }
);
