//*------ convert binary to decimal

//? To convert a binary number to a decimal number in javascript,you can create a function that takes a binary string as input and calculates the binary equivalent.

function binaryToDecimal(binary) {
  let decimal = 0;
  let base = 1;
  for (let i = binary.length - 1; i >= 0; i--) {
    decimal += parseInt(binary[i]) * base;
    base *= 2;
  }
  return decimal;
}
console.log(binaryToDecimal("1101"));
