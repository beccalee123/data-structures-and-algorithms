'use strict';

const g = require('../graph.js');
const util = require('util');



function travel(graph, arr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    let current = graph.getNeighbors(arr[i]);
    // console.log('arr + 1', arr[i + 1]);
    if (current.includes(arr[i + 1])) {
      counter += current[0].weight;
    }
    else { return false; }
  }
  return counter;
}

let graph = new g.Graph();
graph.addNode('Seattle');
graph.addNode('San Francisco');
graph.addNode('London');
graph.addNode('New York');
graph.addEdge('Seattle', 'San Francisco', 100);
graph.addEdge('San Francisco', 'Seattle', 100);
graph.addEdge('Seattle', 'New York', 300);
graph.addEdge('New York', 'Seattle', 300);
graph.addEdge('New York', 'London', 500);
graph.addEdge('London', 'New York', 500);

let cityArr = ['Seattle', 'New York', 'London'];

// console.log( util.inspect(graph.getNodes(), {showHidden: false, depth: null}));
// console.log(graph.getNeighbors(city));
console.log(travel(graph, cityArr));


