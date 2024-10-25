//*---- generate pascel's triangle

//? Pascel's triangle is a triangular array of binomial coefficients.Each number in the triangle is the sum of the two directly above it.

//* approach 1 generate pascel triangle

function pascelTriange(numrow) {
  let result = [[1]];
  for (let i = 1; i < numrow; i++) {
    let newRow = [1];
    let prevRow = result[result.length - 1];
    for (let j = 0; j < prevRow.length - 1; j++) {
      newRow.push(prevRow[j] + prevRow[j + 1]);
    }
    newRow.push(1);
    result.push(newRow);
  }
  return result;
}
const output = pascelTriange(5);
console.log(output);

//* approach 2  binomial coefficients

function generatePascelTriangles(numRows) {
  if (!Number.isInteger(numRows) || numRows < 0) return "invalid input";
  const pascelTriange = [];

  for (let i = 0; i < numRows; i++) {
    const row = [];
    for (let j = 0; j <= i; j++) {
      // calculate the binomial coefficients using nCr formula
      const coefficient = (factotial(i) / factotial(j)) * factotial(i - j);
      row.push(coefficient);
    }
    pascelTriange.push(row);
  }
}

// Helper function to calculate factorial
function factotial(n) {
  if (n < 2) return 1;
  return n * factotial(n - 1);
}

const noOfRows = 5;
const pascelTriangle = generatePascelTriangles(noOfRows);
console.log(pascelTriangle);
