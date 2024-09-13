//*--- find the factors of a number

//? This program prompts the user to enter a positive number and calculates and displays its factors.

function findFactor(num) {
  if (!isNaN(num) && Number.isInteger(num) && num > 0) {
    for (let i = 1; i < num; i++) {
      if (num % i === 0) {
        console.log(i);
      }
    }
  } else {
    console.log("enter valid number");
  }
}
findFactor(5);
