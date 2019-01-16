'use strict';

const trees = require('../tree.js');
const fb = require('./fizz-buzz-tree.js');

describe('fizzbuzz', () => {
  it('the fizzBuzzTree function returns a fizz buzzed tree', () => {
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
    let result = fb.fizzBuzzTree(tree);
    expect(result).toEqual({ 'root': { 'left': { 'left': { 'left': null, 'right': null, 'value': 1 }, 'right': { 'left': null, 'right': null, 'value': 'FizzBuzz' }, 'value': 'FizzBuzz' }, 'right': { 'left': null, 'right': null, 'value': 'Fizz' }, 'value': 'Fizz' } });
  });

  it('the fizzBuzzer function can translate values to the appropriate string', () => {
    let tree = new trees.BinaryTree();
    let a = new trees.Node(12);
    let b = new trees.Node(30);
    let c = new trees.Node(5);
    let threeToFizz = fb.fizzBuzzer(a);
    expect(threeToFizz).toEqual('Fizz');
    let threeAndFive = fb.fizzBuzzer(b);
    expect(threeAndFive).toEqual('FizzBuzz');
    let fiveToBuzz = fb.fizzBuzzer(c);
    expect(fiveToBuzz).toEqual('Buzz');
  });

  it('the fizzBuzzer function will return the same number when provided a number not divisible by 3 or 5', () => {
    let tree = new trees.BinaryTree();
    let a = new trees.Node(13);
    let fizzAttempt = fb.fizzBuzzer(a);
    expect(fizzAttempt).toEqual(13);
  });

});
