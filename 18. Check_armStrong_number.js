//*------ check armstrong number

//? This program prompts the user to enter a number and checks whether it's an armstrong number or not.An armstrong number(also known as a narcissistic number or pluperfect digital invariant) is a number that is the sum of its own digits each raised to the power of the number of digits in the number. For example 153 is an ArmStrong number because 13+53+33= 153.

function checkArmStrong(num1) {
  if (!isNaN(num1) && num1 > 0 && Number.isInteger(num1)) {
    let num = num1;
    let numDigits = num.toString().length;
    console.log(numDigits);
    let sum = 0;
    for (let i = 0; i < numDigits; i++) {
      sum += Math.pow(parseInt(num.toString()[i]), numDigits);
    }
    if (sum === num) {
      console.log(num + " is an armstrong number");
    } else {
      console.log(num + " is not an armstrong number");
    }
  } else {
    console.log("Invalid input");
  }
}

checkArmStrong(153);

//* method 2

function armStrong(num) {
  if (!isNaN(num) && num > 0 && Number.isInteger(num)) {
    let originalNum = num;
    let sum = 0;
    let numLength = num.toString().length;
    while (originalNum > 0) {
      let digit = originalNum % 10;
      sum += digit ** numLength;
      originalNum = parseInt(temp / 10);
    }
    if (sum === num) {
      console.log("armstrong");
    } else {
      console.log("not armstrong");
    }
  }
}
armStrong(153);
