/*

https://leetcode.com/problems/coin-change/

You are given coins of different denominations and a total amount of money amount.
Write a function to compute the fewest number of coins that you need to make up that amount.
If that amount of money cannot be made up by any combination of the coins, return -1.

Example 1:

Input: coins = [1, 2, 5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Note:
You may assume that you have an infinite number of each kind of coin.

*/

const assert = require('assert');

const coinChange = (coins, amount) => {
  const solutions = [0];
  while (solutions.length <= amount) {
    let currAmount = Infinity;
    for (let i = 0; i < coins.length; i += 1) {
      if (solutions.length - coins[i] >= 0 && solutions[solutions.length - coins[i]] !== -1) {
        currAmount = Math.min(currAmount, 1 + solutions[solutions.length - coins[i]]);
      }
    }
    currAmount = (currAmount === Infinity ? -1 : currAmount);
    solutions.push(currAmount);
  }
  return solutions[amount];
};

assert.equal(coinChange([1, 2, 5], 11), 3);
assert.equal(coinChange([2], 3), -1);
