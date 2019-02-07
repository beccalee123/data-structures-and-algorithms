'use strict';

const leftJoin = require('./left-join.js');
const Hashtable = require('../hashtable.js');

let myHash1 = new Hashtable(50);
myHash1.add('Happy', 'Elated');
myHash1.add('Fond', 'Enamored');
myHash1.add('Sad', 'Melancholy');

let myHash2 = new Hashtable(50);
myHash2.add('Happy', 'Sad');
myHash2.add('Fond', 'Averse');
myHash2.add('Sad', 'Happy');


describe('left-join', () => {

  it('joins two tables, adding values from table 2 to the corresponding keys in table 1', () => {
    expect(leftJoin(myHash1, myHash2)).toEqual([['Happy', 'Elated', 'Sad'], ['Sad', 'Melancholy', 'Happy'], ['Fond', 'Enamored', 'Averse']]);
  });

  it('joins two tables correctly even if the keys are not all the same', () => {
    let myHash3 = new Hashtable(50);
    myHash3.add('Happy', 'Sad');
    myHash3.add('Ecstatic', 'Bored');
    myHash3.add('Sad', 'Happy');
    expect(leftJoin(myHash1, myHash3)).toEqual([['Happy', 'Elated', 'Sad'], ['Sad', 'Melancholy', 'Happy'], ['Fond', 'Enamored']]);
  });

  it('can correctly join two tables of varying lengths', () => {
    let myHash4 = new Hashtable(50);
    myHash4.add('Happy', 'Sad');
    myHash4.add('Ecstatic', 'Bored');
    myHash4.add('Sad', 'Happy');
    myHash4.add('Mad', 'Glad');
    myHash4.add('Tired', 'Awake');
    expect(leftJoin(myHash1, myHash4)).toEqual([['Happy', 'Elated', 'Sad'], ['Sad', 'Melancholy', 'Happy'], ['Fond', 'Enamored']]);

  });

});