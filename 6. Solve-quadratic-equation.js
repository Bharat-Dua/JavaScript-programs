//*-------- Solve quadratic equation

//? This program solved a quadratic equation of the form a*^2+bx+c=0,where a,b,and c are coefficients.It uses the quadratic formula to find the roots of the equation.

//? The quadratic formula is x=(-b±√(b^2-4ac))/2
function solveQuadratic(a, b, c) {
  //? Calculate the discriminant
  let discriminant = b ** 2 - 4 * a * c;
  //? Check if the discriminant is positive, zero, or negative
  if (discriminant > 0) {
    //? If the discriminant is positive, there are two distinct real roots
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [root1, root2];
  } else if (discriminant === 0) {
    //? If the discriminant is zero, there is one real root
    let root = -b / (2 * a);
    return [root];
  }
  //? If the discriminant is negative, there are no real roots
  else {
    return [];
  }
}

//? Test the function with some examples
console.log(solveQuadratic(1, -3, 2)); // Output: [
//? 2, 1
console.log(solveQuadratic(1, 2, 1)); // Output: []
console.log(solveQuadratic(1, 0, -4)); // Output: [
//? 2
console.log(solveQuadratic(1, 0, 0)); // Output: []
console.log(solveQuadratic(1, 0, 1)); // Output: []

//* method 2
//? Prompts user for coefficient
let a = parseFloat(prompt("Enter the coefficient a: "));
let b = parseFloat(prompt("Enter the coefficient b: "));
let c = parseFloat(prompt("Enter the coefficient c: "));

//? calculate the discriminant
let discriminant = b ** 2 - 4 * a * c;

//? check if roots are real
if (!NaN(a) && !isNaN(b) && !NaN(c)) {
  if (discriminant > 0) {
    let root_1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root_2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    console.log(`The root of the quadric equation are ${root_1} and ${root_2}`);
  } else if (discriminant === 0) {
    let root = -b / (2 * a);
    console.log(`The quadric equation has repeated root: ${root}`);
  } else {
    console.log("The equation has no real roots");
  }
} else {
  console.log("Invalid input");
}
