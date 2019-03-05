/*

https://leetcode.com/problems/di-string-match

Given a string S that only contains "I" (increase) or "D" (decrease), let N = S.length.

Return any permutation A of [0, 1, ..., N] such that for all i = 0, ..., N-1:

If S[i] == "I", then A[i] < A[i+1]
If S[i] == "D", then A[i] > A[i+1]


Example 1:

Input: "IDID"
Output: [0,4,1,3,2]
Example 2:

Input: "III"
Output: [0,1,2,3]
*/

const diStringMatch = (S) => {
  // [0,1,2,3,4,5] => [0,4,1,3,2]
  //          [I,D,I,D]
  let A = [];
  let low = 0;
  let high = S.length;
  for (let i = 0; i <= S.length; i += 1) {
    if (S[i] === 'I') {
      A.push(low);
      low += 1;
    } else {
      A.push(high);
      high -= 1;
    }
  }
  return A;
};
