console.log(2 + 5);

let img = [
  {
    link: 'https://cdn.pixabay.com/photo/2023/02/10/10/04/pick-up-7780522_640.jpg',
  },
  {
    link: 'https://cdn.pixabay.com/photo/2017/08/07/21/17/pick-up-2607931_640.jpg',
  },
  {
    link: 'https://cdn.pixabay.com/photo/2022/07/17/05/12/odin-7326562_640.jpg',
  },
  {
    link: 'https://cdn.pixabay.com/photo/2021/07/25/09/59/field-6491448_640.jpg',
  },
  {
    link: 'https://cdn.pixabay.com/photo/2018/12/21/20/17/instrument-3888684_640.png',
  },
  {
    link: 'https://cdn.pixabay.com/photo/2021/05/23/17/52/bellies-6276856_1280.jpg',
  },
  {
    link: 'https://cdn.pixabay.com/photo/2016/11/18/19/09/beach-1836461_640.jpg',
  },
  {
    link: 'https://cdn.pixabay.com/photo/2024/06/22/09/08/childs-hand-8845806_640.jpg',
  },
];

for (let i = 0; i < img.length; i++) {
  let imgs = img[i].link;
  console.log('-> imgs:', imgs);
}

// const prev = () => {};

let arr = [2, 3, 1, 7, 5, 99, 100, 10, 125];

// arr.sort((a, b) => a - b);

arr.splice(4, 3);
console.log('-> arr:', arr);
// console.log('-> arr:', arr);

// let ans = arr.slice(3, 8);

// console.log('-> ans:', ans);
