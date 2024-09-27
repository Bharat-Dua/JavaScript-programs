//*------- capitalize the first letter of string

//? To capatilaze the first letter of a string in javascript,you can use a combination of the chatAt(),toUpperCase(),slice methods.

function capitalizeFirstLetter(str) {
  if (str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

let exampleString = "hello world";
let capitalizedString = capitalizeFirstLetter(exampleString);
console.log(capitalizedString);
