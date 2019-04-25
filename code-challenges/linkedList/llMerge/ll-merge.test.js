'use strict';

const list = require('../linked-list.js');
const merge = require('./ll-merge.js');

describe('Merge', () => {
  it('returns the value at the head of the new zipped list', () => {
    let list1 = new list.LinkedList();
    let list2 = new list.LinkedList();

    list1.insert(1);
    list1.append(2);
    list1.append(3);

    list2.insert(4);
    list2.append(5);
    list2.append(6);
    let result = merge.mergeList(list1, list2);
    console.log(result);
    expect(result.value).toEqual(1);
  });
});