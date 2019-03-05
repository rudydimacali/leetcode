/*

https://leetcode.com/problems/to-lower-case

 Implement function ToLowerCase() that has a string parameter str, 
 and returns the same string in lowercase.
*/

/**
 * @param {string} str
 * @return {string}
 */
const toLowerCase = (str) => {
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let lowerStr = '';
  for (let i = 0; i < str.length; i++) {
    lowerStr += upper.indexOf(str[i]) === -1 ? str[i] : lower[upper.indexOf(str[i])];
  }
  return lowerStr;
};
