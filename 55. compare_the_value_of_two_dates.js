//*------- compare the value of two dates

//? Compare the value of two dates using standard comparison operators (<,>,<=,>=)

function compareDates(date1, date2) {
  if (date1 < date2) {
    console.log(`${date1} is earlier than ${date2}`);
  } else if (date2 < date1) {
    console.log(`${date1} is later than ${date2}`);
  } else {
    console.log(`${date1} and ${date2} are equal`);
  }
}
compareDates(new Date("2022-03-01"), new Date("2022-04-01"));
