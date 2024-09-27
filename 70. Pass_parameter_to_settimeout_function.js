//*---- pass parameter to settimeout() function

//? To pass a parameter to a function inside settimeout(),you can use an anonymous function or an arrow function.

function myFunc(para) {
  console.log(`parameter received`, para);
}
let para = "Hello, world!";

setTimeout(() => {
  myFunc(para);
}, 1000);
