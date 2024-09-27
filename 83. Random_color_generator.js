//*------- Random color generator

//? To generate random color generator in javascript,you can create a function that generates random values for the red,green,blue components of the color.

function getRandomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  const color = `rgb(${red},${green},${blue})`;
  console.log(color);
  return color;
}

let randomColor = getRandomColor();
console.log(randomColor);
