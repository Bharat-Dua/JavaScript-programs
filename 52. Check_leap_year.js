//*------- check leap year

//? This program checks if a year is a leap year with a simple function. A leap year is a year that is evenly divisible by 4, expect for years that are divisible by 100. However, years divisible by 400 are leap years.

function isLeapYear(year) {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}
console.log(isLeapYear(2024));
