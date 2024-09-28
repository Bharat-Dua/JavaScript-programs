//*------- generate a random quote

//? To generate  a random quote, we need to store the quotes in an array and then use the Math.random() function to select a random index from the array. We can then use that index to access the quote at that index in the array.

const quotes = [
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The only way to do great work is to love what you do",
  "In three words i can sum up everything i've learned about life: it goes on",
  "Get busy living or get busy dying",
  "The way to get started is to quit talking and begin doing. - Walt Disney",
  "Don't watch the clock; do what it does. Keep going. - Sam Levens",
];

function getRandomQuote(quotes) {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

console.log(getRandomQuote(quotes));
