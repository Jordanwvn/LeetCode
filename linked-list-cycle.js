/* LINKED LIST CYCLE ***********************************************************
Given a linked list, determine if it has a cycle in it.
*******************************************************************************/

var hasCycle = function(head) {
    if (!head) return false;

    let slow = head;
    let fast = head;

    do {
        if (slow.next) slow = slow.next;
        else return false;
        if (fast.next && fast.next.next) fast = fast.next.next;
        else return false;
    } while (slow !== fast);

    return true;
};
