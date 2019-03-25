/*

https://leetcode.com/problems/contains-duplicate/

Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array,
and it should return false if every element is distinct.

Example 1:

Input: [1,2,3,1]
Output: true
Example 2:

Input: [1,2,3,4]
Output: false
Example 3:

Input: [1,1,1,3,3,4,3,2,4,2]
Output: true

*/

const assert = require('assert');

const containsDuplicate = (nums) => {
  const numCount = {};
  for (let i = 0; i < nums.length; i += 1) {
    numCount[nums[i]] = numCount[nums[i]] === undefined ? 1 : numCount[nums[i]] + 1;
    if (numCount[nums[i]] > 1) return true;
  }
  return false;
};

assert.equal(containsDuplicate([1, 2, 3, 1]), true);
assert.equal(containsDuplicate([1, 2, 3, 4]), false);
assert.equal(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);
