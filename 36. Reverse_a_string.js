//*---- Reverse a string

//? This program prompts the user to enter a string and then reverse and displays the characters of the sting.

function reverseStr(str) {
  let splitStr = str.split("").reverse().join("");
  console.log(splitStr);
}
reverseStr("keep chasing your dreams");
