//*--------- check if a number is fibonacci number

//? A fibonacci number is a number in the fibonacci sequence,which is a series of numbers where each number is the sum of the two preceding ones.The sequence starts with 0 and 1.

function isPerfectSquare(n) {
  const sqrt = Math.sqrt(n);
  return sqrt == Math.floor(sqrt);
}
function isFibonacci(n) {
  if (!Number.isInteger(n) || n < 0) return false;
  return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
}

console.log(isFibonacci(8));
