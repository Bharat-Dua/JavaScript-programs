//*------- count the number of vowels in a string

//? This program count the number of vowels in a string.

function countVowels(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char.toLowerCase())) {
      count++;
    }
  }

  console.log(count);
  return count;
}

countVowels("front end developer");
