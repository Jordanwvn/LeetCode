/* TWO SUM IV: INPUT IS A BST **************************************************
Given a Binary Search Tree and a target number, return true if there exist two
elements in the BST such that their sum is equal to the given target.

Example 1:
- Input:
    5
   / \
  3   6
 / \   \
2   4   7

Target = 9

- Output: True

Example 2:
- Input:
    5
   / \
  3   6
 / \   \
2   4   7

Target = 28

- Output: False
*******************************************************************************/

var findTarget = function(root, k) {
    let found = false;

    var findVal = function(target, node, start) {
        if (target === node.val && start !== node.val) return true;
        if (target < node.val && node.left) return findVal (target, node.left, start);
        if (target > node.val && node.right) return findVal (target, node.right, start);
        return false;
    }

    var traverse = function(node) {
        if (node.left) traverse(node.left, k);
        if (node.right) traverse(node.right, k);
        if (findVal(k - node.val, root, node.val)) found = true;
    }

    if (root) traverse(root);

    return found;
};
