//*---- implement a stack

//? You can implement a stack data  structure using an array in JavaScript.

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }
  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }
  isEmpty() {
    return this.items.length === 0;
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items);
  }
}

let myStack = new Stack();
myStack.push(5);
myStack.push(10);
console.log(myStack.peek()); // Output: 10
myStack.pop();
console.log(myStack.peek()); // Output: 5
