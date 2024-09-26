//*------- Encode a string to  base64

//? This program encode a string to Base64 in javascript,you can use the   btoa() function to encode a string to base64.

//?The btoa() function is used to convert a string into a base-64 encoded string. The btoa() function takes a string as an argument and returns a base-64 encoded string.

//* method-1
function base64(str) {
  let base64EncodedString = btoa(encodeURIComponent(str));

  console.log(str);
  console.log(base64EncodedString);

  return btoa(base64EncodedString);
}
base64("developer");

//* method-2

function b(str) {
  console.log(btoa(str));
  
  return btoa(str);
}
b("developer");
