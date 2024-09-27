//*------ check if a string is empty

//? To check if a string is empty in javascript,you can use the length property of the string.If the length is zero means string is empty.

function checkEmptyString(str) {
  if (str.length === 0) {
    return true;
  }
  return false;
}
console.log(checkEmptyString("")); // true
console.log(checkEmptyString("Hello")); // false

//? or you can use trim() method to remove spaces from the string and then check its length. If the length is zero means string is empty.

function checkEmptyStringTrim(str) {
  if (str.trim().length === 0) {
    return true;
  }
  return false;
}
console.log(checkEmptyStringTrim("   ")); // true
console.log(checkEmptyStringTrim("Hello")); // false

//? or you can use if statement to check if the string is empty
function checkEmptyStringIf(str) {
  if (!str) {
    return true;
  }
  return false;
}
console.log(checkEmptyStringIf("")); // true
console.log(checkEmptyStringIf("Hello")); // false
