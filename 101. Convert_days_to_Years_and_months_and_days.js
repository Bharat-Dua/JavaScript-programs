//*------ Convert days to years,months and days

//? To convert a given number of days into years,months and remaining days in javascript, you can use the following  function:
function convertDaysToYearsMonthsDays(days) {
  let years = Math.floor(days / 365);
  let remainingDaysAfterYears = days % 365;
  let months = Math.floor(remainingDaysAfterYears / 30);
  let remainingDaysAfterMonths = remainingDaysAfterYears % 30;
  return { years, months, days: remainingDaysAfterMonths };
}

let result = convertDaysToYearsMonthsDays(1000);
console.log(
  `${days} days is approximately ${result.years} years, ${result.months} months and  ${result.days} days`
);
