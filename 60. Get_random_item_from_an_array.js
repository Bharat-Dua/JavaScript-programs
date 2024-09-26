//*---- get random item from an array

//? To get an random item from an array in javascript, you can use the Math.random() method to generate an random index within the array length.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let randomIndex = Math.floor(Math.random() * arr.length);
let randomItem = arr[randomIndex];
console.log(randomItem);
