//*------ check if the number has the last digit same

//? This program prompts the user to enter two numbers and check if they have the same last digit.

function checkLastDigit(num1, num2) {
  // Validate inputs
  if (
    !isNaN(num1) &&
    !isNaN(num2) &&
    num1 > 0 &&
    num2 > 0 &&
    Number.isInteger(num1) &&
    Number.isInteger(num2)
  ) {
    // Extract last digits
    let lastDigit1 = num1 % 10;
    let lastDigit2 = num2 % 10;

    // Compare last digits
    if (lastDigit1 === lastDigit2) {
      console.log("The numbers have the same last digit.");
    } else {
      console.log("The numbers do not have the same last digit.");
    }
  } else {
    console.log("Invalid input. Please enter two positive integers.");
  }
}

checkLastDigit(1234, 5678);
checkLastDigit(789, 345);
checkLastDigit(-123, 456);
