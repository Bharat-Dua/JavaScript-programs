//*----- convert the first letter of a string into uppercase

//? This program converts the first letter of a string into uppercase.

function firstLetterUppercase(str) {
  // from array
  let result = str.split("")[0].toUpperCase() + str.slice(1);
  // from string
  let result1 = str.charAt(0).toUpperCase() + str.slice(1);

  console.log(result);
  console.log(result1);

  return result;
}
firstLetterUppercase("bharat dua");
