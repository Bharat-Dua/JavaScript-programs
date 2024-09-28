//*------ find the median of an array

//? To find the median of an array in javascript,you can create a function that sorts the array and then determine the median based on its length.

function findMedian(arr) {
  let sortedArray = arr.slice().sort((a, b) => a - b);
  let middleIndex = Math.floor(sortedArray.length / 2);
  // If the array has an odd number of elements, the median is the middle element
  if (sortedArray.length % 2 !== 0) {
    return sortedArray[middleIndex];
  }
  // If the array has an even number of elements, the median is the average of the two
  // middle elements
  const median = (sortedArray[middleIndex - 1] + sortedArray[middleIndex]) / 2;
  return median;
}
let result = findMedian([1, 3, 5, 2, 4]);
console.log(result);
