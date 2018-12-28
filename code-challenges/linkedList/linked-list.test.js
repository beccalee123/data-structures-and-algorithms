'use strict';

const list = require('./linked-list.js');

describe('Insert method', () => {
  it('adds a new node to the beginning of the list when a value is provided', () => {
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
    console.log(newList);
    expect(newList.head.next.value).toEqual('Buddy the Cat');
  });
});

describe('Includes method', () => {
  it('Will return true if a value is found in the list', () => {
    let newList = new list.LinkedList();
    newList.append('Buddy the Cat');
    newList.append('Hank the Cat');
    newList.append('Leo the Dog');
    newList.append('Poppy the Dog');
    expect(newList.includes('Leo the Dog')).toBeTruthy();
  });

  it('Will return false if a value is not found in the list', () => {
    let newList = new list.LinkedList();
    newList.append('Buddy the Cat');
    newList.append('Hank the Cat');
    newList.append('Leo the Dog');
    newList.append('Poppy the Dog');
    expect(newList.includes('Leo the Cat')).toBeFalsy();
  });

  it('Will return true if multiple correct values are entered into the method arguements', () => {
    let newList = new list.LinkedList();
    newList.append('Buddy the Cat');
    newList.append('Hank the Cat');
    newList.append('Leo the Dog');
    newList.append('Poppy the Dog');
    expect(newList.includes('Hank the Cat', 'Leo the Dog')).toBeTruthy();
  });

  it('Will return falsy if one or more correct values and one or more incorrect values are entered into the method arguements', () => {
    let newList = new list.LinkedList();
    newList.append('Buddy the Cat');
    newList.append('Hank the Cat');
    newList.append('Leo the Dog');
    newList.append('Poppy the Dog');
    expect(newList.includes('Hank the Dog', 'Leo the Dog')).toBeFalsy();
  });

});

describe('Print method', () => {
  it('Will print the full linked list', () => {
    let newList = new list.LinkedList();
    newList.append('Buddy the Cat');
    newList.append('Hank the Cat');
    newList.append('Leo the Dog');
    newList.append('Poppy the Dog');
    expect(newList.print()).toEqual(['Buddy the Cat', 'Hank the Cat', 'Leo the Dog', 'Poppy the Dog']);
  });

  it('Will return an empty list if no values have been appended', () => {
    let newEmpty = new list.LinkedList();
    expect(newEmpty.print()).toEqual([]);
  });

  it('Will return falsy if an array is entered into the list', () => {
    let newList = new list.LinkedList();
    let result = newList.append([1, 2, 3]);
    expect(result).toBeFalsy();
  });
});

describe('Append method', () => {
  it('adds a new node to the end of the list when a value is provided', () => {
    let newList = new list.LinkedList();
    newList.append('Buddy the Cat');
    expect(newList).toEqual({'head': {'next': null, 'value': 'Buddy the Cat'}});
  });

  it('adds an empty node to the list if a value is not provided', () => {
    let newList = new list.LinkedList();
    newList.append();
    expect(newList).toEqual({'head': {'next': null, 'value': undefined}});
  });
  
  it('adds a multiple nodes to the list when multiple nodes are provided', () => {
    let newList = new list.LinkedList();
    newList.append('Buddy the Cat');
    newList.append('Hank the Cat');
    console.log(newList);
    expect(newList.head.next.value).toEqual('Hank the Cat');
  });
});

describe('Insert After method', () => {
  it('adds a new value after the specified value when a new value is provided', () => {
    let newList = new list.LinkedList();
    newList.append('Leo the Dog');
    newList.insertAfter('Leo the Dog', 'Buddy the Cat');
    expect(newList.head.next.value).toEqual('Buddy the Cat');
  });
});

describe('Insert Before method', () => {
  it('adds a new value before the specified value when a new value is provided', () => {
    let newList = new list.LinkedList();
    newList.append('Leo the Dog');
    newList.insertBefore('Leo the Dog', 'Buddy the Cat');
    expect(newList.head.next.value).toEqual('Buddy the Cat');
  });
});

describe('kFromEnd method', () => {
  it('should return the value of the node that is k from the end', () => {
    let newList = new list.LinkedList();
    newList.append('Buddy the Cat');
    newList.append('Poppy the Dog');
    newList.append('Hank the Cat');
    newList.append('Leo the Dog');
    newList.append('Atlast the Dog');
    newList.kFromEnd(2);
    expect(newList.kFromEnd(2)).toEqual('Hank the Cat');
  });

  it('should return \'k is too big\' if k is greater than the length of the list', () => {
    let newList = new list.LinkedList();
    newList.append('Buddy the Cat');
    newList.append('Poppy the Dog');
    newList.append('Hank the Cat');
    newList.append('Leo the Dog');
    newList.append('Atlast the Dog');
    newList.kFromEnd(8);
    expect(newList.kFromEnd(8)).toEqual('k is too big');
  });

  it('returns falsy if the k value is not a number', () => {
    let newList = new list.LinkedList();
    newList.append('Buddy the Cat');
    newList.append('Poppy the Dog');
    newList.append('Hank the Cat');
    let result = newList.kFromEnd('hi');
    expect(result).toBeFalsy();
  });
});