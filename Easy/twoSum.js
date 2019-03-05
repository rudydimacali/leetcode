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

const twoSum = (nums, target) => {
  const result = [];
  nums.forEach((number, index, nums) => {
    for (let i = index + 1; i < nums.length; i += 1) {
      if (number + nums[i] === target) {
        result.push(index, i);
        return;
      }
    }
  });
  return result;
};
