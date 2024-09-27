//*------- convert date to number

//? To convert a JavaScript Date object to a numeric value representing the number of milliseconds since the Unix Epoch(January 1,1970),you can use the getTime() method.

//* method 1
let currentDate = new Date();
let numericDate = currentDate.getTime();

console.log(currentDate);
console.log(numericDate);

//* method 2
let currentMilliseconds = Date.now();
console.log(currentMilliseconds);
