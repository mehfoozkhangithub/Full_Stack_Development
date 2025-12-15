function primesUpToN(n) {
  if (n < 2) return [];

  // Step 1: Create a boolean array
  const isPrime = new Array(n + 1).fill(true);

  // 0 and 1 are not prime
  isPrime[0] = isPrime[1] = false;

  // Step 2: Mark non-prime numbers
  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  // Step 3: Collect all prime numbers
  const primes = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) {
      primes.push(i);
    }
  }

  return primes;
}

// Example
console.log(primesUpToN(20)); // [2, 3, 5, 7, 11, 13, 17, 19]

function primesUpToN(n) {
  const primes = [];

  for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j * j <= i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(i);
  }
  return primes;
}

// this is other way to solve the prime number
