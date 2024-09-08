//*------------ Check if a number is positive,negative,or zero

//? This program prompts the user to enter a number and check whether it is positive,negative,or zero. It then displays the result.

//prompts user for a number
let number = Number(prompt("Enter a number:"));

// check if input number is valid or not

if (!isNaN(number)) {
  // check if number is positive,negative,or zero
  if (number > 0) {
    console.log(number + " is a positive number.");
  } else if (number < 0) {
    console.log(number + " is a negative number.");
  } else {
    console.log(number + " is zero.");
  }
} else {
  console.log("Invalid input. Please enter a valid number.");
}
