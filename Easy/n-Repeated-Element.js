/*

https://leetcode.com/problems/n-repeated-element-in-size-2n-array

In an array A of size 2N, there are N + 1 unique elements, and
exactly one of these elements is repeated N times.

Return the element repeated N times.

*/

/**
 * @param {number[]} A
 * @return {number}
 */

const repeatedNTimes = (A) => {
  const elems = {};
  for (const index in A) {
    elems[A[index]] = elems[A[index]] === undefined ? 1 : elems[A[index]] + 1;
  }
  const elemCount = Object.keys(elems);
  for (let i = 0; i < elemCount.length; i++) {
    if (elems[elemCount[i]] === elemCount.length - 1) {
      return elemCount[i];
    }
  }
};
