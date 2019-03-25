/*

https://leetcode.com/problems/clone-graph/

Given a reference of a node in a connected undirected graph,
return a deep copy (clone) of the graph. Each node in the graph
contains a val (int) and a list (List[Node]) of its neighbors.

 

Example:

1 - 2
|   |
4 - 3

Output:
{"$id":"1","neighbors":[
  {"$id":"2","neighbors":[{"$ref":"1"},
  {"$id":"3","neighbors":[{"$ref":"2"},
  {"$id":"4","neighbors":[{"$ref":"3"},{"$ref":"1"}],"val":4}],
  "val":3}],"val":2},{"$ref":"4"}],"val":1}

Explanation:
Node 1's value is 1, and it has two neighbors: Node 2 and 4.
Node 2's value is 2, and it has two neighbors: Node 1 and 3.
Node 3's value is 3, and it has two neighbors: Node 2 and 4.
Node 4's value is 4, and it has two neighbors: Node 1 and 3.

*/


// Definition for a Node:

function Node(val, neighbors) {
  this.val = val;
  this.neighbors = neighbors;
}

const cloneGraph = (node) => {
  const newGraph = new Node(node.val, []);
  const cloned = { [node.val]: newGraph };
  const queue = [node];
  while (queue.length) {
    const current = queue.shift();
    for (let i = 0; i < current.neighbors.length; i += 1) {
      if (!cloned[current.neighbors[i].val]) {
        const newClone = new Node(current.neighbors[i].val, []);
        cloned[current.neighbors[i].val] = newClone;
        queue.push(current.neighbors[i]);
      }
      cloned[current.val].neighbors.push(cloned[current.neighbors[i].val]);
    }
  }
  return newGraph;
};
