//*------- pass a function as  an argument to another function/parameter

//? You can pass a function as a parameter to another function.This allows you to create higher-order functions, which are functions that can accept other functions as arguments.
function add(a, b) {
  return a + b;
}

function passingFunctionAsArg(callback, x, y) {
  let result = callback(x, y);
  console.log(result);
  return result;
}

let output = passingFunctionAsArg(add, 4, 5);
console.log(output);
