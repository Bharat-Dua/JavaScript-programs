//*------- Validate_an_email_address

//? To validate an email address in javascript,we can use an regular expression.

function validate_email(email) {
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(emailRegex);
}

let email = "test@gmail.com";

if (validate_email(email)) {
  console.log("valid");
} else {
  console.log("invalid");
}
