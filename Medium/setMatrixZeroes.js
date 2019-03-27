/* eslint-disable indent */
/*

https://leetcode.com/problems/set-matrix-zeroes/

Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

Example 1:

Input:
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
Output:
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
Example 2:

Input:
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
Output:
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]

*/

const assert = require('assert');

const setZeroes = (matrix) => {
  const rows = {};
  const cols = {};
  for (let row = 0; row < matrix.length; row += 1) {
    for (let col = 0; col < matrix[row].length; col += 1) {
      if (matrix[row][col] === 0) {
        rows[row] = true;
        cols[col] = true;
      }
    }
  }
  for (col in cols) {
    for (let row = 0; row < matrix.length; row += 1) {
      matrix[row][col] = 0;
    }
  }
  for (row in rows) {
    for (let col = 0; col < matrix[row].length; col += 1) {
      matrix[row][col] = 0;
    }
  }
  return matrix;
};

assert.deepEqual(setZeroes(
  [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ]),
  [
    [1, 0, 1],
    [0, 0, 0],
    [1, 0, 1],
  ]);

assert.deepEqual(setZeroes(
  [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ]),
  [
    [0, 0, 0, 0],
    [0, 4, 5, 0],
    [0, 3, 1, 0]
  ]);
