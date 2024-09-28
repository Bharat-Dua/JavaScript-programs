//*------ find the intersection between two array

//? To find the intersection of two arrays in javascript,you can create a function that iterates through both arrays and identifies the common elements.

//* method 1 using filter
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr2 = [4, 5, 6, 7, 8, 9, 10, 11];
function findIntersection(arr1, arr2) {
  let intersection = arr1.filter((ele) => arr2.includes(ele));
  return intersection;
  console.log(intersection);
}
console.log(findIntersection(arr1, arr2));
//* method 2 using set
function findIntersection(arr1, arr2) {
  let set = new Set(arr1);
  const commonElement = arr2.filter((element) => set.has(element));
  console.log(commonElement);
  return commonElement;
}
console.log(findIntersection(arr1, arr2));
