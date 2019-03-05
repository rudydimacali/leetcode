/*

https://leetcode.com/problems/hamming-distance

The Hamming distance between two integers is the number
of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

  Note:
0 ≤ x, y < 231.

Example:

Input: x = 1, y = 4

Output: 2

Explanation:
1(0 0 0 1)
4(0 1 0 0)
↑   ↑

The above arrows point to positions where the corresponding bits are different.
*/

const hammingDistance = (x, y) => {
  const getBits = (num) => {
    if (num === 0) return [0];
    const bits = [];
    let number = num;
    while (number > 0) {
      bits.push(number % 2);
      number = Math.floor(number / 2);
    }
    return bits.reverse();
  };
  const zeroPad = (arr, num) => {
    const newArr = [];
    while (num > 0) {
      newArr.push(0);
      num -= 1;
    }
    for (let i = 0; i < arr.length; i += 1) {
      newArr.push(arr[i]);
    }
    return newArr;
  };
  let xBits = getBits(x);
  let yBits = getBits(y);
  if (xBits.length < yBits.length) {
    xBits = zeroPad(xBits, yBits.length - xBits.length);
  } else if (xBits.length > yBits.length) {
    yBits = zeroPad(yBits, xBits.length - yBits.length);
  }
  let difference = 0;
  for (let i = 0; i < xBits.length; i += 1) {
    if (xBits[i] !== yBits[i]) {
      difference += 1;
    }
  }
  return difference;
};
