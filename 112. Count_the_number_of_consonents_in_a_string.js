//*------ count the number of consonents in a string

//? You can create a javascript function to count the number of consonents in a given string.

function countConsonents(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (char.match(/[a-z]/) && !char.match(/[aeiou]/)) {
      count++;
    }
  }
  return count;
}

console.log(countConsonents("Hello world"))
