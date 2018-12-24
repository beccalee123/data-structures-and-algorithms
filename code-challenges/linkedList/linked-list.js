'use strict';

const util = require('util');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }
  insert(value){
    let node = new Node(value);
    if(! this.head){
      this.head = node;
      return;
    }
    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = node;
  }
}

let list = new LinkedList();
list.add('Buddy the Cat');
list.add('Hank the Cat');
list.add('Leo the Dog');
list.add('Poppy the Dog');

console.log(util.inspect(list, {depth:10}));



