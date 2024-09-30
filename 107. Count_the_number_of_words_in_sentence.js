//*---- count the number of words in sentence

//? To count the number of words in sentence in javascript,you can create a function that splits the sentence into words and then counts the number of resulting elements in an array.

function countWords(sentence) {
  return sentence.split(" ").length;
}
console.log(countWords("Hello world this is a test")); // Output: 6
console.log(countWords("I am a developer")); // Output: 4
