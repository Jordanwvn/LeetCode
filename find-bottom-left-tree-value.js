/* FIND BOTTOM LEFT TREE VALUE *************************************************
Given a binary tree, find the leftmost value in the last row of the tree.

Example 1:
- Input:

    2
   / \
  1   3

- Output:
1

Example 2:
- Input:

        1
       / \
      2   3
     /   / \
    4   5   6
       /
      7

- Output:
7
*******************************************************************************/

var findBottomLeftValue = function(root) {
    let queue = [];

    var traverse = function (node) {
        if (node.right) queue.push(node.right);
        if (node.left) queue.push(node.left);

        if (queue[0]) return traverse(queue.shift())
        else return node.val;
    }

    return traverse(root);
};
