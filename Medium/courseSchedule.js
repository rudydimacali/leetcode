/*

https://leetcode.com/problems/course-schedule/

There are a total of n courses you have to take, labeled from 0 to n-1.

Some courses may have prerequisites,
for example to take course 0 you have to first take course 1,
which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs,
is it possible for you to finish all courses?

Example 1:

Input: 2, [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take.
             To take course 1 you should have finished course 0. So it is possible.
Example 2:

Input: 2, [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take.
             To take course 1 you should have finished course 0, and to take course 0 you should
             also have finished course 1. So it is impossible.
Note:

The input prerequisites is a graph represented by a list of edges,
not adjacency matrices. Read more about how a graph is represented.
You may assume that there are no duplicate edges in the input prerequisites.

*/

const assert = require('assert');

const canFinish = (numCourses, prerequisites) => {
  const prereq = {};
  for (let i = 0; i < numCourses; i += 1) {
    prereq[i] = {
      reqsLeft: 0,
      prereqFor: [],
      completed: false,
    };
  }

  for (let i = 0; i < prerequisites.length; i += 1) {
    prereq[prerequisites[i][0]].reqsLeft += 1;
    prereq[prerequisites[i][1]].prereqFor.push(prerequisites[i][0]);
  }


  let finished = 0;
  let prev = -1;

  while (finished > prev) {
    prev = finished;
    for (let i = 0; i < numCourses; i += 1) {
      if (prereq[i].reqsLeft === 0 && !prereq[i].completed) {
        prereq[i].prereqFor.forEach((course) => {
          prereq[course].reqsLeft -= 1;
        });
        prereq[i].completed = true;
        finished += 1;
      }
    }
  }

  return finished === numCourses;
};

assert.equal(canFinish(2, [[1, 0]]), true);
assert.equal(canFinish(2, [[1, 0], [0, 1]]), false);
assert.equal(canFinish(4, [[2, 0], [1, 0], [3, 2], [3, 1]]), true);
assert.equal(canFinish(2, [[0, 1]]), true);
assert.equal(canFinish(3, [[1, 0]]), true);
