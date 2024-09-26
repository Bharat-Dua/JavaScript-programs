//*---------- Insert item in an array

//? Insert item into an arrray in javascript, you can use the push() method to add item an end of the array,or the splice() method to insert iem at a specified index.

//* method 1 : using push()

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let modifiedArray = arr.push(18);
console.log(arr);

//* method 2 - using splice

arr.splice(3, 0, 23);
console.log(arr);
