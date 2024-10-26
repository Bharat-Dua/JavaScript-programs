//*----- check if a number is smith number

//? This program checks if a given positive integer is a smith number.A smith number is a composite number for which the sum of its digits is equal to the sum of the prime factors'digits. The sum of the prime factors' digits is computed recursively untill prime factors are obtained.

function sumOfDigits(num) {
  return num
    .toString()
    .split("")
    .reduce((sum, digit) => sum + parseInt(digit, 10), 0);
}

function primeFactor(num) {
  const factors = [];
  // Check for factor 2
  while (num % 2 === 0) {
    factors.push(2);
    num = Math.floor(num / 2);
  }
  // Check for odd factors from 3 onwards
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    while (num % i === 0) {
      factors.push(i);
      num = Math.floor(num / i);
    }
  }
  // If num is still greater than 2, then it's prime
  if (num > 2) {
    factors.push(num);
  }
  return factors;
}

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function isComposite(num) {
  return num > 1 && !isPrime(num);
}

function isSmithNumber(num) {
  if (!isComposite(num)) return false;

  const originalSum = sumOfDigits(num);
  const factors = primeFactor(num);
  const primeFactorSum = factors.reduce(
    (sum, factor) => sum + sumOfDigits(factor),
    0
  );

  return originalSum === primeFactorSum;
}

console.log(isSmithNumber(728));
