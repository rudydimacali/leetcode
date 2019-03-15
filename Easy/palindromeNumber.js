/*

https://leetcode.com/problems/palindrome-number/

Determine whether an integer is a palindrome.
An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. 
From right to left, it becomes 121-. Therefore it is not a palindrome.

*/

const assert = require('assert');

const isPalindrome = (x) => {
  if (x < 0) return false;
  let valid = true;
  const numDigits = Math.floor(Math.log10(x)) + 1;
  for (let i = 0; i < numDigits; i += 1) {
    if (Math.floor(x / (10 ** i)) % 10 !== Math.floor(x / (10 ** (numDigits - 1 - i))) % 10) {
      valid = false;
      break;
    }
  }
  return valid;
};

assert.equal(isPalindrome(121), true);
assert.equal(isPalindrome(-121), false);
assert.equal(isPalindrome(10), false);
assert.equal(isPalindrome(1), true);
