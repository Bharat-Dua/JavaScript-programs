//*------ Remove an specific item from an array

//? Remove an specific item from an array in javascript,you can use the splice() method or filter() method.

//* method 1 - filter method
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 2, 1, 33, 14, 15, 16];

let filterArray = arr.filter((arr) => arr % 2 != 0);
console.log(filterArray);

//* method 2 - splice  method - it mutates the original array
let itemToRemove = 3;
let indexToRemove = arr.indexOf(itemToRemove);
if (indexToRemove !== -1) {
  arr.splice(indexToRemove, 1);
}
console.log(`original array, ${arr}`);
