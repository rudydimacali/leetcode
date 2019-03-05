/*

https://leetcode.com/problems/jewels-and-stones

You're given strings J representing the types of stones that are jewels,
and S representing the stones you have.  Each character in S is a type of stone you have. 
You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters.
Letters are case sensitive, so "a" is considered a different type of stone from "A".
*/

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */

const numJewelsInStones = (J, S) => {
  const jewels = J.split('');
  let jewelCount = 0;
  for (let i = 0; i < S.length; i += 1) {
    if (jewels.indexOf(S[i]) !== -1) {
      jewelCount += 1;
    }
  }
  return jewelCount;
};
