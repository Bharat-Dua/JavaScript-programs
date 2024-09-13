//* --------- find the sum of natural numbers

//? This program calculates the sum of natural numbers up to a given positive number n. The sum is calucalated using the formula: sum= n*(n+1)/2

function naturalNumberSum(num) {
  if (!isNaN(num) && num > 0 && Number.isInteger(num)) {
    let sum = (num * (num + 1)) / 2;
    console.log(sum);
    return sum;
  }
}
naturalNumberSum(12);
