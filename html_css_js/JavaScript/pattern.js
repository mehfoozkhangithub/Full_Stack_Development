console.log("-".repeat(50) + "\nInput");

// const n = parseInt(prompt("Enter the number : "));
let n = process.argv[2];
console.log('🚀 ~ n:', n);


console.log("-".repeat(50) + "\nOutput");

for (let i = 0; i < n; i++) {
    // left stars
    for (let j = 0; j < i + 1; j++) {
        process.stdout.write("*");
    }

    if (i === n - 1) {
        // spaces
        for (let sp = 0; sp < 2 * (n - i - 1); sp++) {
            process.stdout.write(" ");
        }
        // right stars
        for (let j = 0; j < i; j++) {
            process.stdout.write("*");
        }
    } else {
        // spaces
        for (let sp = 0; sp < 2 * (n - i - 1) - 1; sp++) {
            process.stdout.write(" ");
        }
        // right stars
        for (let j = 0; j < i + 1; j++) {
            process.stdout.write("*");
        }
    }
    console.log();
}

// bottom half
for (let i = 0; i < n - 1; i++) {
    // left stars
    for (let j = 0; j < n - i - 1; j++) {
        process.stdout.write("*");
    }
    // spaces
    for (let sp = 0; sp < 2 * (i + 1) - 1; sp++) {
        process.stdout.write(" ");
    }
    // right stars
    for (let j = 0; j < n - i - 1; j++) {
        process.stdout.write("*");
    }
    console.log();
}

console.log("-".repeat(50) + "\nInput");

const n1 = process.argv[2];

console.log("-".repeat(50) + "\nOutput");

const a = Math.floor(n1 / 2) + 1;
const b = n1 - a;

// Top half
for (let i = 0; i < a; i++) {
    let row = "";

    // spaces
    for (let sp = 0; sp < a - i - 1; sp++) {
        row += " ";
    }

    // stars
    for (let st = 0; st < 2 * i + 1; st++) {
        row += "*";
    }

    console.log(row);
}

// Bottom half
for (let i = 0; i < b; i++) {
    let row = "";

    // spaces
    for (let sp = 0; sp < i + 1; sp++) {
        row += " ";
    }

    // stars
    for (let st = 0; st < 2 * (b - i) - 1; st++) {
        row += "*";
    }

    console.log(row);
}

console.log("-".repeat(50) + "\nInput");

const n3 = process.argv[2];

console.log("-".repeat(50) + "\nOutput");

for (let i = 0; i < n3; i++) {
    let row = "";
    for (let j = 0; j < n3; j++) {
        if (i === 0 || i === n3 - 1 || j === 0 || j === n3 - 1) {
            row += "* ";
        } else if (i === Math.floor(n3 / 2) && j === Math.floor(n3 / 2)) {
            row += "* ";
        } else {
            row += "  ";
        }
    }
    console.log(row);
}


console.log("-".repeat(50) + "\nInput");

const n4 = process.argv[2];

console.log("-".repeat(50) + "\nOutput");

for (let i = 0; i < n4; i++) {
    let row = "";
    for (let j = 0; j < n4; j++) {
        if (i === 0 || i === n4 - 1 || j === 0 || j === n4 - 1) {
            row += "* ";
        } else if (i === Math.floor(n4 / 2) && j === Math.floor(n4 / 2)) {
            row += "* ";
        } else if (i === j || i === n4 - j - 1 || i === Math.floor(n4 / 2) || j === Math.floor(n4 / 2)) {
            row += "* ";
        } else {
            row += "  ";
        }
    }
    console.log(row);
}


let arr = [10, 30, 50, 80, 80, 100, 20, 60, 40, 10];

let n2 = 7;

//  i have to remove the dublicate's
arr = [...new Set(arr)];


arr = arr.sort((a, b) => b - a);

if (n2 - 1 > arr.length) {
    console.log(`please enter the valid value & 
        the value you put is not exist in arry length's....`);
}
else {
    arr[n2 - 1];
    console.log('🚀 ~ arr[n-1]:', arr[n2 - 1]);
}

console.log('🚀 ~ arr:', arr);

