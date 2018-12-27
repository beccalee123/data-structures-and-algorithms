'use strict';

const list = require('./linked-list.js');

describe('Insert method', () => {
  it('adds a new node to the list when a value is provided', () => {
    let newList = new list.LinkedList();
    newList.insert('Buddy the Cat');
    expect(newList).toEqual({'head': {'next': null, 'value': 'Buddy the Cat'}});
  });

  it('adds an empty node to the list if a value is not provided', () => {
    let newList = new list.LinkedList();
    newList.insert();
    expect(newList).toEqual({'head': {'next': null, 'value': undefined}});
  });
  
  it('adds a multiple nodes to the list when multiple nodes are provided', () => {
    let newList = new list.LinkedList();
    newList.insert('Buddy the Cat');
    newList.insert('Hank the Cat');
    expect(newList).toEqual({'head': {'next': {'next': null, 'value': 'Hank the Cat'}, 'value': 'Buddy the Cat'}});
  });
});

describe('Includes method', () => {
  it('Will return true if a value is found in the list', () => {
    let newList = new list.LinkedList();
    newList.insert('Buddy the Cat');
    newList.insert('Hank the Cat');
    newList.insert('Leo the Dog');
    newList.insert('Poppy the Dog');
    expect(newList.includes('Leo the Dog')).toBeTruthy();
  });

  it('Will return false if a value is not found in the list', () => {
    let newList = new list.LinkedList();
    newList.insert('Buddy the Cat');
    newList.insert('Hank the Cat');
    newList.insert('Leo the Dog');
    newList.insert('Poppy the Dog');
    expect(newList.includes('Leo the Cat')).toBeFalsy();
  });

  it('Will return true if multiple correct values are entered into the method arguements', () => {
    let newList = new list.LinkedList();
    newList.insert('Buddy the Cat');
    newList.insert('Hank the Cat');
    newList.insert('Leo the Dog');
    newList.insert('Poppy the Dog');
    expect(newList.includes('Hank the Cat', 'Leo the Dog')).toBeTruthy();
  });

  it('Will return falsy if one or more correct values and one or more incorrect values are entered into the method arguements', () => {
    let newList = new list.LinkedList();
    newList.insert('Buddy the Cat');
    newList.insert('Hank the Cat');
    newList.insert('Leo the Dog');
    newList.insert('Poppy the Dog');
    expect(newList.includes('Hank the Dog', 'Leo the Dog')).toBeFalsy();
  });

});

describe('Print method', () => {
  it('Will print the full linked list', () => {
    let newList = new list.LinkedList();
    newList.insert('Buddy the Cat');
    newList.insert('Hank the Cat');
    newList.insert('Leo the Dog');
    newList.insert('Poppy the Dog');
    expect(newList.print()).toEqual(['Buddy the Cat', 'Hank the Cat', 'Leo the Dog', 'Poppy the Dog']);
  });

  it('Will return an empty list if no values have been inserted', () => {
    let newEmpty = new list.LinkedList();
    expect(newEmpty.print()).toEqual([]);
  });

  it('Will return falsy if an array is entered into the list', () => {
    let newList = new list.LinkedList();
    let result = newList.insert([1, 2, 3]);
    expect(result).toBeFalsy();
  });
});