/*

https://leetcode.com/problems/maximum-depth-of-binary-tree/

Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path
from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.

*/

const maxDepth = (root) => {
  if (!root) return 0;
  let depth = 0;
  const traverse = (node, currentDepth) => {
    depth = Math.max(currentDepth + 1, depth);
    if (node.left) traverse(node.left, currentDepth + 1);
    if (node.right) traverse(node.right, currentDepth + 1);
  };
  traverse(root, 0);
  return depth;
};
