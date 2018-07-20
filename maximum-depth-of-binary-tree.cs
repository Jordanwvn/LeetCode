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

public class Solution {
    public int MaxDepth(TreeNode root) {

        if (root == null) {
            return 0;
        }

        int maxDepth = 0;

        void traverse(TreeNode node, int depth) {

            if (node.left != null) {
                traverse(node.left, depth + 1);
            }

            if (node.right != null) {
                traverse(node.right, depth + 1);
            }

            if (depth > maxDepth) {
                maxDepth = depth;
            }
        }

        traverse(root, 1);
        return maxDepth;
    }
}
