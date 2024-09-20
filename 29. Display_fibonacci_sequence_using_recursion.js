//*--------- Display fibonacci sequence using recursion

//? This program displays the fibonacci sequence up to a specified number of terms using recursion.It prompts the user to enter the number of terms and then uses a recursive function to generate and displays the fibonacci sequence.

// Function to calculate Fibonacci using recursion
function fibonacci(n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Function to display Fibonacci sequence
function displayFibonacci(num) {
  for (let i = 0; i <= num; i++) {
    console.log(fibonacci(i));
  }
}

//? Prompt user to enter the number of terms
function fibonacciTerm(...terms) {
  terms.forEach((n) => {
    if (!isNaN(n) && n > 0) {
      console.log(`Fibonacci sequence for ${n} terms:`);
      displayFibonacci(n);
      console.log("");
    } else {
      console.log(`"${n}" is not a valid number.`);
    }
  });
}

//? Call the function to get the number of terms from the user
fibonacciTerm(4, 10);
