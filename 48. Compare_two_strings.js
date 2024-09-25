//*----- compare two strings

//? This program compares two string in javascript,you can use the standard comparison operators (===,!==,<,>,<=,>=).

//? The comparison operators return a boolean value (true or false) indicating whether the strings are equal or not.
//? The comparison is case-sensitive.
//? The comparison is lexicographical, meaning it compares the strings character by character from left to
//? right.
//? The comparison is done using the Unicode code points of the characters.

function checkStringsEqualOrNot(str1, str2) {
  if (str1.toLowerCase() === str2.toLowerCase()) {
    console.log("Both strings are equal");
  } else {
    console.log("Both strings are not equal");
  }
}
checkStringsEqualOrNot("code", "CODING");
checkStringsEqualOrNot("code", "CODE");
checkStringsEqualOrNot("code", "code");
