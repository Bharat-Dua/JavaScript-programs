//*-------- perform function overloading

//?  Javascript does not support traditional function overloading like some other programming language do,where you can define multiple function  with the same name but different parameter types or counts.However,you can achieve similar behavior in javascript by checking the number or types of arguments within a function.

function overloadedFunction(...args) {
  if (args.length === 1) {
    if (typeof args[0] === "string") {
      console.log("Called with a string: " + args[0]);
    } else if (typeof args[0] === "number") {
      console.log("Called with a number: " + args[0]);
    }
  } else if (args.length === 2) {
    console.log("Called with two arguments: " + args[0] + ", " + args[1]);
  } else {
    console.log("Invalid number of arguments");
  }
}

// Example usage:
overloadedFunction("Hello");
overloadedFunction(42);
overloadedFunction(1, 2);
overloadedFunction();
