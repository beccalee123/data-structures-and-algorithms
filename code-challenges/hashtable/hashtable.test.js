'use strict';

const Hashtable = require('./hashtable.js');

describe('hashtable', () => {

  it('creates a new hashtable intance', () => {
    let testHash = new Hashtable(5);
    expect(testHash).toBeTruthy();
  });

  it('creates a new hashtable intance with the correct length', () => {
    let testHash = new Hashtable(5);
    expect(testHash.size).toEqual(5);
  });

  describe('hash', () => {

    it('hashes a key', () => {
      let testHash = new Hashtable(5);
      let result = testHash.hash('hello');
      expect(result).not.toEqual('hello');      
    });

  });

  describe('add', () => {

    it('adds an item to the hashtable', () => {
      let testHash = new Hashtable(1);
      testHash.add('Hank', 'cat');
      expect(testHash).toEqual({'size': 1, 'table': [[{'Hank': 'cat'}]]});
    });

    it('can add a key without a value', () => {
      let testHash = new Hashtable(1);
      testHash.add('Hank');
      expect(testHash).toEqual({'size': 1, 'table': [[{'Hank': undefined}]]});
    });

  });

  describe('contains', () => {

    it('returns true if the key is in the hashtable', () => {
      let testHash = new Hashtable(3);
      testHash.add('Hank', 'Cat');
      testHash.add('Buddy', 'Meowmer');
      let result = testHash.contains('Hank', 'Cat');
      expect(result).toEqual(true);
    });

    it('returns false if the key is not in the hashtable', () => {
      let testHash = new Hashtable(6);
      testHash.add('Hank', 'Cat');
      testHash.add('Buddy', 'Meowmer');
      expect(testHash.contains('Milo')).toEqual(false);
    });

  });

  describe('getHash', () => {
    
    it('returns the index of the specified key', () => {
      let testHash = new Hashtable(6);
      testHash.add('Hank', 'Cat');
      testHash.add('Buddy', 'Meowmer');
      let result = testHash.getHash('Hank');
      expect(result).toEqual(2);
    });

  });

});