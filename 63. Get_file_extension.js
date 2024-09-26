//*----- Get file extension

//? To get the file extension from a string repersenting a file name in javascript,you can use the various methods. One common approach is to use the split() method to split the file name based on the dot(.) and then extract the last part of the resulting array.

function getFileExtension(fileName) {
  //? Split the file name based on the dot(.) and then extract the last part of the resulting array

  //* method 1
  let fileExtension = fileName.split(".").pop();
  return fileExtension;

  //* method 2
  let fileSplit = fileName.split(".");
  console.log(fileSplit);
  let extensionPart = fileSplit.at(-1);
  console.log(part);
  return extensionPart;

  //* method 3
  let parts = fileName.split(".");
  let extension = parts[parts.length - 1];
  return extension;
}
//? Example usage
let file = getFileExtension("index.html");
console.log(file);
