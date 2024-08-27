//* ------ Calculate the area of a triangle
//? This program prompts the user to enter the base and height of a triangle and calculates its area using the formula: Area = 12*Base*heightArea=21*Base*height.It then displays the calculated area.

let base = parseFloat(prompt("Enter the base of the triangle:"));
let height = parseFloat(prompt("Enter the height of the triangle:"));
if (!isNaN(base) && !isNaN(height) && base > 0 && height > 0) {
  let area = 0.5 * base * height;
  console.log(
    `The area of the triangle with ${base} and ${height} is: ${area}`
  );
} else {
  console.log("please enter valid +ve numbers for base and height");
}
