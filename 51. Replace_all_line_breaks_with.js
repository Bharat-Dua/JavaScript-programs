//*-------- Replace all line breaks with

//? This program replace all line breaks (newline character) in a string with a specific string or character,you can use the replace() method with a regular expression.

function replaceLineBreaks(str, char, replacement) {
  let regex = new RegExp(char, "g");
  console.log(regex);
  let modified = str.replace(regex, replacement);
  console.log(modified);
}
replaceLineBreaks("Hello,\nWorld!\nThis is new line", "\n", "-");
