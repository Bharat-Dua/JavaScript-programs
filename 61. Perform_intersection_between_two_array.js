//*---- perform intersection between two array

//? To find the intersection(common element) between two array in javascript we can use various methods.

//* using built-in  filter method

let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let intersection = arr1.filter((x) => arr2.includes(x));
console.log(intersection);

//*  using set data structure
let arr3 = [1, 2, 3, 4, 5, 6];
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let set1 = new Set(arr3);
let set2 = new Set(arr4);
let intersection1 = [...set1].filter((x) => set2.has(x));
console.log(intersection1);
//? output: [1, 2, 3, 4, 5, 6]

//? using for loop
let array1 = [1, 2, 3, 4, 5];
let array2 = [4, 5, 6, 7, 8];

let intersection2 = [];

for (let i = 0; i < array1.length; i++) {
  for (let j = 0; j < array2.length; j++) {
    if (array1[i] === array2[j]) {
      intersection.push(array1[i]);
      break; // Break to avoid duplicates in the result
    }
  }
}

console.log(intersection2);
