/*  guess the number */

let guessNumber = Math.floor(Math.random() * 10) + 1;

let userNumber = parseInt(prompt("Enter the number:"));

while (guessNumber != userNumber) {
  userNumber = parseInt(prompt("Enter the number:"));
}

console.log("this is your guessed number: ", guessNumber);
