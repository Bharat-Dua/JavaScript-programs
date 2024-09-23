//*------- sort words in alphabetical order

//? This program prompts the user to enter a sentence or list of words and then sorts and displays the words in alphabetical order.

function sortWords(str) {
  let words = str.split(" ");
  let sort = words.sort();
  let sortedWordsToStr = sort.join(" ");

  console.log(sort);
  console.log(sortedWordsToStr);
  return words;
}
sortWords("I love to try new things");
