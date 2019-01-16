'use strict';

const sq = require('../stacksAndQueues/stacks-and-queues.js');

class Node {
  constructor(value){
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinaryTree{
  constructor(){
    this.root = null;
  }

  // visits a node when on it. Root, left, right.
  preOrder(){
    let nodes = [];
    let _walk = (node) => {
      nodes.push(node.value);
      if(node.left){_walk(node.left);}
      if(node.right){_walk(node.right);}
    };
    _walk(this.root);
    return nodes;
  }

  // inspect each node as you leave it, Left, root, right
  inOrder(){ 
    let nodes = [];
    let _walk = (node) => {
      if(node.left){_walk(node.left);}
      nodes.push(node.value);
      if(node.right){_walk(node.right);}
    };
    _walk(this.root);
    return nodes;
  }
  
  // Left, right, root.
  postOrder(){
    let nodes = [];
    let _walk = (node) => {
      if(node.left){_walk(node.left);}
      if(node.right){_walk(node.right);}
      nodes.push(node.value);
    };
    _walk(this.root);
    return nodes;
  }

  breadthFirstTraversal(tree){
    let q = new sq.Queue();
    q.enqueue(tree.root);
    while(q.length){
      console.log(q.peek().value());
      let current = q.enqueue();
      q.enqueue(current.left);
      q.enqueue(current.right);
    }
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null;
  }

  // accepts a value, and adds a new node with that value in the correct location in the binary search tree.
  add(value){
    let root = this.root;
    if(!root){
      this.root = new Node(value);
      return this.root;
    }

    let currentNode = root;
    let newNode = new Node(value);

    while(currentNode){
      if(value < currentNode.value){
        if(!currentNode.left){
          currentNode.left = newNode;
          return newNode;
        }
        else{
          currentNode = currentNode.left;
        }
      }
      else{
        if(!currentNode.right){
          currentNode.right = newNode;
          break;
        }
        else{
          currentNode = currentNode.right;
        }
      }
    }
  }

  // accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.
  contains(value){
    let boolean = true;
    let _walk = (node) => {
      if(node === null){
        boolean = false;
        return;
      }
      else if(value < node.value){
        _walk(node.left);
      }
      else if(value > node.value){
        _walk(node.right);
      }
      else if(value === node.value){
        boolean = true;
        return;
      }
    };
    _walk(this.root);
    return boolean;  
  }
}

let tree1 = new BinaryTree();
let a = new Node(12);
let b = new Node(30);
let c = new Node(6);
let d = new Node(1);
let e = new Node(15);
a.left = b;
a.right = c;
b.left = d;
b.right = e;
tree1.root = a;

console.log(tree1.breadthFirstTraversal(tree1));


module.exports = {Node, BinaryTree, BinarySearchTree};