'use strict';

let sq = require('../stacks-and-queues.js');

let s1 = new sq.Stack();
s1.push(10);
s1.push(15);
s1.push(20);

let s2 = new sq.Stack();

class PseudoQueue{

  enqueue(value){
    while(s1.peek().value !== null){
      let popNum = s1.pop();
      s2.push(popNum);
    }
    s1.push(value);
    while(s2.peek().value !== null){
      let popNum = s2.pop();
      s1.push(popNum);
    }
    return s1;
  }

  dequeue(){
    return s1.pop();
  }
}

let test = new PseudoQueue();
test.enqueue(5);