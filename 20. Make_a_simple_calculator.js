//* ------- This program implements a simple calculator that can perform basic arithmetic operations. It prompts the user to enter two numbers and choose an operation(add,subtract,multiply,divison). It then perform the selected operation and displays the result.

let result;
function calculator(num1, num2, operation) {
  if (!isNaN(num1) && !isNaN(num2)) {
    switch (operation) {
      case "+":
        result = num1 + num2;
        console.log(num1 + num2);
        break;
      case "-":
        result = num1 - num2;
        console.log(num1 - num2);
        break;
      case "*":
        result = num1 * num2;

        console.log(num1 * num2);
        break;
      case "/":
        if (num2 != 0) {
          result = num1 / num2;
          console.log(num1 / num2);
        } else {
          console.log("Error! Division by zero is not allowed.");
          break;
        }
        break;

      default:
        console.log("Invalid operation");
        break;
    }
  }
}
calculator(3, 6, "+");

if (result !== undefined) {
  console.log(result);
} else {
  console.log("Error! Invalid input");
}

