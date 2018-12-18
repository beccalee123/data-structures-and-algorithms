'use strict';

const shiftChallenge = require('../array-shift.js');

describe ('Running tests', () => {
  it('Works with an array of an even length', () => {
    let arr = [2,4,6,8];
    let val = 5;
    let expected = [2,4,5,6,8];
    let result = shiftChallenge.insertShiftArray(arr, val);
    expect(result).toEqual(expected);
  });

  it('Works with an array of an odd length', () => {
    let arr = [4,8,15,23,42];
    let val = 16;
    let expected = [4,8,15,16,23,42];
    let result = shiftChallenge.insertShiftArray(arr, val);
    expect(result).toEqual(expected);
  });

  it('Works with an empty array', () => {
    let arr = [];
    let val = 10;
    let expected = [10];
    let result = shiftChallenge.insertShiftArray(arr, val);
    expect(result).toEqual(expected);
  });
});
