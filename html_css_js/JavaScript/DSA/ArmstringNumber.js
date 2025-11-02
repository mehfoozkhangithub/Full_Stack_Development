let number = 322;
let sum = 0;

let arrConvert = number.toString().split("").map(Number);

for (let i = 0; i < arrConvert.length; i++) {
  let cube = Math.pow(arrConvert[i], 3);
  sum += cube;
}
console.log(sum);

if (num === number) {
  console.log("this is Armstrong number");
} else {
  console.log("this is not a Armstrong");
}
