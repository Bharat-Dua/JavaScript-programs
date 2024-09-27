//*------ Remove all whitespaces from a text

//? To  remove all whitespaces from a text in javascript, you can use the `replace()` method with a regular expression.

function removeWhitespace(text) {
  let regex = /\s/g;

  return text.replace(regex, "");
}
console.log(removeWhitespace("your days are coming"));
