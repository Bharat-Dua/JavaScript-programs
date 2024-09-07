//* ------- Convert kilometers to miles

//? This program prompts the user to enter a distance in kilometers and converts it into miles using the conversion factor : 1 kilometer is approximately equal to 0.621371 miles. It then displays the converted distance.

// prompts user to enter distance in kilometers
let kilometers = parseFloat(prompt("Enter the distance in kilometers: "));

//converison
const kilometersToMilesConversionFactor = 0.621371;
// check if input is a valid number
if (!isNaN(kilometers)) {
  //convert kilometer to miles
  let miles = kilometers * kilometersToMilesConversionFactor;
  console.log(`${kilometers} kilometers is approximately ${miles} miles`);
} else {
  console.log("Invalid input. Please enter a valid number");
}
