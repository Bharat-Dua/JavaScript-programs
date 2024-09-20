//*--------- shuffle deck of cards

//? This program simulates shuffling a standard deck of playing cards.It generates a deck of cards,displays the initial order,shuffles the deck,and then displays the shuffled order.

//  function to create a standard deck of cards
function createDeck() {
  // Array of suits
  const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];

  // Array of ranks
  const ranks = [
    "Ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
  ];

  let deck = [];
  for (const suit of suits) {
    for (const rank of ranks) {
      deck.push(`${rank} of ${suit}`);
    }
  }
  console.log(deck);
  return deck;
}
createDeck();

// function to shuffle the deck of cards

function shuffleCard(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]]; // swap elements to shuffle
  }
}

// create and dispay intial deck of cards

const initialCard = createDeck();
console.log("initial deck");
console.log(initialCard);

// shuffle the deck and dispay the shuffled deck
const shuffledDeck = [...initialCard];
shuffleCard(shuffledDeck);
console.log("shuffled deck");
console.log(shuffledDeck);
