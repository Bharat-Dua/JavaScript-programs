//*------ calculates the GCD(greatest common  divisor) of two numbers

//? The GCD or HCF(Highest common factor),is the largest positive integer that divides both numbers witout leaving a remainder.There are different algorithms to calculates the GCD of two numbers, and one commonly used algorithm is the Euclidean algorithm.

function gcd(a, b) {
  if (b == 0) return a;
  else return gcd(b, a % b);
}

console.log(gcd(48, 18));

//* approach 2

function calculateGCD(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  console.log(a);
}

console.log(calculateGCD(43, 23));
