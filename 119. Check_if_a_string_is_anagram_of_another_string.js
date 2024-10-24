//*------ check if a string is an anagram of another string

//? An anagram is a word or phrase formed by rearranging the letters of another.To check if two strings are anagrams,you can compare whether the characters in both strings have the same frequency.

//* approach 1
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  const count = {};
  for (const letter of str1) {
    count[letter] = (count[letter] || 0) + 1;
    console.log(count[letter]);
  }
  for (const characters of str2) {
    if (!count[characters]) return false;
    count[characters] -= 1;
  }
  console.log(count);
  return true;
}
const check = isAnagram("hello", "olelh");
console.log(check);
console.log("hello", "olelh");

//* approach 2

function areAnagrams(str1, str2) {
  if (typeof str1 !== "string" || typeof str2 !== "string")
    return "please provide valid strings";
  const cleanStr1 = str1.replace(/[^a-zA-Z]/g, "").toLowerCase();
  const cleanStr2 = str2.replace(/[^a-zA-Z]/g, "").toLowerCase();

  if (cleanStr1.length !== cleanStr2.length) return false;
  const charFrequencyMap1 = {};
  const charFrequencyMap2 = {};

  for (const char of cleanStr1) {
    charFrequencyMap1[char] = (charFrequencyMap1[char] || 0) + 1;
  }
  for (const char of cleanStr2) {
    charFrequencyMap2[char] = (charFrequencyMap2[char] || 0) + 1;
  }

  for (const char in charFrequencyMap1) {
    if (charFrequencyMap1[char] !== charFrequencyMap2[char]) return false;
  }
  return true;
}

const result = areAnagrams("listen", "silent");
console.log(result);

//*  approach 3
function areAnagrams(str1, str2) {
  // Remove spaces and convert to lowercase
  const cleanStr1 = str1.replace(/\s+/g, "").toLowerCase();
  const cleanStr2 = str2.replace(/\s+/g, "").toLowerCase();

  // Sort the characters and compare
  const sortedStr1 = cleanStr1.split("").sort().join("");
  const sortedStr2 = cleanStr2.split("").sort().join("");

  return sortedStr1 === sortedStr2;
}

// Example usage:
console.log(areAnagrams("listen", "silent")); // Output: true
console.log(areAnagrams("evil", "vile")); // Output: true
console.log(areAnagrams("Dormitory", "Dirty room")); // Output: true
console.log(areAnagrams("hello", "world")); // Output: false
