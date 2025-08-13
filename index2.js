// let number1 = process.argv[2];
// let number2 = process.argv[3];
// let operators = process.argv[4];
// console.log('🚀 ~ number:', typeof number);

// let api = `https://jsonplaceholder.typicode.com/todos`;

// const apiCalling = (url) => {
//     fetch(url)
//         .then((response) => response.json())
//         .then((response) => { console.log(response); })
//         .catch((err) => { console.log(err); })
// }

// apiCalling(api);


// console.log('hello javascript...');

// function sum1(a, b, c) {
//     console.log(a, b, c);
// }

// sum1(1, 2, 3)


// function sum(...args) {
//     console.log(args);
// }

// sum(1, 2, 3)

console.log(this, "this is out's side of the value...");

function names() {
    console.log(this);
}

names();