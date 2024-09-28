//*---- convert minutes to hours and minutes

//? To convert a total number of minutes to hours and remaining minutes in javascript,you can use simple mathematical operations.

function convertMinutesToHoursAndMinutes(totalMinutes) {
  if (isNaN(totalMinutes) || totalMinutes <= 0) {
    return "Invalid input";
  }
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  const result = `${hours} hours ${minutes} minutes`;
  return result;
}
console.log(convertMinutesToHoursAndMinutes(112));
