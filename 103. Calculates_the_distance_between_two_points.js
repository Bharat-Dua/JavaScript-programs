//*------- calculates the distance between two points

//? To calculates the distance between two points (x1,y1) and (x2,y2) in a two-dimensional plane.

function calculateDistance(x1, y1, x2, y2) {
  let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  return distance;
}

let distance = calculateDistance(1, 1, 4, 4);
console.log(`The distance  between the points is: ${distance}`);
