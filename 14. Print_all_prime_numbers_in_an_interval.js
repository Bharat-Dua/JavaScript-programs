//*--------- print all prime numbers in an interval

//? This program prompts the user to enter a starting and ending number for an interval and then prints all the prime numbers within that interval.

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (i % 2 === 0) return false;
  }
  return true;
}
function checkPrime(a, b) {
  if (
    !isNaN(a) &&
    !isNaN(b) &&
    Number.isInteger(a) &&
    Number.isInteger(b) &&
    a > 1 &&
    b > 1 &&
    a < b
  ) {
    for (let i = a; i <= b; i++) {
      if (isPrime(i)) {
        console.log(i);
      }
    }
  } else {
    return "invalid input";
  }
}

printPrimesInInterval(10, 30);
printPrimesInInterval(1, 20);
printPrimesInInterval("abc", 50);
