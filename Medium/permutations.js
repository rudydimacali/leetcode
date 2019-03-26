/*

https://leetcode.com/problems/permutations/

Given a collection of distinct integers, return all possible permutations.

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]

*/

const assert = require('assert');

const permute = (nums, n = 0) => {
  if (n >= nums.length) return [[]];
  const solutions = [];
  const permutations = permute(nums, n + 1);
  for (let i = 0; i < permutations.length; i += 1) {
    for (let j = 0; j <= permutations[i].length; j += 1) {
      const p = permutations[i].slice(0);
      p.splice(j, 0, nums[n]);
      solutions.push(p);
    }
  }
  return solutions;
};

assert.deepEqual(permute([1, 2, 3]), [
  [1, 2, 3],
  [2, 1, 3],
  [2, 3, 1],
  [1, 3, 2],
  [3, 1, 2],
  [3, 2, 1],
]);
