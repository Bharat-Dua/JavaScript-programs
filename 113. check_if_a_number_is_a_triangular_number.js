//*------- check if a number is a triangular number

//? This program checks if a given positive integer is a triangular number. A triangular number is a number that can be represented in the form of a triangle with dots. Mathematically, a triangular number T_n is given by the formula  T_n = n*(n+1)/2.

function isTriangular(num) {
  let n = 1;
  let triangularNumber = 0;

  while (triangularNumber < num) {
    triangularNumber = (n * (n + 1)) / 2;
    if (triangularNumber === num) {
      return true;
    }
    n++;
  }
  return false;
}

let number = 10;
console.log(isTriangular(number)); // true

//* method 2

function isTriangular(num) {
  let n = 0;
  let sum = 0;
  while (sum < num) {
    n++;
    sum += n;
  }
  return sum === num;
}

let numberValue = 10;
console.log(isTriangular(numberValue)); // true
