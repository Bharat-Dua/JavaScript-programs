//*------ calculate the factorial of large number

//? Calculating the factorial of a large number can quickly lead to very large results, and JavaScript has limitations in terms of precision. To handle large factorials, you can use libraries that support arbitrary- precision arithmetic. One such library is the "BigInt" type in JavaScript, which is available in modern environments.

function factorial(n) {
  let result = BigInt(1);
  for (let i = 2; i <= n; i++) {
    result = result * BigInt(i);
  }
  return result.toString();
}

console.log(factorial(40));
