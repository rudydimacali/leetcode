const assert = require('assert');

const getMaxProfit = (stockPrices) => {
  if (stockPrices.length < 2) throw new Error('Must have at least 2 prices!');
  let maxProfit = stockPrices[1] - stockPrices[0];
  let currentLowest = stockPrices[0];
  for (let i = 1; i < stockPrices.length; i += 1) {
    if (stockPrices[i] - currentLowest > maxProfit) maxProfit = stockPrices[i] - currentLowest;
    if (stockPrices[i] < currentLowest) currentLowest = stockPrices[i];
  }
  return maxProfit;
};

assert.equal(getMaxProfit([10, 7, 5, 8, 11, 9]), 6);
assert.equal(getMaxProfit([5, 4, 3, 2, 1]), -1);
