//*---------Find the largest among three numbers

//* method 1
function findLargest(a, b, c) {
  if (!isNaN(a) || !isNaN(b) || !isNaN(c)) {
    if (num1 >= num2 && num1 >= num3) {
      return num1;
    } else if (num2 >= num1 && num2 >= num3) {
      return num2;
    } else {
      return num3;
    }
  } else {
    return "Invalid input";
  }
}

let largest = findLargest(5, 8, 3);
console.log(`The largest number is: ${largest}`);

//* method 2
function largestNumber(a, b, c) {
  if (!isNaN(a) || !isNaN(b) || !isNaN(c)) {
    let largest = Math.max(a, b, c);
    return largest;
  } else {
    return "Invalid input";
  }
}

let largestNum = largestNumber(4, 5, 6);
console.log(`The largest number is: ${largest}`);
