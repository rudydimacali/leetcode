/*

https://leetcode.com/problems/spiral-matrix/

Given a matrix of m x n elements (m rows, n columns),
return all elements of the matrix in spiral order.

Example 1:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:

Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]

*/

const assert = require('assert');

const spiralOrder = (matrix) => {
  if (!matrix.length || !matrix[0].length) return [];
  const spiral = [];
  const pushed = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  };
  const matrixLength = matrix[0].length * matrix.length;
  while (spiral.length < matrixLength) {
    // push top from (num of left cols pushed) to length - 1 - (num of right cols pushed)
    for (let i = pushed.left; i < matrix[0].length - pushed.right
      && spiral.length < matrixLength; i += 1) {
      spiral.push(matrix[pushed.top][i]);
    }
    pushed.top += 1;
    // push right from (num of top rows pushed) to (num of bottom rows pushed)
    for (let i = pushed.top; i < matrix.length - pushed.bottom
      && spiral.length < matrixLength; i += 1) {
      spiral.push(matrix[i][matrix[0].length - pushed.bottom - 1]);
    }
    pushed.right += 1;
    // push bottom from (length - 1 - num of right cols pushed) to (num of left cols pushed)
    for (let i = matrix[0].length - pushed.right - 1; i >= pushed.left
      && spiral.length < matrixLength; i -= 1) {
      spiral.push(matrix[matrix.length - pushed.bottom - 1][i]);
    }
    pushed.bottom += 1;
    // push left from (length - 1 - num of bottom rows pushed)  to (num of top rows pushed)
    for (let i = matrix.length - pushed.bottom - 1; i >= pushed.right
      && spiral.length < matrixLength; i -= 1) {
      spiral.push(matrix[i][pushed.left]);
    }
    pushed.left += 1;
  }
  return spiral;
};

assert.deepEqual(spiralOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]), [1, 2, 3, 6, 9, 8, 7, 4, 5]);

assert.deepEqual(spiralOrder([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]), [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
