'use strict';

const sq = require('./stacks-and-queues.js');

describe('stack', () => {
  it('creates an instance', () => {
    let stack = new sq.Stack();
    expect(stack instanceof sq.Stack).toBeTruthy();
  });

  describe('push', () => {
    it('adds a value to the top of the stack', () => {
      let stack = new sq.Stack();
      stack.push(1);
      expect(stack.peek().value).toEqual(1);
      stack.push(2);
      expect(stack.peek().value).toEqual(2);
      stack.push(3);
      expect(stack.peek().value).toEqual(3);
    });

    it('accepts numbers, strings, and arrays as inputs', () => {
      let stack = new sq.Stack();
      stack.push(1);
      expect(stack.peek().value).toEqual(1);
      stack.push('hello there!');
      expect(stack.peek().value).toEqual('hello there!');
      stack.push([1, 2, 3]);
      expect(stack.peek().value).toEqual([1, 2, 3]);
    });

    it('returns null if no input is provided', () => {
      let stack = new sq.Stack();
      stack.push();
      expect(stack.peek().value).toBeNull;
    });
  });

  describe('pop', () => {
    it('returns and removes the top item from the stack', () => {
      let stack = new sq.Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.pop().value).toEqual(3);
      expect(stack.pop().value).toEqual(2);
      expect(stack.pop().value).toEqual(1);
    });

    it('following a pop(), points to the new head of the stack', () => {
      let stack = new sq.Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      stack.pop();
      expect(stack.peek().value).toEqual(2);
    });

    it('can pop() any type of value', () => {
      let stack = new sq.Stack();
      stack.push('hello');
      stack.push([1, 2, 3]);
      stack.push(2);
      stack.pop();
      expect(stack.peek().value).toEqual([1, 2, 3]);
      stack.pop();
      expect(stack.peek().value).toEqual('hello');
    });
  });

  describe('peek', () => {
    it('returns null on an empty stack', () => {
      let stack = new sq.Stack();
      expect(stack.peek()).toBeNull();
    });

    it('returns the last item added to the stack', () => {
      let stack = new sq.Stack();
      stack.push(1);
      expect(stack.peek().value).toEqual(1);
      stack.push(2);
      expect(stack.peek().value).toEqual(2);
    });

    it('always returns the last item added to the stack', () => {
      let stack = new sq.Stack();
      stack.push(1);
      expect(stack.peek().value).toEqual(1);
      expect(stack.peek().value).toEqual(1);
    });
  });
});


describe('queue', () => {
  it('creates an instance', () => {
    let queue = new sq.Queue();
    expect(queue instanceof sq.Queue).toBeTruthy();
  });

  describe('enqueue', () => {
    it('adds a value to the back of the queue', () => {
      let queue = new sq.Queue();
      queue.enqueue(1);
      expect(queue.peek().value).toEqual(1);
      queue.enqueue(2);
      expect(queue.peek().value).toEqual(1);
    });

    it('accepts numbers, strings, and arrays as inputs', () => {
      let queue = new sq.Queue();
      queue.enqueue(1);
      expect(queue.peek().value).toEqual(1);
      let queue2 = new sq.Queue();
      queue2.enqueue('hello there!');
      expect(queue2.peek().value).toEqual('hello there!');
      let queue3 = new sq.Queue();
      queue3.enqueue([1, 2, 3]);
      expect(queue3.peek().value).toEqual([1, 2, 3]);
    });

    it('returns null if no input is provided', () => {
      let queue = new sq.Queue();
      queue.enqueue();
      expect(queue.peek().value).toBeNull;
    });
  });

  describe('dequeue', () => {
    it('returns and removes the front item from the queue', () => {
      let queue = new sq.Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.dequeue().value).toEqual(1);
      expect(queue.dequeue().value).toEqual(2);
      expect(queue.dequeue().value).toEqual(3);
    });

    it('following an dequeue(), points to the new front of the queue', () => {
      let queue = new sq.Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      queue.dequeue();
      expect(queue.peek().value).toEqual(2);
    });

    it('Can dequeue any type of value', () => {
      let queue = new sq.Queue();
      queue.enqueue('hi there');
      queue.enqueue([1, 2, 3]);
      queue.enqueue(1);
      queue.dequeue();
      expect(queue.peek().value).toEqual([1, 2, 3]);
      queue.dequeue();
      expect(queue.peek().value).toEqual(1);
    });
  });

  describe('peek', () => {
    it('returns null on an empty queue', () => {
      let queue = new sq.Queue();
      expect(queue.peek()).toBeNull();
    });

    it('returns the first item added to the queue', () => {
      let queue = new sq.Queue();
      queue.enqueue(1);
      expect(queue.peek().value).toEqual(1);
      queue.enqueue(2);
      expect(queue.peek().value).toEqual(1);
    });

    it('always returns the last item added to the stack', () => {
      let queue = new sq.Queue();
      queue.enqueue(1);
      expect(queue.peek().value).toEqual(1);
      expect(queue.peek().value).toEqual(1);
    });
  });
});