//*------ replace all instances of a character in a string

//? This program replace all instances of a character in a string in JavaScript,you can use the replace() method with a regular expression.

function replaceChar(str, char, replacement) {
  let regex = new RegExp(char, "g");
  console.log(regex);
  let modified = str.replace(regex, replacement);
  console.log(modified);
  return modified;
}
replaceChar("Hello,world", "l", "x");
