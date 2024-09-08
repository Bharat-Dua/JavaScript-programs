//*---------- check prime number

//? This program prompts the user to enter a number and checks whether it is a prime number or not. It then displays the result.

function checkPrime(a) {
  if (!isNaN(a) && Number.isInteger(a) && a > 1) {
    for (let i = 2; i <= Math.sqrt(a); i++) {
      if (a % i === 0) {
        return false;
      }
    }
    return true;
  } else {
    return "invalid input";
  }
}
