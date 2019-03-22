// Iterative Fisher-Yates Shuffle (Backwards)

const assert = require('assert');

const shuffleInPlace = (array) => {
  const swap = (indexOne, indexTwo) => {
    const temp = array[indexOne];
    array[indexOne] = array[indexTwo];
    array[indexTwo] = temp;
  };
  for (let i = 0; i < array.length - 1; i += 1) {
    let swapIndex = Math.round(Math.random() * (array.length - 1 - i) + i);
    while (swapIndex === i) swapIndex = Math.round(Math.random() * (array.length - 1 - i) + i);
    swap(i, swapIndex);
  }
  return array;
};

assert.notDeepEqual(shuffleInPlace([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
