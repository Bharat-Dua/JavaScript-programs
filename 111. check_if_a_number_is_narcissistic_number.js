//*------ check if a narcissistic number

//? A narcissistic number(or armstrong number) is a number that is the sum of its own digits each raised to the power of the number of digits. for example, 153 is a narcissistic number because 1^3+5^3+3^3 equals 153.

function isNarcissisticNumber(num) {
  if (!Number.isInteger(num) || num < 0) {
    return false;
  }
  const numStr = num.toString();
  const numDigits = numStr.length;
  let sum = 0;
  for (let i = 0; i < numDigits; i++) {
    sum += Math.pow(parseInt(numStr[i]), numDigits);
  }
  return sum === num;
}

const testNumber = 1634;
console.log(isNarcissisticNumber(testNumber)); // false
