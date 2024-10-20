//*------- find the area of a trapezoid

//? This program calculates the area of a trapezoid given the lengths of its bases (a and b) and its height (h). The formula for the area of a trapezoid is : Area=  (a+b)h/2

function findAreaOfTrapezoid(a, b, h) {
  let area = ((a + b) * h) / 2;
  return area;
}

console.log(findAreaOfTrapezoid(5, 9, 4));
