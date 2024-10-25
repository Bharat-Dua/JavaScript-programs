//*------- Basic slot machine game

//? This program simulates a basic slot machine game in which three symbols are randomly selected.if all three symbols are same,the player wins;otherwise,they are encouraged to play again.

const symbols = ["🍒", "🍋", "🍊", "🍉", "⭐", "💰", "🍀", "🔔"];

function getRandomSymbol() {
  const randomIndex = Math.floor(Math.random() * symbols.length);
  return symbols[randomIndex];
}

function spinSlots() {
  const slot1 = getRandomSymbol();
  const slot2 = getRandomSymbol();
  const slot3 = getRandomSymbol();

  console.log(`Slot 1: ${slot1}`);
  console.log(`Slot 2: ${slot2}`);
  console.log(`Slot 3: ${slot3}`);

  if (slot1 === slot2 && slot2 === slot3) {
    console.log("🎉 You Win! 🎉");
  } else {
    console.log("Try Again!");
  }
}

spinSlots();
