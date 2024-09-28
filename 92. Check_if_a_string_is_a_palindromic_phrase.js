//*------ check if a string is a palindromic phrase

//? To check if a string is a palindromic phrase in javascript,you can create a function that removes non-alphanumeric characters and compares the sting with its reversed version.

function isPalindromicPhrase(str) {
  if (typeof str !== "string") {
    console.log("invalid input");
    return "invalid input";
  }

  let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  console.log(cleanedStr);
  return cleanedStr === cleanedStr.split("").reverse().join("");
}
console.log(isPalindromicPhrase("Hello,world!"));
console.log(isPalindromicPhrase("A man,a plan,a canal, Panama!"));
