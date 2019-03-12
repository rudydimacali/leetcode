/*

https://leetcode.com/problems/reverse-integer/

Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321

*/

const assert = require('assert');

const reverse = (x) => {
  let digits = Math.floor(Math.log10(Math.abs(x)));
  let sum = 0;
  let place = 0;
  while (digits >= 0) {
    sum += Math.floor((x / (10 ** digits)) % 10) * (10 ** place);
    digits -= 1;
    place += 1;
    if (sum > ((2 ** 31) - 1)) {
      digits = -1;
      sum = 0;
    }
  }
  if (x < 0) sum *= -1;
  return sum;
};
