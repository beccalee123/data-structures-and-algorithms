'use strict';

const Hashtable = require('../hashtable.js');
const tree = require('../../tree/tree.js');


function treeIntersection(tree1, tree2){
  let hashmap = new Hashtable(10);
  let result = [];

  const _walk = (node) => {
    if(hashmap.contains(node.value)){
      hashmap.add((node.value));
    }
    if(node.left){_walk(node.left);}
    if(node.right){_walk(node.right);}
  };

  const _walkCheck = (node) => {
    if(hashmap.contains(node.value)){
      result.push(node.value);
    }
    if(node.left){_walkCheck(node.left);}
    if(node.right){_walkCheck(node.right);}
  };

  _walk(tree1.root);
  _walkCheck(tree2.root);

  return result;
}

let tree1 = new tree.BinaryTree();
let tree2 = new tree.BinaryTree();


let a = new tree.Node('hi');
let b = new tree.Node('hello');
let c = new tree.Node('bye');
let d = new tree.Node('wooooooo');
let e = new tree.Node('heyhey');
a.left = b;
a.right = c;
b.left = d;
b.right = e;
tree1.root = a;

let f = new tree.Node('heyhey');
let g = new tree.Node('myohmy');
let h = new tree.Node('bye');
let i = new tree.Node('aloha');
let j = new tree.Node('ohboy');
f.left = g;
f.right = h;
g.left = i;
g.right = j;
tree2.root = f;

console.log(treeIntersection(tree1, tree2));