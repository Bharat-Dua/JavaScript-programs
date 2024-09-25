//*------- Format numbers as currency strings

//? This program formats numbers as currency strings

//? It takes a number as input and returns a string with the number formatted as currency

function formatCurrency(number) {
  //? Use the toLocaleString method to format the number as currency
  let formatAmount = number.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  console.log(formatAmount);
}
formatCurrency(123456.789);
