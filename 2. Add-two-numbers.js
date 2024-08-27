//* Add two numbers

//? This program focuses on taking two numbers as input and then displaying their sum. It prompts the user to enter two numbers, add them together,then print the result.

let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));

if (!isNaN(num1) && !isNaN(num2)) {
  let sum = num1 + num2;
  console.log(`The sum of ${num1} and ${num2} is ${sum}`);
} else {
  console.log("please enter valid number");
}
