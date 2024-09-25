//*---------- Check if a string starts with another string

//? This program checks if a string starts with another string using the startsWith() method.

function startWithAnotherString(str1, str2) {
  if (str1.startsWith(str2)) {
    return true;
  } else {
    return false;
  }
}
startWithAnotherString("frontend developer", "backend developer");
