'use strict';

const g = require('../graph.js');

function depthFirstTraversal(adjList){
  let root = adjList [0];
  let visited = new Set();

  function _walk(vertex){
    visited.add(vertex);
    let neighbors = adjList.getNeighbors(vertex);

    for(let i = 0; i < neighbors[i]; i++) {
      if(!visited.has(neighbors[i])){
        _walk(neighbors[i]);
      }
    }
  }
  _walk(root);
  if(visited.has(!adjList.getNeighbors(root))){
    _walk(root);
  }
  return visited;
}

