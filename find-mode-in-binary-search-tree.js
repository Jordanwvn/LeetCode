/* FIND MODE IN BINARY SEARCH **************************************************
Given a binary search tree (BST) with duplicates, find all the mode(s) (the
most frequently occurred element) in the given BST.

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than or equal to
the node's key.
The right subtree of a node contains only nodes with keys greater than or equal
to the node's key.
Both the left and right subtrees must also be binary search trees.
For example:

Given BST [1,null,2,2],
   1
    \
     2
    /
   2
return [2].
*******************************************************************************/

var findMode = function(root) {
    if (!root) return [];

    let table = {};
    let maxSeen = 0;

    var traverse = function(node) {
        table[node.val] = table[node.val] ? ++table[node.val] : 1;
        if (table[node.val] > maxSeen) maxSeen = table[node.val];
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
    }

    traverse(root);

    let results = [];

    Object.keys(table).forEach(key => {
        if (table[key] === maxSeen) results.push(parseInt(key));
    });

    return results;
};
