//*------- convert decimal to binary

//? This program converts a decimal number to its binary equivalent.It prompts the user to enter a decimal number and then calculates and displays its binary representation.

// without built-in method

function decimalValue(n) {
  if (!isNaN(n) || Number.isInteger(n) || n >= 0) {
    let result = convertDecToBinary(n);
    console.log(`The binary equivalent of ${n} is ${result}`);
    return result;
  } else {
    return "Invalid input";
  }
}

function convertDecToBinary(num) {
  if (num < 0) {
    return "Invalid input";
  } else if (num === 0) {
    return 0;
  }
  let binaryNumber = "";
  while (num > 0) {
    binaryNumber = (num % 2) + binaryNumber;
    num = Math.floor(num / 2);
  }
  return binaryNumber;
}

let conversionResult = convertDecToBinary(12);

//? with built-in method

function decimalToBinary(decNum) {
  if (isNaN(decNum) || decNum < 0) {
    console.log("Error: Please enter a valid non-negative integer.");
  } else {
    const binaryRepresentation = decNum.toString(2);
    console.log(
      `The binary representation of ${decNum} is: ${binaryRepresentation}`
    );
  }
}

//? Example usage:
decimalToBinary(12);
