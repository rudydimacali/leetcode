/*

https://leetcode.com/problems/squares-of-a-sorted-array

Given an array of integers A sorted in non - decreasing order, return an array
of the squares of each number, also in sorted non - decreasing order.

Example 1:

Input: [-4, -1, 0, 3, 10]
Output: [0, 1, 9, 16, 100]

Example 2:

Input: [-7, -3, 2, 3, 11]
Output: [4, 9, 9, 49, 121]
*/

const sortedSquares = (A) => {
  if (A.length === 1) {
    return ([(Math.pow(A[0], 2))]);
  }
  const B = [];
  let negativePointer = 0;
  while (A[negativePointer] < 0 && negativePointer < A.length) {
    negativePointer += 1;
  }
  let positivePointer = negativePointer;
  negativePointer -= 1;
  while (negativePointer >= 0 || positivePointer < A.length) {
    if (Math.pow(A[negativePointer], 2) < Math.pow(A[positivePointer], 2) ||
      positivePointer >= A.length) {
      B.push(Math.pow(A[negativePointer], 2));
      negativePointer -= 1;
    } else {
      B.push(Math.pow(A[positivePointer], 2));
      positivePointer += 1;
    }
  }
  return B;
};
