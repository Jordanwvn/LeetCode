/* BALANCED BINARY TREE ********************************************************
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the depth of the two subtrees of every node never differ
by more than 1.

Example 1:
Given the following tree [3,9,20,null,null,15,7]:

    3
   / \
  9  20
    /  \
   15   7
Return true.

Example 2:
Given the following tree [1,2,2,3,3,null,null,4,4]:

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
Return false.
*******************************************************************************/

var isBalanced = function(root) {
    var max = function (a, b) {
        return a > b ? a : b;
    }

    var height = function (node) {
        if (!node) return 0;
        return 1 + max(height(node.left), height(node.right));
    }

    var balanced = function (node) {
        if (!node) return true;

        let lHeight = height(node.left);
        let rHeight = height(node.right);

        if (
            Math.abs(lHeight - rHeight) <= 1
            && balanced(node.left)
            && balanced(node.right)
        ) return true;

        return false;
    }

    return balanced(root);
};
