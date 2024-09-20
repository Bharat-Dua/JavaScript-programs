//*-------- find ASCII value of character

//? This program prompts the user to enter a character and then calculates and displays its ASCII value.

function getAsciiValue(char) {
  if (char.length === 1) {
    let asciiValue = char.charCodeAt(0);
    return asciiValue;
  } else {
    console.log("please enter exactly one character");
  }
}

let result = getAsciiValue("r");
console.log(result);
