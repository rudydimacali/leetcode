/*

https://leetcode.com/problems/pascals-triangle/

Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:

Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/

const generate = (numRows) => {
  const answer = [[1]];
  if (numRows > 0) {
    for (var i = 0; i < numRows - 1; i += 1) {
      const innerArr = [1];
      for (let j = 1; j < answer[i].length; j += 1) {
        innerArr.push(answer[i][j - 1] + answer[i][j]);
      }
      innerArr.push(1);
      answer.push(innerArr);
    }
    return answer;
  } else {
    return [];
  }
};
