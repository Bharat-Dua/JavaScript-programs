//*------------ Generate a random number

//? This program generates a random number between a user-defined range.It prompts the user to enter the minumum and maximum values of range, and then it displays the generated random number within that range.

// prompt user for the range
let min = Number(prompt("Enter the minimum value of the range:"));
let max = Number(prompt("Enter the maximum value of the range:"));

// check if input is a valid number
if (!isNaN(min) && !isNaN(max) && min <= max) {
  // generate a random number within the range
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(`The generated random number is: ${randomNum}`);
} else {
  console.log(
    "Please enter valid numbers and ensure the minimum value is less than the maximum value."
  );
}

//*----- or by using function

function random(min, max) {
  if (!isNaN(min) && !isNaN(max) && min <= max) {
    // generate a random number within the range
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`The generated random number is: ${randomNum}`);
  } else {
    console.log(
      "Please enter valid numbers and ensure the minimum value is less than the maximum value."
    );
  }
}
random(1, 8);
