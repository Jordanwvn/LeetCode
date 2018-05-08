/* REVERSE LINKED LIST *********************************************************
Reverse a singly linked list.

Example:

- Input: 1->2->3->4->5->NULL
- Output: 5->4->3->2->1->NULL
*******************************************************************************/

// ITERATIVE

var reverseList = function(head) {
    if (!head) return [];

    let node = head;
    let prev = null;
    let next = null;

    while (node.next) {
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
    }
    node.next = prev;

    return node;
};

// RECURSIVE

var reverseList = function(head) {
    var reverse = function(node, prev=null, next=node.next) {
        node.next = prev;

        if (!next) return node;

        return reverse (next, node);
    }

    return head ? reverse(head) : [];
};
