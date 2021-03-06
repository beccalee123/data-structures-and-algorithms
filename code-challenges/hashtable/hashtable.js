'use strict';

const ll = require('../linkedList/linked-list.js');
const util = require('util');

class Hashtable {
  constructor(size){
    this.size = size;
    this.table = new Array(size);
  }

  // convert to hash number
  hash(key){
    let chars = key.split('');
    console.log(chars);
    let aggVal = chars.reduce((acc, val) => acc + val.charCodeAt(0), 0);
    return aggVal % this.size;

  }
  
  // add an item to the hashtable
  add(key, value){
    let hash = this.hash(key);
    if(! this.table[hash]) {this.table[hash] = new ll.LinkedList();}
    this.table[hash].insert({[key]:value});
  }

  search(ll, key){
    let current = ll.head;
    let object = null;
    while(current){
      if(Object.keys(current.value)[0] === key){
        return (object = current);
      }
      current = current.next;
    }
    return object;
  }

  // takes in a key and returns a value from the kvp
  find(key){
    let hash = this.getHash(key);
    if(this.table[hash]){
      return (this.search(this.table[hash], key) ? this.search(this.table[hash], key).value : 'key not found');
    }
    return 'key not found';
  }


  // takes in a key and returns boolean if key exists in the table
  contains(key){
    let hash = this.hash(key);
    if(this.table[hash]){
      return (this.search(this.table[hash], key) ? true : false);
    }
    return false;
  }

  // takes in a key and returns the index in the array where it's stored
  getHash(key){
    let hash = this.hash(key);
    if(this.table[hash]){
      return hash;
    } else {
      return 'key not found';
    }
  }

}


// let myHash = new Hashtable(6);
// myHash.add('Becca', 'Person');
// myHash.add('Buddy', 'Cat');
// myHash.add('Hank', 'Cat');
// myHash.add('Leo', 'Dog');

// console.log(myHash.contains('Becca'));

// console.log(util.inspect(myHash, {showHidden: false, depth:null}));

module.exports = Hashtable;