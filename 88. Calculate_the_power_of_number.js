//*------ calculate the power of number

//? To calculate the power of Number in javascript,you can use the Math.pow() method or the exponentiation(**) operator.

//* method 1
function powerOfNumber(base, exponent) {
  return Math.pow(base, exponent);
}
console.log(powerOfNumber(2, 3));

//* method 2
function powerOfNumber(base, exponent) {
  return base ** exponent;
}
console.log(powerOfNumber(2, 3));
