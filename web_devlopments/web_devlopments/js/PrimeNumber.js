/* function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return false;
  if (num % 2 === 0) return false;

  for (let i = 3; i * i <= num; i += 2) {
    if (num % i == 0) return false;
  }
  return true;
}

function nthPrime(value) {
  let count = 0;
  let number = 1;

  while (count < value) {
    number++;
    if (isPrime(number)) {
      count++;
    }
  }
  return number;
}

let vaule = nthPrime(10);
console.log('🚀 ~ vaule:', vaule);
 */

/* function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
for (let i = 2; i <= 100; i++) {
  let val = isPrime(i);
  console.log('🚀 ~ val:', val);
  if (val) {
    console.log(`this is a prime number ${i}`);
  } else {
    console.log(`this is not a prime number ${i}`);
  }
} */

// Using while loop for print prime number

/* let num = 2;

while (num <= 100) {
  let isPrime = true;
  let i = 2;

  while (i < num) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
    i++;
  }

  if (isPrime) {
    console.log(num);
  }

  num++;
}
 */
function isPrime(n) {
  if (n < 2) return false;

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

for (let i = 2; i <= 100; i++) {
  if (isPrime(i)) {
    console.log(`this is a prime number ${i}`);
  } else {
    console.log(`this is not a prime number ${i}`);
  }
}
