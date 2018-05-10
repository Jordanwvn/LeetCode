/* REMOVE DUPLICATES FROM SORTED LIST ******************************************
Given a sorted linked list, delete all duplicates such that each element appear only once.

Example 1:
- Input: 1->1->2
- Output: 1->2

Example 2:
- Input: 1->1->2->3->3
- Output: 1->2->3
*******************************************************************************/

var deleteDuplicates = function(head) {
    if (!head) return [];

    let node = head;

    while (node.next) {
        if (node.next.val === node.val) {
            node.next = node.next.next;
        } else {
            node = node.next;
        }
    }

    return head;
};
