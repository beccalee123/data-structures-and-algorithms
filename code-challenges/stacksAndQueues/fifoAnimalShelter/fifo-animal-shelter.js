'use strict';

const sq = require('../stacks-and-queues');

class AnimalShelter{
  constructor(){
    this.cat = new sq.Queue();
    this.dog = new sq.Queue();
    this.count = 0;
  }
  enque(animal){
    animal.toLowerCase();
    if(animal === 'cat'){
      this.count++;
      this.cat.enqueue(this.count);
    }
    else if(animal === 'dog'){
      this.count++;
      this.dog.enqueue(this.count);
    }
    else if(animal !== 'cat' || animal !== 'dog'){
      return 'wrong animal';
    }
  }
  
  deque(pref){
    if (pref === 'cat'){
      this.cat.dequeue();
    }
    else if(pref === 'dog'){
      this.dog.dequeue();
    }
    else if(pref !== 'cat' && pref !== 'dog'){
      if(this.cat.peek().value > this.dog.peek().value){
        this.dog.dequeue();
      } else {
        this.cat.dequeue();
      }
    }
  }
}

// let test = new AnimalShelter();

// test.enque('cat');
// test.enque('cat');
// test.enque('dog');
// test.enque('dog');
// console.log('before', test);
// test.deque('dog');
// console.log('after', test);

module.exports = {AnimalShelter};