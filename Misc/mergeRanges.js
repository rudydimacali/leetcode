/*

Write a function mergeRanges() that takes an array of multiple meeting time
ranges and returns an array of condensed ranges.

For example, given:

  [
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
]

your function would return:

  [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 8 },
  { startTime: 9, endTime: 12 },
]

*/

const assert = require('assert');

const mergeRanges = (meetings) => {
  const mergedMeetings = Array.from(meetings);
  mergedMeetings.sort((a, b) => a.startTime - b.startTime);
  let i = 1;
  while (i < mergedMeetings.length) {
    if (mergedMeetings[i].startTime <= mergedMeetings[i - 1].endTime
      && mergedMeetings[i].endTime > mergedMeetings[i - 1].endTime) {
      mergedMeetings[i - 1].endTime = mergedMeetings[i].endTime;
      mergedMeetings.splice(i, 1);
    } else if (mergedMeetings[i].startTime >= mergedMeetings[i - 1].startTime
      && mergedMeetings[i].endTime <= mergedMeetings[i - 1].endTime) {
      mergedMeetings.splice(i, 1);
    } else {
      i += 1;
    }
  }
  return mergedMeetings;
};

assert.deepEqual(mergeRanges([
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },
  { startTime: 4, endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9, endTime: 10 },
]), [
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 8 },
    { startTime: 9, endTime: 12 }]);
