//* --------- find the sum of natural numbers using recursion

//? This program calculate the sum of natural numbers up to a given positive integer using recursion.It prompts the user to enter a positive integer n and then calculates and displays the sum using a recursive function.

function sumOfNaturalNumbers(n) {
  if (!isNaN(n) && Number.isInteger(n) && n > 0) {
    if (n === 1) {
      return 1;
    } else {
      return n + sumOfNaturalNumbers(n - 1);
    }
  } else {
    console.log("enterr valid number");
  }
}
let sum = sumOfNaturalNumbers(6);
console.log(sum);
