//* ------- Swap two variables
//? This program prompts the user to enter two variables and swap their values.It then displays the variables before and after the swap.

let num1 = prompt("Enter first number");
let num2 = prompt("Enter second number");
console.log(`Before swapping variable1 = ${num1}, variable2 = ${num2}`);

//swapping the variables
let temp = num1;
num1 = num2;
num2 = temp;
console.log(`After swapping variable1 = ${num1}, variable2 = ${num2}`);

//* ------ OR -------
[num1, num2] = [num2, num1];
