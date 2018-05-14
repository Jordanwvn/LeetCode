/* PATH SUM ********************************************************************
Given a binary tree and a sum, determine if the tree has a root-to-leaf path
such that adding up all the values along the path equals the given sum.

Note: A leaf is a node with no children.

Example:

Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.


*******************************************************************************/

var hasPathSum = function(root, sum) {
    let found = false;

    var traverse = function(node, total=node.val) {
        if (node.left) traverse(node.left, total + node.left.val);
        if (node.right) traverse(node.right, total + node.right.val);
        if (!node.left && !node.right && total === sum) found = true;
    }

    if (root) traverse(root);

    return found;
};
