'use strict';

//Helper function to determine position of digit in a number
function getPosition(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// Helper function to determine number of digits in the longest number
function getMax(arr) {
  let max = 0;
  for (let num of arr) {
    if (max < num.toString().length) {
      max = num.toString().length;
    }
  }
  return max;
}
// Main sorting function
function radixSort(arr) {
  const max = getMax(arr);
  //  console.log('const max', max);
  for (let i = 0; i < max; i++) {
    let buckets = Array.from({ length: 10 }, () => []); // creating 10 empty arrays
    // console.log(buckets);
    for (let j = 0; j < arr.length; j++) {
      console.log(buckets);
      // console.log(buckets[getPosition(arr[j],i)].push(arr[j]))
      buckets[getPosition(arr[j], i)].push(arr[j]); //push the number into desired bucket
    }
    arr = [].concat(...buckets);
  }
  return arr;
}
console.log(radixSort([4, 933, 233, 3222, 1, 7, 5]));
