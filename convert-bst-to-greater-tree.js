/* CONVERT BST TO GREATER TREE *************************************************
Given a Binary Search Tree (BST), convert it to a Greater Tree such that every
key of the original BST is changed to the original key plus sum of all keys
greater than the original key in BST.

Example:

Input: The root of a Binary Search Tree like this:
              5
            /   \
           2     13

Output: The root of a Greater Tree like this:
             18
            /   \
          20     13
*******************************************************************************/

var convertBST = function(root) {
    let sum = 0;

    var traverse = function (node) {
        if (!node) return;
        traverse(node.right);
        sum += node.val;
        node.val = sum;
        traverse(node.left);
    }

    if (root) traverse (root);

    return root;
};
