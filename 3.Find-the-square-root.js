//* -------- Find the square root

//? This program prompts the user to enter a number and calculates its square root.It then displays the result,ensuring that the entered number is non-negative.

let inputNum = parseFloat(prompt("Enter a non-negative number:"));
if (!isNaN(inputNum) && inputNum >= 0) {
  let squareRoot = Math.sqrt(inputNum);
  console.log(`The square root of ${inputNum} is ${squareRoot}`);
} else {
  console.log("Please enter a non-negative number");
}
