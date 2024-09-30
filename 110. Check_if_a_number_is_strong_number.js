//*---- check if a number is strong number

//? A strong number (or digital factorial) is a number such that the sum of its individual digits, each factorialized, is equal to the number itself. To check if a number is a strong number in JavaScript, you can create a function that calculates the factorial of each digit and checks if their sum equals the original number.

//* method-1 brute force approch
function factorial(num) {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}
function isStrongNumber(num) {
  let sum = 0;
  let digits = num.toString().split("");
  for (let i = 0; i < digits.length; i++) {
    sum += factorial(Number(digits[i]));
  }
  return sum === num;
}
console.log(isStrongNumber(145));
console.log(isStrongNumber(10));

//* method 2 using ES6

const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

const isStrongNumber = (num) => {
  const sum = num
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, digit) => acc + factorial(digit), 0);

  return sum === num;
};

console.log(isStrongNumber(145));
console.log(isStrongNumber(123));
