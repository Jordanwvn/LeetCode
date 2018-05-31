/* MINIMUM ABSOLUTE DIFFERENCE IN BST ******************************************
Given a binary search tree with non-negative values, find the minimum absolute
difference between values of any two nodes.

Example:

Input:

   1
    \
     3
    /
   2

Output:
1

Explanation:
The minimum absolute difference is 1, which is the difference between 2 and 1 (or between 2 and 3).
*******************************************************************************/

var getMinimumDifference = function(root) {
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
};Given a binary search tree with non-negative values, find the minimum absolute difference between values of any two nodes.

Example:

Input:

   1
    \
     3
    /
   2

Output:
1

Explanation:
The minimum absolute difference is 1, which is the difference between 2 and 1 (or between 2 and 3).
