/* MERGE TWO BINARY TREES ******************************************************
Given two binary trees and imagine that when you put one of them to cover the
other, some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree. The merge rule is that if two
nodes overlap, then sum node values up as the new value of the merged node.
Otherwise, the NOT null node will be used as the node of new tree.

Example 1:
Input:
	Tree 1                     Tree 2
          1                         2
         / \                       / \
        3   2                     1   3
       /                           \   \
      5                             4   7
Output:
Merged tree:
	     3
	    / \
	   4   5
	  / \   \
	 5   4   7
*******************************************************************************/

var mergeTrees = function(t1, t2) {
    /* bad test case avoidance:
       empty input expects an output of an empty array
       however, an "empty" TreeNode is not actually possible */
    if (!t1 && !t2) return [];

    let valueA = 0, leftA = null, rightA = null;
    let valueB = 0, leftB = null, rightB = null;

    if (t1) valueA = t1.val, leftA = t1.left, rightA = t1.right;
    if (t2) valueB = t2.val, leftB = t2.left, rightB = t2.right;

    let tree = new TreeNode(valueA + valueB);

    if (leftA || leftB) tree.left = mergeTrees(leftA, leftB);
    if (rightA || rightB) tree.right = mergeTrees(rightA, rightB);

    return tree;
};
