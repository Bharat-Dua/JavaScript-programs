//*---------- format the date

//? Formatting a date in javascript typically involves using the toLocaleDateString() method or constructing a formatted string manually . The toLocaleDateString() method provides a way to format a date based on the user's locale including options for formatting the date, such as specifying the date style and time zone.

function formatDate() {
  let date = new Date();
  let formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    timeZone: "Asia/kolkata",
  });
  console.log(formattedDate);
  return formattedDate;
}
formatDate();

//*----- to format the time also along with date

function formatDate() {
  let date = new Date();
  let formattedDate = date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    weekday: "long",
    timeZone: "Asia/kolkata",
  });
  console.log(formattedDate);
  return formattedDate;
}
formatDate();
