'use strict';

class Node{
  constructor(value){
    this.value = value;
  }
}

// Implement a graph as an adjacency list
class Graph{
  constructor(){
    this._adjacencyList = new Map();
    this.size = 0;
  }

  // create AddNode() method that...
  // - adds a new node to the graph
  // - takes in the value of that node
  // - returns the added node

  addNode(node){
    this._adjacencyList.set(node,[]);
    this.size++;
    return node;
  }

  // create AddEdge() method that...
  // - adds a new edge between two nodes in the graph
  // - includes the ability to have a weight
  // - takes in two nodes to be connected by the edge
  //   - both nodes should already be in the graph

  addEdge(startNode, endNode, weight = 0){
    if(!this._adjacencyList.has(startNode) ||
     !this._adjacencyList.has(endNode))
      throw new Error('__Error__ invalid nodes');

    let adjacencies = this._adjacencyList.get(startNode);

    adjacencies.push({
      node: endNode,
      weight,
    });

    return adjacencies;
  }

  // create GetNeighbors() method that...
  // - returns a collection of nodes connected to the given node
  // - takes in a given node
  // - includes the weight of the connection in the returned collection

  getNeighbors(node) {
    if(!this._adjacencyList.has(node))
      throw new Error('__Error__ invalid node');
    return [...this._adjacencyList.get(node)];
  }

  // create GetNodes() method that...
  // - returns all of the nodes in the graph as a collection

  getNodes() {
    if(this.size !== 0){
      return this._adjacencyList.keys();
    }
    else return null;
  }

  // create Size() method that...
  // - returns the total number of nodes in a graph
  getSize() {
    return this.size;
  }

  breadthFirst(startNode) {
    let queue = [];
    let visitedNodes = new Set();

    queue.unshift(startNode);
    visitedNodes.add(startNode);

    if(this.size === 0){
      return null;
    }

      
    while(queue.length){
      let currentNode = queue.pop();
      visitedNodes.add(currentNode);

      let neighbors = this.getNeighbors(currentNode);

      for(let neighbor of neighbors){
        let neighborNode = neighbor.node;

        if(visitedNodes.has(neighborNode))
          continue;
        else
          visitedNodes.add(neighborNode);

        queue.unshift(neighborNode);
      }

    }
    return visitedNodes;
  }
}

module.exports = {Node, Graph};