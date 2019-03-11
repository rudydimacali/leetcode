/*

https://leetcode.com/problems/reverse-string/

Write a function that reverses a string. The input string is given as an array of characters char[].

Do not allocate extra space for another array, you must do this
by modifying the input array in-place with O(1) extra memory.

You may assume all the characters consist of printable ascii characters.

Example 1:

Input: ['h','e','l','l','o']
Output: ['o','l','l','e','h']

*/

const assert = require('assert');

const reverseString = (s) => {
  const swap = (indexOne, indexTwo) => {
    const temp = s[indexTwo];
    s[indexTwo] = s[indexOne];
    s[indexOne] = temp;
  };
  for (let i = 0; i < Math.floor(s.length / 2); i += 1) {
    swap(i, s.length - 1 - i);
  }
  return s;
};

assert.deepEqual(reverseString(['h', 'e', 'l', 'l', 'o']), ['o', 'l', 'l', 'e', 'h']);
