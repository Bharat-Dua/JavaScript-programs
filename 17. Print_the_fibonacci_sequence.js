//*------ Print the fabonacci sequence

//? This program prompts the user to enter the number of terms and then prints the fabonacci sequence up to that number of terms. The fabonacci series is a series of numbers where each number is the sum of the last two proceding ones, usually starting with 0 and 1.

//* method 1
let numTerms = Number(
  prompt("Enter the number of terms in the Fibonacci sequence:")
);

let fibArr = [0, 1];

if (!isNaN(numTerms) && Number.isInteger(numTerms) && numTerms >= 0) {
  if (numTerms === 0) {
    fibArr = [0];
  } else if (numTerms === 1) {
    fibArr = [0, 1];
  } else {
    for (let i = 2; i < numTerms; i++) {
      fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
    }
  }

  console.log(fibArr.join(", "));
} else {
  console.log("Invalid input");
}

//* method 2

function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// Example usage:
console.log(fibonacci(6)); // 8 (the 6th number in the Fibonacci sequence is 8)
