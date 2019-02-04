'use strict';

// const ll = require('../linkedList/linked-list.js');
const util = require('util');

class Hashtable {
  constructor(size){
    this.size = size;
    this.table = new Array(size);
  }

  // convert to hash number
  hash(key){
    let chars = key.split('');
    let aggVal = chars.reduce((acc, val) => acc + val.charCodeAt(0), 0);
    return aggVal % this.size;

  }
  
  // add an item to the hashtable
  add(key, value){
    let hash = this.hash(key);
    if(! this.table[hash]) {this.table[hash] = [];}
    this.table[hash].push({[key]:value});
  }

  // takes in a key and returns a value from the kvp
  find(key){
    let hash = this.hash(key);
    if(this.table[hash]){
      return Object.value;
    }
  }


  // takes in a key and returns boolean if key exists in the table
  contains(key){
    let hash = this.hash(key);
    if(this.table[hash]){
      return true;
    } else {
      return false;
    }
  }

  // takes in a key and returns the index in the array where it's stored
  getHash(key){
    return this.hash(key);
  }

}


let myHash = new Hashtable(6);
myHash.add('Becca', 'Person');
myHash.add('Buddy', 'Cat');
myHash.add('Hank', 'Cat');
myHash.add('Leo', 'Dog');

// console.log(myHash.contains('Milo'));

// console.log(util.inspect(myHash, {showHidden: false, depth:null}));

module.exports = Hashtable;