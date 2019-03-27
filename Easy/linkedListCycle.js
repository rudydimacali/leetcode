/*

https://leetcode.com/problems/linked-list-cycle/

Given a linked list, determine if it has a cycle in it.

To represent a cycle in the given linked list,
we use an integer pos which represents the position (0-indexed)
in the linked list where tail connects to.
If pos is -1, then there is no cycle in the linked list.

Example 1:

Input: head = [3,2,0,-4], pos = 1
Given 3 -> 2 -> 0 -> -4 -> back to 2
Output: true
Explanation: There is a cycle in the linked list, where tail connects to the second node.

*/

const hasCycle = (head) => {
  if (!head || !head.next) return false;
  let slow = head;
  let fast = head;
  while (slow.next && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
};
