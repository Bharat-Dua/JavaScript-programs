//*----- Guess a random number

//? This program generates a random number between a specified range and allows user to guess the number.It provides feedback on whether the guessed number is too high,too low or correct.The user continues guessing untill they correctly identify the random number.

// Function to start the number guessing game
function numberGuessingGame() {
  // Define the range for the random number
  let lowerBound = parseInt(prompt("Enter the lower bound of the range:"), 10);
  let upperBound = parseInt(prompt("Enter the upper bound of the range:"), 10);

  // Validate the range
  if (isNaN(lowerBound) || isNaN(upperBound) || lowerBound >= upperBound) {
    alert(
      "Invalid range. Please ensure that the lower bound is less than the upper bound."
    );
    return;
  }

  const randomNumber =
    Math.floor(Math.random() * (upperBound - lowerBound + 1)) + lowerBound;

  let attempts = 0;
  let guess;

  do {
    // Prompt user to guess the number
    guess = parseInt(
      prompt(`Guess a number between ${lowerBound} and ${upperBound}:`),
      10
    );
    attempts++;

    if (isNaN(guess)) {
      alert("Please enter a valid number.");
      attempts--; // Do not count invalid input as an attempt
      continue;
    }

    if (guess < randomNumber) {
      alert("Too low! Try again.");
    } else if (guess > randomNumber) {
      alert("Too high! Try again.");
    } else {
      alert(
        `Congratulations! You've guessed the number ${randomNumber} correctly in ${attempts} attempts.`
      );
    }
  } while (guess !== randomNumber);
}

// Start the game
numberGuessingGame();
