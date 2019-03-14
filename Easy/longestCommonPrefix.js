/*

https://leetcode.com/problems/longest-common-prefix/

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

*/

const assert = require('assert');

const longestCommonPrefix = (strs) => {
  if (!strs.length) return '';
  let continueToIterate = true;
  let i = 0;
  let returnString = '';
  let currentLetter = null;
  while (continueToIterate) {
    currentLetter = strs[0][i];
    if (currentLetter === undefined) {
      continueToIterate = false;
    } else {
      for (let j = 0; j < strs.length; j += 1) {
        if (strs[j][i] !== currentLetter) {
          continueToIterate = false;
        }
      }
      if (continueToIterate) returnString += currentLetter;
    }
    i += 1;
  }
  return returnString;
};

assert.equal(longestCommonPrefix(['flower', 'flow', 'flight']), 'fl');
assert.equal(longestCommonPrefix([]), '');
assert.equal(longestCommonPrefix(['test', 'asd']), '');
