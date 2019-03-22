/*

https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

Find the minimum element.

You may assume no duplicate exists in the array.

Example 1:

Input: [3,4,5,1,2] 
Output: 1

*/

const assert = require('assert');

const findMin = (nums) => {
  if (nums.length === 1 || nums[0] < nums[nums.length - 1]) return nums[0];
  const search = (leftIndex, rightIndex) => {
    const midpoint = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
    if (nums[midpoint] <= nums[midpoint - 1]) return midpoint;
    if (nums[midpoint] >= nums[midpoint + 1]) return midpoint + 1;
    if (nums[midpoint] > nums[leftIndex]) return search(midpoint + 1, rightIndex);
    return search(leftIndex, midpoint - 1);
  };
  return nums[search(0, nums.length - 1)];
};

assert.equal(findMin([3, 4, 5, 6, 0, 1, 2]), 0);
assert.equal(findMin([3, 4, 5, 1, 2]), 1);
assert.equal(findMin([2, 1]), 1);
assert.equal(findMin([2, 3, 4, 5, 6, 1]), 1);
