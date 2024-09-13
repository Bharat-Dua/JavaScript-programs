//*----- find the HCF or GCD

//? This program prompts the user to enter two positive integer and calculates their highest common factor(HCF) or Greatest common Divisor(GCD).

function findHCF(num1, num2) {
  if (
    !isNaN(num1) &&
    !isNaN(num2) &&
    num1 > 0 &&
    num2 > 0 &&
    Number.isInteger(num1) &&
    Number.isInteger(num2)
  ) {
    let hcf = 1;
    let smallerNumber = Math.min(num1, num2);
    for (let i = 1; i <= smallerNumber; i++) {
      if (num1 % i === 0 && num2 % i === 0) {
        hcf = i;
      }
    }
    console.log(hcf);
    return hcf;
  } else {
    console.log("Invalid input. Please enter two positive integers.");
    return "Invalid input. Please enter two positive integers.";
  }
}

findHCF(12, 12);
