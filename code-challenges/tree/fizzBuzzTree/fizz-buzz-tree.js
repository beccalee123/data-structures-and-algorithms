'use strict';

const trees = require('../tree.js');

function fizzBuzzer(val) {
  if (val % 3 === 0 && val % 5 === 0) {
    val = 'FizzBuzz';
  }
  else if (val % 5 === 0) {
    val = 'Buzz';
  }
  else if (val % 3 === 0) {
    val = 'Fizz';
  }
  return val;
}

function fizzBuzzTree(tree) {
  // if (tree.root) {
  let node = tree.root;
  let traverse = (node) => {
    let current = node;
    if (node.left) {
      current = fizzBuzzer(node);
      traverse(node.left);
    }
    if (node.right) {
      current = fizzBuzzer(node);
      traverse(node.right);
    }
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
