//*-------- check if a number is perfect square

//? To check if a number is a perfect square in JavaScript,you can calculate the square root of the number and then check if the square of the integer part of the square root is equal to the original number.

function isPerfectSquare(n) {
  if (n < 0) return false;
  let sqrt = Math.sqrt(n);
  return sqrt == Math.floor(sqrt);
}
console.log(isPerfectSquare(9));
