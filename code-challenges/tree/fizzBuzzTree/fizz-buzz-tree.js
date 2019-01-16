'use strict';

const trees = require('../tree.js');

function fizzBuzzer(node) {
  if (node.value % 3 === 0 && node.value % 5 === 0) {
    node.value = 'FizzBuzz';
  }
  else if (node.value % 5 === 0) {
    node.value = 'Buzz';
  }
  else if (node.value % 3 === 0) {
    node.value = 'Fizz';
  }
  return node.value;
}

function fizzBuzzTree(tree) {
  if(!tree) {return;}
  if(!tree.root){return;}
  let traverse = (node) => {
    if (node.left) {
      traverse(node.left);
    }
    if (node.right) {
      traverse(node.right);
    }
    node = fizzBuzzer(node);
    node = fizzBuzzer(node);

  };
  traverse(tree.root);


  return tree;
}


let tree = new trees.BinaryTree();
let a = new trees.Node(12);
let b = new trees.Node(30);
let c = new trees.Node(6);
let d = new trees.Node(1);
let e = new trees.Node(15);
a.left = b;
a.right = c;
b.left = d;
b.right = e;
tree.root = a;

console.log(fizzBuzzTree(tree));

console.log(tree);

module.exports = {fizzBuzzTree, fizzBuzzer};