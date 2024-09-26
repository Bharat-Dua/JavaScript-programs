//*--------- check if a variable is of function type

//? To check if a variable is of function type , we can use the typeof operator in JavaScript. The typeof operator returns a string indicating the type of the variable. If the variable is a function, it returns "function".

function checkFunctionType(varToCheck) {
  if (typeof varToCheck === "function") {
    console.log(varToCheck.name + " is a function");
  } else {
    console.log(varToCheck.name + " is not a function");
  }
}

//? Example usage:
let myVar = function () {
  console.log("hello world");
};
checkFunctionType(myVar);
