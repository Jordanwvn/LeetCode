/* ADD TWO NUMBERS *************************************************************
You are given two non-empty linked lists representing two non-negative
integers. The digits are stored in reverse order and each of their nodes
contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the
number 0 itself.

Example

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*******************************************************************************/

var addTwoNumbers = function(l1, l2) {

    let carryOver = 0;

    let carry = function(sum) {
        if (sum >= 10) {
            carryOver = 1;
            sum -= 10;
        } else {
            carryOver = 0;
        }
        return sum;
    }

    let first = carry (l1.val + l2.val)
    let result = new ListNode(first);
    let current = result;

    let nodeA = l1.next;
    let nodeB = l2.next;

    while (nodeA || nodeB || carryOver) {
        let a = nodeA ? nodeA.val : 0;
        let b = nodeB ? nodeB.val : 0;
        let value = a + b + carryOver;

        value = carry (value);

        current.next = new ListNode(value);
        current = current.next;

        nodeA = nodeA ? nodeA.next : null;
        nodeB = nodeB ? nodeB.next : null;
    }

    return result;
};
