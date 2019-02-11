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