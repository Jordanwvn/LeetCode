/* MAXIMUM DEPTH OF BINARY TREE ************************************************
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root
node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7

return its depth = 3.
*******************************************************************************/

var maxDepth = function(root) {
    if (!root) return 0;

    let maxDepth = 0;

    var traverse = function(node, depth=1) {
        if (node.left) traverse(node.left, depth + 1);
        if (node.right) traverse(node.right, depth + 1);
        if (depth > maxDepth) maxDepth = depth;
    }

    traverse(root);
    return maxDepth;
};
