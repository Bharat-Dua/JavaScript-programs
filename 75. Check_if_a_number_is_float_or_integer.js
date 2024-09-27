//*------ check if a number is float or integer

//? You can check if a number is float or integer in javascript by its fractional part.

function isFloat(num) {
  if (Number.isInteger(num)) {
    console.log("integer");
  } else {
    console.log("float");
  }
}
isFloat(4);
isFloat(4.0);
