/*

https://leetcode.com/problems/maximum-average-subarray-i/

Given an array consisting of n integers, find the contiguous subarray
of given length k that has the maximum average value.
And you need to output the maximum average value.

Example 1:

Input: [1,12,-5,-6,50,3], k = 4
Output: 12.75
Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75

*/

const findMaxAverage = (nums, k) => {
  let currentTotal = 0;
  for (let i = 0; i < k; i += 1) {
    currentTotal += nums[i];
  }
  let highestTotal = currentTotal;
  for (let i = k; i < nums.length; i += 1) {
    currentTotal += nums[i];
    currentTotal -= nums[i - k];
    highestTotal = Math.max(highestTotal, currentTotal);
  }
  return highestTotal / k;
};
