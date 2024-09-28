//*----- find the sum of digits in a number

//? To find the sum of digits in a number using javascript,you can use a loop to iterate through each digit and add them together.

//* method 1

function sumOfDigits(num) {
  const digitsArray = String(num).split("").map(Number);

  const sum = digitsArray.reduce((acc, curr) => acc + curr, 0);
  return sum;
}
console.log(sumOfDigits(12345));

//* method 2

function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

let result = sumOfDigits(12345);
console.log(result);

//* method 3

function sumOfDigits(num) {
  let sum = 0;

  let numStr = num.toString();

  for (let i = 0; i < numStr.length; i++) {
    sum += parseInt(numStr.charAt(i), 10);
  }

  return sum;
}

// Example usage:
let res = sumOfDigits(12345);
console.log(res);
