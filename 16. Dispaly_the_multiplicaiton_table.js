//*------- Display the multiplication table

//? This program prompts the user to enter a number and displays its multiplication table up to a specified range (e.g. up to 10);

function prinTable(num) {
  let result = 1;
  for (let i = 1; i <= 10; i++) {
    result = num * i;
    console.log(`${num} * ${i} = ${result}`);
  }
  return result;
}
console.log(prinTable(5));
console.log(prinTable(15));
console.log(prinTable(25));
