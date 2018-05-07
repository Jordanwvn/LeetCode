/* SUM OF LEFT LEAVES **********************************************************
Find the sum of all left leaves in a given binary tree.

Example:

    3
   / \
  9  20
    /  \
   15   7

There are two left leaves in the binary tree, with values 9 and 15
respectively. Return 24.
*******************************************************************************/

var sumOfLeftLeaves = function(root) {
    let sum = 0;

    var traverse = function(node, direction='N/A') {
        if (!node.left && !node.right && direction === 'left') sum += node.val;

        if (node.left) traverse(node.left, 'left');
        if (node.right) traverse(node.right, 'right');
    }

    if (root) traverse(root);

    return sum;
};
