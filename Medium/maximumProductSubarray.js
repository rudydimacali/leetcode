/*

https://leetcode.com/problems/maximum-product-subarray/

Given an integer array nums, find the contiguous subarray within an
array (containing at least one number) which has the largest product.

Example 1:

Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

*/

const assert = require('assert');

const maxProduct = (nums) => {
  let max = nums[0];
  let min = nums[0];
  let maxSoFar = nums[0];
  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] > 0) {
      min *= nums[i];
      maxSoFar = (maxSoFar <= 1 ? nums[i] : maxSoFar * nums[i]);
    } else if (nums[i] < 0) {
      let temp = min;
      min = (maxSoFar <= 1 ? nums[i] : maxSoFar * nums[i]);
      maxSoFar = (temp === 0 ? nums[i] : temp * nums[i]);
    } else {
      min = 0;
      maxSoFar = 0;
    }
    max = Math.max(max, maxSoFar);
  }
  return max;
};

assert.equal(maxProduct([-2, 3, -4]), 24);
assert.equal(maxProduct([2, 3, -2, 4]), 6);
assert.equal(maxProduct([-2, 0, -1]), 0);
