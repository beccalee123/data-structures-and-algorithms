'use strict';

const repeatedWord = require('./repeated-word.js');

describe('repatedWord', () => {

  it('returns the first repeated word in a string', () => {
    let example = 'Once upon a time there was a brave princess who...';
    let results = repeatedWord(example);
    expect(results).toEqual('a'); 
  });

  it('can return a number if it is the first thing repeated in the string', () => {
    let example = 'Once upon 4 a time there was 4 a brave princess who...';
    let results = repeatedWord(example);
    expect(results).toEqual('4'); 
  });

  it('returns \'no duplicates\' if there are no duplicates in the string', () => {
    let example = 'hi how are you today? Pretty good.';
    let results = repeatedWord(example);
    expect(results).toEqual('no duplicates'); 
  });

});