/*

https://leetcode.com/problems/self-dividing-numbers

A self - dividing number is a number that is divisible by every digit it contains.

For example, 128 is a self - dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

Also, a self - dividing number is not allowed to contain the digit zero.

Given a lower and upper number bound, output a list of
every possible self dividing number, including the bounds if possible.

Example 1:
Input:
left = 1, right = 22
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
*/

const selfDividingNumbers = (left, right) => {
  const isSelfDividing = (num) => {
    let response = true;
    for (let i = Math.floor(Math.log10(num)); i >= 0; i -= 1) {
      if (num % (Math.floor(num / (10 ** i) % 10)) !== 0) response = false;
    }
    return response;
  };
  const nums = [];
  for (let i = left; i <= right; i += 1) {
    if (isSelfDividing(i)) {
      nums.push(i);
    }
  }
  return nums;
};
