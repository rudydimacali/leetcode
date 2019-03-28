/*

https://leetcode.com/problems/merge-two-sorted-lists/

Merge two sorted linked lists and return it as a new list.
The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4

*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const mergeTwoLists = (l1, l2) => {
  let leftPointer = l1;
  let rightPointer = l2;
  let merged = null;
  if (!rightPointer) return leftPointer;
  if (!leftPointer) return rightPointer;
  if (leftPointer && rightPointer && leftPointer.val < rightPointer.val) {
    merged = new ListNode(leftPointer.val);
    leftPointer = leftPointer.next;
  } else if (rightPointer && leftPointer && rightPointer.val <= leftPointer.val) {
    merged = new ListNode(rightPointer.val);
    rightPointer = rightPointer.next;
  }
  let mergedPointer = merged;
  while (leftPointer || rightPointer) {
    if (leftPointer && (!rightPointer || leftPointer.val < rightPointer.val)) {
      mergedPointer.next = new ListNode(leftPointer.val);
      mergedPointer = mergedPointer.next;
      leftPointer = leftPointer.next;
    } else if (rightPointer && (!leftPointer || rightPointer.val <= leftPointer.val)) {
      mergedPointer.next = new ListNode(rightPointer.val);
      mergedPointer = mergedPointer.next;
      rightPointer = rightPointer.next;
    }
  }
  return merged;
};
