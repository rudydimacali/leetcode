/*

https://leetcode.com/problems/maximum-product-of-three-numbers/

Given an integer array,
find three numbers whose product is maximum and output the maximum product.

Example 1:

Input: [1,2,3]
Output: 6
 

Example 2:

Input: [1,2,3,4]
Output: 24

*/

const assert = require('assert');

const maximumProduct = (nums) => {
  let lowest = nums[0];
  let highest = nums[0];
  let highestProd = nums[0] * nums[1];
  let lowestProd = nums[0] * nums[1];
  let max = nums[0] * nums[1] * nums[2];
  for (let i = 1; i < nums.length; i += 1) {
    if (i > 1) max = Math.max(max, highestProd * nums[i], lowestProd * nums[i]);
    if (i > 0) {
      const testHighest = nums[i] * highest;
      const testLowest = nums[i] * lowest;
      highestProd = Math.max(highestProd, testHighest, testLowest);
      lowestProd = Math.min(lowestProd, testHighest, testLowest);
    }
    if (lowest * nums[i] < lowestProd) lowestProd = lowest * nums[i];
    if (nums[i] < lowest) lowest = nums[i];
    if (highest * nums[i] > highestProd) highestProd = highest * nums[i];
    if (nums[i] > highest) highest = nums[i];
  }
  return max;
};

assert.equal(maximumProduct([1, 2, 3]), 6);
assert.equal(maximumProduct([-1, -2, -3]), -6);
assert.equal(maximumProduct([-4, -3, -2, -1, 60]), 720);
assert.equal(maximumProduct(
  [722, 634, -504, -379, 163, -613, -842, -578, 750, 951, -158, 30,
    -238, -392, -487, -797, -157, -374, 999, -5, -521, -879, -858,
    382, 626, 803, -347, 903, -205, 57, -342, 186, -736, 17, 83, 726,
    -960, 343, -984, 937, -758, -122, 577, -595, -544, -559, 903, -183,
    192, 825, 368, -674, 57, -959, 884, 29, -681, -339, 582, 969, -95,
    -455, -275, 205, -548, 79, 258, 35, 233, 203, 20, -936, 878, -868,
    -458, -882, 867, -664, -892, -687, 322, 844, -745, 447, -909, -586,
    69, -88, 88, 445, -553, -666, 130, -640, -918, -7, -420, -368, 250, -786],
), 943695360);
