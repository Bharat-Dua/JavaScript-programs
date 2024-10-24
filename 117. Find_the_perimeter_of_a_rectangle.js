//*----- find the perimeter of a rectangle

//? This program finds the perimeter  of a rectangle given the lengths of its sides(length and width). The formula for the perimeter of a rectangle is:  perimeter = 2 * (length + width)

function findPerimeter(length, width) {
  const perimeter = 2 * length * width;
  return perimeter;
}
console.log(findPerimeter(3, 6));
