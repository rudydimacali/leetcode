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
  let productsAfter = 1;
  const products = [1];
  for (let i = 1; i < nums.length; i += 1) {
    products.push(products[i - 1] * nums[i - 1]);
  }
  for (let i = nums.length - 2; i >= 0; i -= 1) {
    productsAfter *= nums[i + 1];
    products[i] *= productsAfter;
  }
  return products;
};

assert.deepEqual(productExceptSelf([1, 2, 3, 4]), [24, 12, 8, 6]);
