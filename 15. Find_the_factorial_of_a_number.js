//*----- Find the factorial of a number

//? This program calculates the factorial of a given number.The factorial of a non-negative integer n,denoted as n!,is the product of all positive integers less than or equal to n.

//* method 1
function factorial(num) {
  if (num == 0 || num == 1) return num;
  else return num * factorial(num - 1);
}
console.log(factorial(5));
console.log(factorial(25));
console.log(factorial(15));

//* method 2

let number = Number(prompt("Enter a number:"));
if (!isNaN(number) && Number.isInteger(number) && number >= 0) {
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
  console.log(factorial);
} else {
  console.log("Invalid input");
}
