//* -------------- Find armstrong number in an interval

//? This program prompts the user to enter a range (start and end) and then prints all Armstrong numbers within that interval.

function findArmStrongInterval(start, end) {
  if (
    !isNaN(start) &&
    !isNaN(end) &&
    Number.isInteger(start) &&
    Number.isInteger(end) &&
    start > 0 &&
    start < end
  ) {
    for (let i = start; i <= end; i++) {
      let num = i;
      let sum = 0;
      let temp = num;
      while (temp != 0) {
        let remainder = temp % 10;
        sum = sum + Math.pow(remainder, 3);
        temp = Math.floor(temp / 10);
      }
      if (sum == num) {
        console.log(num + " is an Armstrong number");
      }
    }
  } else {
    console.log("Invalid input");
  }
}
findArmStrongInterval(222, 343);

//* method 2

function findArmStrongInterval(start, end) {
    if (
      !isNaN(start) &&
      !isNaN(end) &&
      Number.isInteger(start) &&
      Number.isInteger(end) &&
      start > 0 &&
      start < end
    ) {
      for (let i = start; i <= end; i++) {
        let num = i;
        let sum = 0;
        let temp = num;
        let noOfDigits = num.toString().length;
        while (temp != 0) {
          let remainder = temp % 10;
          sum = sum + Math.pow(remainder, noOfDigits);
          temp = Math.floor(temp / 10);
        }
        if (sum === i) {
          console.log(i + " is an Armstrong number");
        }
      }
    } else {
      console.log("Invalid input");
    }
  }
  
  
findArmStrongInterval(222, 343);
