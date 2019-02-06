'use strict';

const Hashtable = require('../hashtable.js');

function leftJoin(left, right){
  let result = [];
  for(let i = 0; i < left.size; i++){
    let current = [];
    if(left.table[i]){
      let leftv = Object.keys(left.table[i].head.value)[0];
      if(right.contains(leftv)){
        // let ri = right.getHash(leftv);
        current.push(leftv);
        current.push(left.table[i].head.value[leftv]); 
        current.push(right.find(leftv)[leftv]);
      }
      else { current.push(leftv, left.table[i].head.value[leftv]);}
      result.push(current);
    }
  }
  console.log('result', result);
  return result;
}

let myHash1 = new Hashtable(50);
myHash1.add('Happy', 'Elated');
myHash1.add('Fond', 'Enamored');
myHash1.add('Sad', 'Melancholy');

let myHash2 = new Hashtable(50);
myHash2.add('Happy', 'Sad');
myHash2.add('Mad', 'Not Mad');
myHash2.add('Fond', 'Averse');

leftJoin(myHash1, myHash2);