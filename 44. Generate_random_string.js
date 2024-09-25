//*------- Generate random string

//? This program generates a random strings in javascript,you can create a function that generates random string with random characters.

function generateRandomString(length) {
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }
  return randomString;
}

//? Example usage of the function
let randomString = generateRandomString(10);
console.log(randomString);
