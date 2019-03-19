/*

https://leetcode.com/problems/valid-parentheses/

Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false

*/

const assert = require('assert');

const isValid = (s) => {
  const stack = [];
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i]);
    } else {
      const opener = stack.pop();
      if ((s[i] === ')' && opener !== '(')
      || (s[i] === '}' && opener !== '{')
      || (s[i] === ']' && opener !== '[')) {
        return false;
      }
    }
  }
  return (stack.length === 0);
};

assert.equal(isValid('()'), true);
assert.equal(isValid('()[]{}'), true);
assert.equal(isValid('(]'), false);
