'use strict';

const fifo = require('./fifo-animal-shelter.js');

describe('Animal Queue', () => {

  describe('enque', () => {

    it('adds a cat the cat queue when the input is cat', () => {
      let test = new fifo.AnimalShelter();
      test.enque('cat');
      expect(test.cat.front.value).toEqual(1);
    });

    it('adds a dog the dog queue when the input is dog', () => {
      let test = new fifo.AnimalShelter();
      test.enque('dog');
      expect(test.dog.front.value).toEqual(1);
    });

    it('adds new cats/dogs to the end of their respective queue', () => {
      let test = new fifo.AnimalShelter();
      test.enque('dog');
      expect(test.dog.front.value).toEqual(1);
      test.enque('dog');
      expect(test.dog.front.value).toEqual(1);
    });

  });
  
  describe('deque', () => {
    it('removes a cat from the cat queue when the input is a cat', () => {
      let test = new fifo.AnimalShelter();
      test.enque('cat');
      test.enque('dog');
      test.deque('cat');
      expect(test.cat.front).toEqual(null);
    });

    it('removes a dog from the dog queue when the input is a dog', () => {
      let test = new fifo.AnimalShelter();
      test.enque('dog');
      test.enque('cat');
      test.enque('dog');
      test.deque('dog');
      expect(test.dog.front.value).toEqual(3);
    });

    it('removes the animal that has been in the queue longest if no input has been provided', () => {
      let test = new fifo.AnimalShelter();
      test.enque('dog');
      test.enque('dog');
      test.enque('cat');
      test.deque();
      expect(test.dog.front.value).toEqual(2);
    });
  });
});