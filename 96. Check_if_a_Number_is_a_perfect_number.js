//*------ check if a number is a perfect number

//? A perfect number is a positive integer that is equal to the sum of its proper divisors(excluding itself).

function isPerfectNumber(num) {
  let sum = 0;
  for (let i = 0; i < num; i++) {
    if (num % i == 0) {
      sum += i;
      console.log(i);
    }
  }
  console.log(sum);
  return sum == num;
}

console.log(isPerfectNumber(28));
