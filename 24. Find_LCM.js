//*----- find LCM

//?  This program promps the user to enter two positive number and calculates their least common multiple (LCM).

function findLCM(num1, num2) {
  if (
    !isNaN(num1) &&
    !isNaN(num2) &&
    num1 > 0 &&
    num2 > 0 &&
    Number.isInteger(num1) &&
    Number.isInteger(num2)
  ) {
    let max = Math.max(num1, num2);
    let lcm = max;
    while (true) {
      if (lcm % num1 === 0 && lcm % num2 === 0) break;
      lcm += max;
    }
    return lcm;
  } else {
    console.log("please enter valid number");
  }
}
findLCM(4, 8);
