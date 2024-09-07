//* ------- Convert celcius to Fahrenheit

//? This program converts a temperature from celcius to Fahrenheit using the formula: F=(C*9/5)+32, where F is the temperature in the fahrenheit and C is the temperature in Celcius.
//? The program will ask the user for the temperature in Celcius and then it will print the temperature in Fahrenheit.

// prompt user for temperature in celsius
let celsius = Number(prompt("Enter temperature in Celcius: "));

// check if input is valid
if (isNaN(celsius)) {
  console.log("Invalid input. Please enter a number.");
} else {
  // convert celsius to fahrenheit
  let fahrenheit = (celsius * 9) / 5 + 32;
  console.log(`${celsius} degrees Celcius is equal to ${fahrenheit} degrees Fahrenheit
            `);
}
