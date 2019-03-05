/*

https://leetcode.com/problems/valid-anagram/

Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
*/

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  const chars = {};
  for (let i = 0; i < s.length; i += 1) {
    chars[s[i]] = chars[s[i]] === undefined ? 1 : chars[s[i]] + 1;
  }
  for (let j = 0; j < t.length; j += 1) {
    chars[t[j]] = chars[t[j]] === undefined ? -1 : chars[t[j]] - 1;
    if (chars[t[j]] < 0) return false;
  }
  return true;
};
