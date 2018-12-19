'use strict';

const binarySearchChallenge = require('../array-binary-search.js');
const binary = binarySearchChallenge.BinarySearch;

describe ('Binary search tests', () => {
  it('Works with an array of an even length', () => {
    let arr = [1, 2, 3, 4, 5, 6];
    let val = 2;
    let expected = 1;
    let result = binary(arr, val);
    expect(result).toEqual(expected);
  });

  it('Works with an array of an odd length', () => {
    let arr = [1, 2, 3, 4, 5, 6, 7];
    let val = 2;
    let expected = 1;
    let result = binary(arr, val);
    expect(result).toEqual(expected);
  });

  it('Returns the index position of the provided value', () => {
    let arr = [4, 5, 9, 12, 15, 20];
    let val = 15;
    let expected = 4;
    let result = binary(arr, val);
    expect(result).toEqual(expected);
  });

  it('Returns -1 if the provided value is not found in the array', () => {
    let arr = [4, 5, 9, 12, 15, 20];
    let val = 10;
    let expected = -1;
    let result = binary(arr, val);
    expect(result).toEqual(expected);
  });
});
