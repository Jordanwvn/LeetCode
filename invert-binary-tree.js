/* INVERT BINARY TREE **********************************************************
Invert a binary tree.

     4
   /   \
  2     7
 / \   / \
1   3 6   9

to

     4
   /   \
  7     2
 / \   / \
9   6 3   1
*******************************************************************************/

var invertTree = function(root) {
    var traverse = function(node) {
        let temp = node.left;

        node.left = node.right;
        node.right = temp;

        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
    }

    if (root) traverse(root);

    return root;
};
