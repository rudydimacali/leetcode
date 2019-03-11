/*

https://leetcode.com/problems/add-two-numbers/

You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order and each of their nodes contain a single digit.
Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807

*/

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
*/

// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const addTwoNumbers = (l1, l2) => {
  const newList = new ListNode((l1.val + l2.val) % 10);
  let newListHead = newList;
  let leftVal = 0;
  let rightVal = 0;
  let carry = 0;
  let sum = 0;
  if (l1.val + l2.val > 9) carry = Math.floor((l1.val + l2.val) / 10);
  let leftPointer = l1.next;
  let rightPointer = l2.next;
  while (leftPointer || rightPointer || carry) {
    if (leftPointer === null) {
      leftVal = 0;
    } else {
      leftVal = leftPointer.val;
    }
    if (rightPointer === null) {
      rightVal = 0;
    } else {
      rightVal = rightPointer.val;
    }
    sum = leftVal + rightVal + carry;
    carry = 0;
    newListHead.next = new ListNode(sum % 10);
    newListHead = newListHead.next;
    if (sum > 9) carry = Math.floor(sum / 10);
    if (leftPointer !== null) leftPointer = leftPointer.next;
    if (rightPointer !== null) rightPointer = rightPointer.next;
  }
  return newList;
};
