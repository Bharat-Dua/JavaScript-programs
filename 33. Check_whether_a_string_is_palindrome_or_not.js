//*--------- check whether a string is palindrome or not

//? This program check whether a given string is a palindrome or not.A palindrome is a string that reads the same forward as backward.

function isPalindrome(str) {
  const normalizedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversedStr = normalizedStr.split("").reverse().join("");
  return normalizedStr === reversedStr;
}

// Prompt the user to enter a string
function checkPalindrome(userInput) {
  if (userInput) {
    const result = isPalindrome(userInput);
    if (result) {
      console.log(`'${userInput}' is a palindrome.`);
    } else {
      console.log(`'${userInput}' is not a palindrome.`);
    }
  } else {
    console.log("No input provided.");
  }
}

checkPalindrome("bharat");
