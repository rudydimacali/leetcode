/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/*

https://leetcode.com/problems/find-common-characters/

Given an array A of strings made only from lowercase letters,
return a list of all characters that show up in all strings
within the list (including duplicates).

For example, if a character occurs 3 times in all strings but not 4 times,
you need to include that character three times in the final answer.

You may return the answer in any order.

Example 1:

Input: ["bella","label","roller"]
Output: ["e","l","l"]
Example 2:

Input: ["cool","lock","cook"]
Output: ["c","o"]
*/

const commonCharacters = (A) => {
  const letters = {};
  A[0].split('').forEach((letter) => {
    letters[letter] = letters[letter] === undefined ? 1 : letters[letter] + 1;
  });

  let testLetters = {};
  A.forEach((word) => {
    testLetters = Object.assign({}, letters);
    for (let i = 0; i < word.length; i += 1) {
      if (testLetters[word[i]] !== undefined) testLetters[word[i]] -= 1;
    }
    for (const letter in testLetters) {
      if (letters[letter] > 0 && testLetters[letter] > 0) letters[letter] -= testLetters[letter];
      if (letters[letter] <= 0) delete letters[letter];
    }
  });
  const common = [];
  for (const letter in letters) {
    for (let i = 0; i < letters[letter]; i += 1) {
      common.push(letter);
    }
  }
  return common;
};
