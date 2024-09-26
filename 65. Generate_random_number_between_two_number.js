//*--------- generate random number between two number

//? To generate random number between two number in javascript we can use the Math.random() function along with some arithmetic.

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(generateRandomNumber(1, 10));
