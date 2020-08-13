let primes = [2, 3, 5, 7];

for (let i = 11; i <= 100; i += 2) {
  if (i % 3 && i % 5 && i % 7) {
    primes.push(i);
  }
}

console.log(primes);

// for more bigger numbers

function isPrime(n) {
  if (n === 2) {
    return true;
  }
  if (n % 2 === 0) {
    return false;
  }
  const sqrt = Math.floor(Math.sqrt(n));
  if (n % sqrt === 0) {
    return false;
  }

  for (let i = 3; i < sqrt; i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function checkPrimes(from, to) {
  for (let i = from; i <= to; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}
checkPrimes(1, 100);
