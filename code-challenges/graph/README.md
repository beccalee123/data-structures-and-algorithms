# Graphs
Implement a graph

## Challenge
Implement your own Graph. The graph should be represented as an adjacency list, and should include the following methods:

1. AddNode()
- Adds a new node to the graph
- Takes in the value of that node
- Returns the added node
2. AddEdge()
- Adds a new edge between two nodes in the graph
- Include the ability to have a “weight”
- Takes in the two nodes to be connected by the edge
- Both nodes should already be in the Graph
3. GetNodes()
- Returns all of the nodes in the graph as a collection (set, list, or similar)
4. GetNeighbors()
- Returns a collection of nodes connected to the given node
- Takes in a given node
- Include the weight of the connection in the returned collection
5. Size()
- Returns the total number of nodes in the graph
## Approach & Efficiency
I followed the demo from class on Thursday and based my methods off of what I learned there. 

I believe all methods are O(1).

## API
- `addNode()` adds a node to the graph and returns its value
- `addEdge()` adds an edge between nodes, can include weight
- `getNodes()` returns all nodes as a collection
- `getNeighbors()` returns a list of all nodes connected to the given node
- `getSize()` returns the number of nodes in the graph


# Breadth-First Traversal of a Graph
Implement a breadth-first traversal on a graph.


## Challenge
Extend your graph object with a breadth-first traversal method that accepts a starting node. Without utilizing any of the built-in methods available to your language, return a collection of nodes in the order they were visited. Display the collection.

## Approach & Efficiency
I believe this would be O(w) since it's a breadth-first traversal.

My initial attempt didn't pan out particularly well- I had forgotten to incorporate traversal of the neighbor nodes, so I didn't get off to a good start. I ended up updating my code to more closely align with the demo Vinicio did on Thursday, and that seemed to do the trick. Tests were added to confirm functionality.

## Solution
![breadth-first-traversal](breadth-first-graph.js)