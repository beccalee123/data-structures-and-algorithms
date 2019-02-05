'use strict';

const Hashtable = require('../hashtable.js');

function repeatedWord(string){
  let arr = string.split(' ');
  let holder = new Hashtable(50);
  for(let i = 0; i < arr.length; i ++){
    if(holder.contains(arr[i])){
      return arr[i+1];
    } else {
      holder.add(arr[i]);
    }
  }
  return 'no duplicates';
}

let example = 'Once upon a time there was a brave princess who...';
let example2 = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
let example3 = 'hi how are you today';

// console.log(repeatedWord(example));
// repeatedWord(example);

module.exports = repeatedWord;