//*---- generate a random password

//? To generate a random password in javascript,you can create a function that combines random characters from various character sets.

function generatePassword(length) {
  let password = "";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*()_+~`|}{[]:";
  let allChars = lowercase + uppercase + numbers + specialChars;
  for (let i = 0; i < length; i++) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }
  console.log(password);
  return password;
}

generatePassword(12);
