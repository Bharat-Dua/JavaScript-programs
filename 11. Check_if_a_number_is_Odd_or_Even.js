//*---------- check if a number is odd or even

let number = Number(prompt("Enter a number:"));
if (!isNaN(number)) {
  if (number % 2 == 0) {
    console.log(number + " is even");
  } else {
    console.log(number + " is odd");
  }
} else {
  console.log("Invalid input");
}
