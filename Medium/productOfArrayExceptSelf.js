/*

https://leetcode.com/problems/product-of-array-except-self/

Given an array nums of n integers where n > 1,
return an array output such that output[i] is equal to
the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity?
(The output array does not count as extra space for the purpose of space complexity analysis.)

*/

const assert = require('assert');

const productExceptSelf = (nums) => {
  const productsBefore = [1];
  const productsAfter = [];
  const products = [];
  for (let i = 1; i < nums.length; i += 1) {
    productsBefore.push(productsBefore[i - 1] * nums[i - 1]);
  }
  productsAfter[nums.length - 1] = 1;
  products[nums.length - 1] = productsAfter[nums.length - 1] * productsBefore[nums.length - 1];
  for (let i = nums.length - 2; i >= 0; i -= 1) {
    productsAfter[i] = productsAfter[i + 1] * nums[i + 1];
    products[i] = productsAfter[i] * productsBefore[i];
  }
  return products;
};

assert.deepEqual(productExceptSelf([1, 2, 3, 4]), [24, 12, 8, 6]);
