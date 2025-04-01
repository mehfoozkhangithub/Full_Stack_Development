let arr = [1, 2, 3, 4];

// Array.prototype.धकेलो = function (value) {
//   let index = this.length;
//   this[index] = value;
// };

// arr.धकेलो(7);
// console.log(arr);

Array.prototype.निकालो = function () {
  let index = this.length - 1;
  delete this[index];
  this.length = index;
};

arr.निकालो();

console.log(arr);
