/*

https://leetcode.com/problems/reverse-linked-list/

Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively.
Could you implement both?

*/

const reverseList = (head) => {
  if (!head) return head;
  let previous = head;
  let curr = head.next;
  let next = (curr ? curr.next : null);
  previous.next = null;
  while (curr !== null) {
    curr.next = previous;
    previous = curr;
    curr = next;
    if (next) next = next.next;
  }
  return previous;
};
