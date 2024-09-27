//*-------- calculate the area of a circle

//? This program calculates the area of a circle in javascript
//  3.14*r*r

function calculateAreaOfCircle(radius) {
  if (isNaN(radius) || radius <= 0) {
    return "invalid radius";
  }
  // let area = 3.14 * radius * radius;
  let area = Math.PI * Math.pow(radius, 2);
  return area;
}

//? calculate the area of a circle
console.log(calculateAreaOfCircle(5));
