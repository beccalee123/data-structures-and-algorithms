'use strict';

const util = require('util');


//Node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Linkedlist class
class LinkedList {
  constructor() {
    this.head = null;
  }
  //adds a new node with that value to the head of the list
  insert(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  //includes method, which returns a boolean for whether or not an item exists in the list
  includes(value) {
    let current = this.head;
    while (current !== null) {
      if (value === current.value) {
        console.log(true);
        return true;
      } else {
        current = current.next;
      }
    } console.log(false);
    return false;
  }

  //Define a method called print which takes in no arguments and outputs all of the current Node values in the Linked List.
  print() {
    let printArr = [];
    let current = this.head;
    while(current){
      printArr.push(current.value);
      current = current.next;
    }
    console.log(printArr);
    return printArr;
  }
}



let list = new LinkedList();
//adds list items
list.insert('Buddy the Cat');
list.insert('Hank the Cat');
list.insert('Leo the Dog');
list.insert('Poppy the Dog');

//prints list
list.print();

// includes item method, returns true/false
list.includes('Leo the Cat');

module.exports = { LinkedList };
