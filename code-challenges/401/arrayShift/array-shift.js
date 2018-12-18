'use strict';

let shiftChallenge = module.exports = {};

shiftChallenge.insertShiftArray = function(arr, val) {
  let newArr = [];
  if(arr.length === 0){
    return newArr = [val];
  }else if(arr.length % 2 != 0) {
    var mid = (arr.length + 1)/2;
  } else {
    mid = arr.length/2;
  }
  for (let i = 0; i < arr.length; i++){
    if(i === mid){
      newArr.push(val);
      newArr.push(arr[i]);
    } else {
      newArr.push(arr[i]);
    }
  } return newArr;
};
