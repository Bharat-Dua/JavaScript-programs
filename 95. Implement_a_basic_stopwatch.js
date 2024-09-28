//*----- Implement a basic stopwatch

//? To implement a basic stopwatch in javascript,you can use the Date object to measure elapsed time.

let startTime;
let stopWatchInterval;
function stopwatch() {
  startTime = new Date().getTime();
  stopWatchInterval = setInterval(updateDisplay, 1000);
}

function stopTimer() {
  clearInterval(stopWatchInterval);
}

function resetTimer() {
  clearInterval(stopWatchInterval);
  startTime = new Date().getTime();
}
function updateDisplay() {
  let currentTime = new Date().getTime();
  let elapsedTime = Math.floor((currentTime - startTime) / 1000);
  const minutes = Math.floor(elapsedTime / 60);
  const seconds = elapsedTime % 60;
  const formatTimer = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
  document.getElementById("timer").innerHTML = formatTimer;
}
