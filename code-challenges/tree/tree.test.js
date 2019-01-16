'use strict';

const trees = require('./tree.js');

describe('Binary tree', () => {

  describe('preOrder method', () => {

    it('traverses through the tree from root, to left, to right', () => {
      let tree = new trees.BinaryTree();
      let a = new trees.Node('a');
      let b = new trees.Node('b');
      let c = new trees.Node('c');
      let d = new trees.Node('d');
      let e = new trees.Node('e');
      a.left = b;
      a.right = c;
      b.left = d;
      b.right = e;
      tree.root = a;
      let result = tree.preOrder();
      expect(result).toEqual(['a', 'b', 'd', 'e', 'c']);
    });

    it('will traverse correctly on a tree made up of different data types', () => {
      let tree = new trees.BinaryTree();
      let a = new trees.Node('a');
      let b = new trees.Node(1);
      let c = new trees.Node([1, 2, 3]);
      let d = new trees.Node('d');
      let e = new trees.Node(3);
      a.left = b;
      a.right = c;
      b.left = d;
      b.right = e;
      tree.root = a;
      let result = tree.preOrder();
      expect(result).toEqual(['a', 1, 'd', 3, [1, 2, 3]]);
    });

    it('will return just the root value if that is the only node in the tree', () => {
      let tree = new trees.BinaryTree();
      let a = new trees.Node('a');
      tree.root = a;
      let result = tree.preOrder();
      expect(result).toEqual(['a']);
    });

  });

  describe('inOrder method', () => {

    it('traverses through the tree from left, to right, to root', () => {
      let tree = new trees.BinaryTree();
      let a = new trees.Node('a');
      let b = new trees.Node('b');
      let c = new trees.Node('c');
      let d = new trees.Node('d');
      let e = new trees.Node('e');
      a.left = b;
      a.right = c;
      b.left = d;
      b.right = e;
      tree.root = a;
      let result = tree.inOrder();
      expect(result).toEqual(['d', 'b', 'e', 'a', 'c']);
    });

    it('will traverse correctly on a tree made up of different data types', () => {
      let tree = new trees.BinaryTree();
      let a = new trees.Node('a');
      let b = new trees.Node(1);
      let c = new trees.Node([1, 2, 3]);
      let d = new trees.Node('d');
      let e = new trees.Node(3);
      a.left = b;
      a.right = c;
      b.left = d;
      b.right = e;
      tree.root = a;
      let result = tree.inOrder();
      expect(result).toEqual(['d', 1, 3, 'a', [1, 2, 3]]);
    });

    it('will return just the root value if that is the only node in the tree', () => {
      let tree = new trees.BinaryTree();
      let a = new trees.Node('a');
      tree.root = a;
      let result = tree.inOrder();
      expect(result).toEqual(['a']);
    });

  });

  describe('postOrder method', () => {

    it('traverses through the tree from left, to root, to right', () => {
      let tree = new trees.BinaryTree();
      let a = new trees.Node('a');
      let b = new trees.Node('b');
      let c = new trees.Node('c');
      let d = new trees.Node('d');
      let e = new trees.Node('e');
      a.left = b;
      a.right = c;
      b.left = d;
      b.right = e;
      tree.root = a;
      let result = tree.postOrder();
      expect(result).toEqual(['d', 'e', 'b', 'c', 'a']);
    });

    it('will traverse correctly on a tree made up of different data types', () => {
      let tree = new trees.BinaryTree();
      let a = new trees.Node('a');
      let b = new trees.Node(1);
      let c = new trees.Node([1, 2, 3]);
      let d = new trees.Node('d');
      let e = new trees.Node(3);
      a.left = b;
      a.right = c;
      b.left = d;
      b.right = e;
      tree.root = a;
      let result = tree.postOrder();
      expect(result).toEqual(['d', 3, 1, [1, 2, 3], 'a']);
    });

    it('will return just the root value if that is the only node in the tree', () => {
      let tree = new trees.BinaryTree();
      let a = new trees.Node('a');
      tree.root = a;
      let result = tree.postOrder();
      expect(result).toEqual(['a']);
    });

  });

  describe('maxVal method', () => {
    it('returns the highest value in the tree', () => {
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
      let result = tree.maxVal();
      expect(result).toEqual(30);
    });

    it('does not change the original tree', () => {
      let tree = new trees.BinaryTree();
      let a = new trees.Node(12);
      let b = new trees.Node(30);
      let c = new trees.Node(6);
      a.left = b;
      a.right = c;
      tree.root = a;
      let preMax = tree.preOrder();
      tree.maxVal();
      let postMax = tree.preOrder();
      expect(preMax).toEqual(postMax);
    });

    it('cannot return the highest alphabetical value', () => {
      let tree = new trees.BinaryTree();
      let a = new trees.Node('a');
      let b = new trees.Node('b');
      let z = new trees.Node('z');
      let c = new trees.Node('c');
      let f = new trees.Node('f');
      a.left = b;
      a.right = c;
      b.left = z;
      b.right = f;
      tree.root = a;
      let result = tree.maxVal();
      expect(result).toEqual(0);
    });
  });

});

describe('BinarySearchTree', () => {

  describe('add(value) method', () => {
    it('adds a value to the correct location in the binary search tree', () => {
      let tree = new trees.BinarySearchTree();
      tree.add(10);
      tree.add(5);
      tree.add(11);
      let root = tree.root.value;
      expect(root).toEqual(10);
      let left = tree.root.left.value;
      expect(left).toEqual(5);
      let right = tree.root.right.value;
      expect(right).toEqual(11);
    });

    it('can add string values in the correct value order', () => {
      let tree = new trees.BinarySearchTree();
      tree.add('boy');
      tree.add('cat');
      tree.add('apple');
      let root = tree.root.value;
      expect(root).toEqual('boy');
      let left = tree.root.left.value;
      expect(left).toEqual('apple');
      let right = tree.root.right.value;
      expect(right).toEqual('cat');
    });

    it('it cannot add arrays as value types and will assume arrays of strings are a higher value than arrays with numbers', () => {
      let tree = new trees.BinarySearchTree();
      tree.add([300, 400, 500]);
      tree.add(['a', 'b', 'c']);
      tree.add([100, 200, 300]);
      let root = tree.root.value;
      expect(root).toEqual([300, 400, 500]);
      let left = tree.root.left.value;
      expect(left).toEqual([100, 200, 300]);
      let right = tree.root.right.value;
      expect(right).toEqual(['a', 'b', 'c']);
    });

  });

  describe('contains(value) method', () => {
    it('returns true if a value is found in the tree', () => {
      let tree = new trees.BinarySearchTree();
      tree.add(20);
      tree.add(30);
      tree.add(10);
      tree.add(5);
      tree.add(15);
      tree.add(12);
      tree.add(2);
      let result = tree.contains(15);
      expect(result).toEqual(true);
    });

    it('returns false if a value is not found in the tree', () => {
      let tree = new trees.BinarySearchTree();
      tree.add(20);
      tree.add(30);
      tree.add(10);
      tree.add(5);
      tree.add(15);
      tree.add(12);
      tree.add(2);
      let result = tree.contains(27);
      expect(result).toEqual(false);
    });

    it('does not change the value of the tree', () => {
      let tree = new trees.BinarySearchTree();
      tree.add(20);
      tree.add(30);
      tree.add(10);
      tree.add(5);
      tree.add(15);
      tree.add(12);
      tree.add(2);
      let ogTree = tree;
      tree.contains(34);
      expect(tree).toEqual(ogTree);
    });
  });
});