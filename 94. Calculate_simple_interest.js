//*-------- calculate simple interest

//? Program to calculate simple interest in javascript.

function calculateSimpleInterest(principal, rate, time) {
  let interest = (principal * rate * time) / 100;
  return interest;
}

console.log(calculateSimpleInterest(1000, 5, 2));
