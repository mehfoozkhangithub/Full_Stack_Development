let myArr = [1, 2, 3];

Array.prototype.धकेलो = function (value) {
  let lastIndex = this.length;
  this[lastIndex] = value;
};

myArr.धकेलो(4);
myArr.धकेलो(5);
myArr.धकेलो(6);

Array.prototype.oddFind = function () {
  let ans = this.map((el) => (el % 2 == 0 ? true : false));
  console.log('🚀 ~ ans:', ans);
};

myArr.oddFind();

console.log('🚀 ~ myArr:', myArr);
