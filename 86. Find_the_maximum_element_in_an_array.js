//*-------- find the maximum element in an array

//? To find the maximum element in an array in javascript,you can use the Math.max() function along with the spread operator(...) to pass the array elements as individual elements.

//* method 1 - optimised

function findMax(arr) {
  return Math.max(...arr);
}

//* method 2 - using if else

function findMax(arr) {
  if (arr.length === 0) return undefined;

  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

let maxElement = findMax([12, 3, 4, 565, 76]);
console.log(maxElement); // Output: 565

//* method 3

function m(a) {
  let b = 0;
  for (let i = 0; i < a.length; i++) {
    b = Math.max(a[i], b);
  }
  console.log(b);
  return b;
}

m([12, 3, 4, 565, 76]);
