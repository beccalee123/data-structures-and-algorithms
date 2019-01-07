'use strict';

//Node Class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//Stack Class

class Stack {
  constructor() {
    this.top = null;
  }

  // Define a method called push which takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.
  push(value) {
    let node = new Node(value);
    if (!this.top) {
      this.top = node;
      node.next = null;
    }
    else {
      this.top = node;
      node.next = this.top;
    }
    this.top = value;
  }

  // Define a method called pop that does not take any argument, removes the node from the top of the stack, and returns the node.
  pop() {
    if (this.top) {
      let value = this.top;
      this.top = this.next;
      return value;
    }
    else {
      return false;
    }
  }

  // Define a method called peek that does not take an argument and returns the node located on the top of the stack.
  peek() {
    if (this.top) {
      return this.top;
    }
    else {
      return null;
    }
  }
}

//Queue Class
class Queue {
  constructor() {
    this.rear = null;
    this.front = null;
  }

  // Define a method called enqueue which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.
  enqueue(value) {
    let node = new Node(value);
    if (!this.front) {
      this.front = node;
      this.rear = node;
    }
    else {
      this.rear.next = node;
      this.rear = node;
    }
  }

  // Define a method called dequeue that does not take any argument, removes the node from the front of the queue, and returns the node.

  dequeue() {
    if (!this.front) {
      return false;
    }
    else {
      let dequeuedItem = this.front;
      this.front = this.front.next;
      return dequeuedItem;
    }
  }

  // Define a method called peek that does not take an argument and returns the node located in the front of the stack.

  peek() {
    if (this.front) {
      return this.front;
    }
    else {
      return null;
    }
  }
}

module.exports = {Stack, Queue, Node};