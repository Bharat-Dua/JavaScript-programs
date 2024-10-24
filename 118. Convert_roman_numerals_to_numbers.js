//*-------- convert roman numerals to numbers

//? Converting Roman numerals to numbers involves understanding the roman numeral system and its rules.

function romanToInt(roman) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;
  let prevValue = 0;
  for (let i = roman.length - 1; i >= 0; i--) {
    const current = roman[i];
    const currentValue = romanNumerals[current];
    if (currentValue < prevValue) {
      // Subtract if smaller than previous
      total -= currentValue;
    } else {
      // Add if larger or equal
      total += currentValue;
    }
    prevValue = currentValue;
  }
  return total;
}

console.log(romanToInt("XIV"));
