//*-------- create countdown timer

//? Create a countdown timer in javascript, you can use the setInterval() function to update the timer at the regular intervals and calculate the remaining time.

function count(time) {
  console.log(time);
  time = time - 1;
  return time;
}
let time = 10;
let intervalid = setInterval(() => {
  if (time > 0) {
    time = count(time);
  } else {
    console.log("time's up");
    clearInterval(intervalid);
  }
}, 1000);
