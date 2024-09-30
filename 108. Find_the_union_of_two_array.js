//*---- find the union of two array

//? To find the union of two array in javascript,you can create a function that concatenates the arrays and  removes duplicates element.

function union(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}
console.log(union([1, 1, 1, 1, 2, 3], [3, 2, 4, 5, 6, 1, 1]));
