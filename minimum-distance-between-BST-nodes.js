/* MINIMUM DISTANCE BETWEEN BST NODES ******************************************
Given a Binary Search Tree (BST) with the root node root, return the minimum
difference between the values of any two different nodes in the tree.

Example :

Input: root = [4,2,6,1,3,null,null]
Output: 1
Explanation:
Note that root is a TreeNode object, not an array.

The given tree [4,2,6,1,3,null,null] is represented by the following diagram:

          4
        /   \
      2      6
     / \
    1   3

while the minimum difference in this tree is 1, it occurs between node 1 and
node 2, also between node 3 and node 2.
*******************************************************************************/

var minDiffInBST = function(root) {
    let minimum;

    let values = [];

    var traverse = function (node) {
        values.push(node.val);
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
    }

    traverse(root);

    values = values.sort((a, b) => a - b);

    for (let i = 1; i < values.length; i++) {
        let dif = Math.abs(values[i] - values[i - 1])
        if (minimum === undefined || dif < minimum) minimum = dif;
    }

    return minimum;
};
