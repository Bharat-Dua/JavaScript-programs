//*--------- check the number of occurences of a character in the string

//? This program checks the number of occurences of a character in a given string.

function countOccurence(str, target) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === target) {
      count++;
    }
  }
  console.log(count);
  return count;
}

countOccurence("bharat", "a");
