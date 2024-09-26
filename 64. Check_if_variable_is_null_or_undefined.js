//*--------- check if variable is null or undefined

//? To check if variable is null or undefined in javascript,we can use a simple conditional statement.

function checkNull(myVar) {
  if (myVar === null || myVar === undefined) {
    console.log("variable is null or undefined");
  } else {
    console.log("variable is not null or undefined");
  }
}
checkNull(null);
