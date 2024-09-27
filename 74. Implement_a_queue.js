//*----- implement a queue

//? You can implement a queue data structue in javascirpt using an array.

//* method 1 : using array :  push and shift methods

//* note :- problem with this method : Remember that both the push and pop methods have a time complexity of O(1)? The shift method has a time complexity of O(n).

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    } else {
      return this.items.shift();
    }
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    } else {
      return this.items[0];
    }
  }
  print() {
    console.log(this.items);
  }
}
//* method 2 - Queue optimised implementation - using object

class Queue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }
  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }
  size() {
    return this.rear - this.front;
  }
  isEmpty() {
    return this.size() === 0;
  }
  peek() {
    return this.items[this.front];
  }
  print() {
    console.log(this.items);
  }
}

let queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(14);
queue.enqueue(24);
queue.enqueue(44);
console.log(queue.dequeue());
console.log(queue.size());
queue.print();
