/*

https://leetcode.com/problems/two-sum/


Given an array of integers, return indices of the two numbers
such that they add up to a specific target.

You may assume that each input would have exactly one solution,
and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

const assert = require('assert');

const twoSum = (nums, target) => {
  const result = [];
  const differences = {};
  for (let i = 0; i < nums.length; i += 1) {
    differences[target - nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i += 1) {
    if (differences[nums[i]] !== undefined && differences[nums[i]] !== i) {
      result.push(i, differences[nums[i]]);
      differences[nums[i]] = undefined;
      differences[target - nums[i]] = undefined;
    }
  }
  return result;
};

assert.deepEqual(twoSum([3, 2, 4], 6), [1, 2]);
