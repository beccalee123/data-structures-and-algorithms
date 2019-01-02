'use strict';

const list = require('../linked-list.js');
const util = require('util');

// let list1 = new list.LinkedList();
// let list2 = new list.LinkedList();

// list1.insert(1);
// list1.append(2);
// list1.append(3);

// list2.insert(4);
// list2.append(5);
// list2.append(6);

// console.log(util.inspect(list1, {depth:10}));
// console.log(util.inspect(list1, {depth:10}));


function mergeList(l1, l2){
  let current1 = l1.head;
  let current2 = l2.head;
  let newLL = new list.LinkedList();
  while(current1 || current2){
    if(current1.value){
      newLL.append(current1.value);
      current1 = current1.next;
    }
    if(current2.value){
      newLL.append(current2.value);
      current2 = current2.next;
    }
  }
  // console.log('this is the new list', util.inspect(newLL, {depth:30}));
  // console.log(newLL.head);
  return newLL.head;

}

// mergeList(list1, list2);

module.exports = {mergeList}; 