/* MERGE TWO SORTED LISTS ******************************************************
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

- Input: 1->2->4, 1->3->4
- Output: 1->1->2->3->4->4
*******************************************************************************/

var mergeTwoLists = function(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    if (!l1 && !l2) return [];

    var traverse = function(list, aux) {
        while (list.next) {
            while (aux && aux.val < list.next.val) {
                let temp = aux;
                aux = aux.next;
                temp.next = list.next;
                list.next = temp;
            }
            list = list.next;
        }
        list.next = aux;
    }

    let lower;
    let higher;

    l1.val < l2.val ? (lower = l1, higher = l2) : (lower = l2, higher = l1);

    traverse(lower, higher);

    return lower;
};
