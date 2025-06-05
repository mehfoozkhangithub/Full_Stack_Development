// 6. Password Checker

let password = process.argv[2];
let pass = "Hetuk123";

while (password !== pass) {
  console.log("Incorrect Password Please Try Again!");
  return;
}
console.log("You Have Entered Correct Password: ", password);
