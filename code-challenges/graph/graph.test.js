'use strict';

const g = require('./graph.js');
const util = require('util');

describe('Graph', () => {
  it('can successfully add a node to the graph', () => {
    let graph = new g.Graph();
    expect(graph.addNode(1)).toEqual(1);
  });

  it('can successfully add an edge to the graph', () => {
    let graph = new g.Graph();
    graph.addNode(1);
    graph.addNode(2);
    expect(graph.addEdge(1,2, 3)).toEqual([{'node': 2, 'weight': 3}]);

  });

  it('can successfully retrieve a collection of all nodes from the graph', () => {
    let graph = new g.Graph();
    graph.addNode(1);
    graph.addNode(3);
    graph.addNode(2);
    expect(graph.getNodes()).toContain(1, 3, 2);
  });

  it('can retrieve all appropriate neighbors from the graph', () => {
    let graph = new g.Graph();
    graph.addNode(1);
    graph.addNode(2);
    graph.addNode(3);
    graph.addEdge(1,2);
    graph.addEdge(3,2);
    expect(graph.getNeighbors(3)).toEqual([{'node': 2, 'weight': 0}]);
  });

  it('can return neighbors with the weight between nodes included', () => {
    let graph = new g.Graph();
    graph.addNode(1);
    graph.addNode(2);
    graph.addNode(3);
    graph.addEdge(1,2);
    graph.addEdge(3,2, 'hi');
    expect(graph.getNeighbors(3)).toEqual([{'node': 2, 'weight': 'hi'}]);
  });

  it('can return the proper size, representing the number of nodes in the graph', () => {
    let graph = new g.Graph();
    graph.addNode(1);
    expect(graph.getSize()).toEqual(1);
  });

  it('can properly return a graph with only one node and edge', () => {
    let graph = new g.Graph();
    graph.addNode(1);
    graph.addEdge(1,1);
    expect(graph.getNodes()).toContain(1);
  });
  
  it('can return null if the graph is empty', () => {
    let graph = new g.Graph();
    expect(graph.getNodes()).toBeNull();
  });

});

describe('Breadth-first traversal', () => {
  it('can return all nodes visited in order', () => {
    let graph = new g.Graph();
    graph.addNode(1);
    graph.addNode(2);
    graph.addNode(3);
    graph.addEdge(2,1);
    graph.addEdge(3,2);
    graph.addEdge(1,3);
    expect(graph.breadthFirst(2)).toBeInstanceOf(Set);
    expect(graph.breadthFirst(2)).toContain(2, 1, 3);
  });

  it('can return all nodes visited in order, even if they are made of a variety of value types', () => {
    let graph = new g.Graph();
    graph.addNode(1);
    graph.addNode('hi');
    graph.addNode(3);
    graph.addEdge('hi',1);
    graph.addEdge(3,'hi');
    graph.addEdge(1,3);
    expect(graph.breadthFirst('hi')).toBeInstanceOf(Set);
    expect(graph.breadthFirst('hi')).toContain('hi', 1, 3);
  });

  it('returns null if there are no nodes in the graph', () => {
    let graph = new g.Graph();
    expect(graph.breadthFirst()).toBeNull();
  });

  it('can return nodes in order if the edges are weighted', () => {
    let graph = new g.Graph();
    graph.addNode(1);
    graph.addNode(2);
    graph.addNode(3);
    graph.addEdge(2,1, 'hi');
    graph.addEdge(3,2, 'hello');
    graph.addEdge(1,3, 'howdy');
    expect(graph.breadthFirst(2)).toBeInstanceOf(Set);
    expect(graph.breadthFirst(2)).toContain(2, 1, 3);
  });
});