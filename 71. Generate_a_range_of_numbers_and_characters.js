//*------- generate a range of numbers and characters

//?To  generate a range of numbers and characters in javascript,you can use a loop or other methods depending on your specific requirement.

//* for numbers
function generateRange(start, end) {
  let result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}

let numberRange = generateRange(5, 10);
console.log(numberRange);

//* for characters

function generateCharRange(startChar, endChar) {
  let result = [];
  // Get the character codes of the start and end characters
  let startCode = startChar.charCodeAt(0);
  let endCode = endChar.charCodeAt(0);

  for (let i = startCode; i <= endCode; i++) {
    // Convert the character code back to a character and push it to the result array
    result.push(String.fromCharCode(i));
  }

  return result;
}

// Example usage:
let charRange = generateCharRange("a", "e");
console.log(charRange); // Output: ['a', 'b', 'c', 'd', 'e']
