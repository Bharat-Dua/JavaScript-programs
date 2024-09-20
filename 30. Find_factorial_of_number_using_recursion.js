//*------- find factorial of number using recursion

//? This program calculates the factorial of a non-negative integer using recursion.It prompts the user to enter a non-negative integer and then uses a recursive function to compute and display its factorial.

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function factorialNum(num) {
  if (!isNaN(num) && Number.isInteger(num) && num >= 0) {
    let result = factorial(num);
    console.log(`Factorial of ${num} is ${result}`);
  } else {
    console.log("Please enter a non-negative integer");
  }
}

//? Test the function with a number
factorialNum(5);
