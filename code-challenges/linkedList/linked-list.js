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

  //Insert method that inserts a value as the head
  insert(value){
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
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

  //adds a new node with that value to the end of the list
  append(value) {
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
  
  insertBefore(value, newValue){
    let node = new Node(newValue);
    let current = this.head;
    let previous = this.head;
    while (current.value !== value){
      previous = current;
      current = current.next;
    }
    node.next = current;
    previous.next = node;
  }

  insertAfter(value, newValue){
    let node = new Node(newValue);
    let current = this.head;
    while(current.value !== value){
      current = current.next;
    }
    node.next = current.next;
    current.next = node;
  }
}



let list = new LinkedList();
//adds list items
list.append('Buddy the Cat');
list.append('Poppy the Dog');
list.insert('Hank the Cat');
list.insertAfter('Buddy the Cat', 'Leo the Dog');
list.insertBefore('Buddy the Cat', 'Atlas the Dog');

// console.log(util.inspect(list, {depth:10}));

//prints list
// list.print();

// includes item method, returns true/false
// list.includes('Leo the Cat');

module.exports = { LinkedList };
