//*--------- Replace all occurence of a string

//? Replace all occurences of a substring in a string in javascript,you can use the replace() method along with a regular expression with the global(g) flag.

function replaceAll(str, find, replace) {
  let regex = new RegExp(find, "g");
  let replaceString = str.replace(regex, replace);
  console.log(replaceString);
  console.log(str);
  //*------- OR------
  let original = str.split(find).join(replace);
  console.log(original);
}
replaceAll("front end developer", "developer", "engineer");
