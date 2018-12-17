'use strict';

function reverseArray(arr) {
  let i = 0;
  while (i < (arr.length - 1) / 2){
    let temp = arr[i];
    arr[i] = arr[arr.length-1-i];
    arr[arr.length-1-i] = temp;
    i++;
  }
  return arr;
}