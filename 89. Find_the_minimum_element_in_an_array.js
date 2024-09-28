//*------ find the minimum element in an array

//? To find the minumum element in an array in javascript,you can use the math.min() function along with the spread operator(...) to pass the array elements as individual arguments.

function findMin(arr) {
  return Math.min(...arr);
}

console.log(findMin([1, 2, 3, 4, 5, 6, 7, 8]));
