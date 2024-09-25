//*----- check whether a string contains a substring

//? This program check whether a string contains a substring in javascript using includes() method or the indexOf() method.

function checkSubString(str) {
  let subString = "abc";
  if (str.includes(subString)) {
    console.log(`${subString} is found in the string`);
  } else {
    console.log(`${subString} is not found in the string`);
  }
}
checkSubString("i love to solve problem and build websites");
