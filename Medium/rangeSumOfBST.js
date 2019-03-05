/*

https://leetcode.com/problems/range-sum-of-bst/

Given the root node of a binary search tree,
return the sum of values of all nodes with value between L and R (inclusive).

The binary search tree is guaranteed to have unique values.

Example 1:

Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
Output: 32
Example 2:

Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
Output: 23

*/

const rangeSumBST = (root, L, R) => {
  let count = 0;
  const recurse = (node) => {
    if (node.val >= L && node.val <= R) {
      count += node.val;
    }
    if (node.left) {
      recurse(node.left);
    }
    if (node.right) {
      recurse(node.right);
    }
  };
  recurse(root);
  return count;
};
