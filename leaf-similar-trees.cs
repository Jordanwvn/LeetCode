/* LEAF-SIMILAR TREES **********************************************************

Consider all the leaves of a binary tree.  From left to right order, the values
of those leaves form a leaf value sequence.

For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9,
8).

Two binary trees are considered leaf-similar if their leaf value sequence is
the same.

Return true if and only if the two given trees with head nodes root1 and root2
are leaf-similar.
*******************************************************************************/

public class Solution {
    public int[][] LeafSimilar(TreeNode root1, TreeNode root2) {
        int[] leaves1 = new int[100];
        int[] leaves2 = new int[100];

        int count = 0;

        void Traverse(TreeNode node, int[] leaves) {
            if (node.left != null) Traverse(node.left, leaves);
            if (node.right != null) Traverse(node.right, leaves);
            if (node.left == null && node.right == null) {
                leaves[count] = node.val;
                count++;
            }
        }

        Traverse(root1, leaves1);

        count = 0;

        Traverse(root2, leaves2);

        if (leaves1.Length != leaves2.Length) {
            return false;
        }

        for (int i = 0; i < leaves1.Length; i++) {
            if (leaves1[i] != leaves2[i]) {
                return false;
            }
        }

        return true;
    }
}
