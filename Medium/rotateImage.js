/*

https://leetcode.com/problems/rotate-image/

You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Note:

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.
DO NOT allocate another 2D matrix and do the rotation.

Example 1:

Given input matrix =
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

rotate the input matrix in-place such that it becomes:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
Example 2:

Given input matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
],

rotate the input matrix in-place such that it becomes:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]

*/

const assert = require('assert');

const rotateMatrix = (matrix) => {
  const swap = (y, x) => {
    const temp = matrix[y][x];
    matrix[y][x] = matrix[matrix.length - 1 - x][y];
    matrix[matrix.length - 1 - x][y] = matrix[matrix.length - 1 - y][matrix.length - 1 - x];
    matrix[matrix.length - 1 - y][matrix.length - 1 - x] = matrix[x][matrix.length - 1 - y];
    matrix[x][matrix.length - 1 - y] = temp;
  };
  for (let i = 0; i <= Math.floor(matrix.length / 2); i += 1) {
    for (let j = i; j < matrix.length - 1 - i; j += 1) {
      swap(i, j);
    }
  }
  return matrix;
};

assert.deepEqual(rotateMatrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]]), [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3]]);
assert.deepEqual(rotateMatrix([
  [10, 11, 12, 13],
  [14, 15, 16, 17],
  [18, 19, 20, 21],
  [22, 23, 24, 25],
]), [
    [22, 18, 14, 10],
    [23, 19, 15, 11],
    [24, 20, 16, 12],
    [25, 21, 17, 13]]);
