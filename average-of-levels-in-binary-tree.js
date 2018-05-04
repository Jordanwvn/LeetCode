/* AVERAGE OF LEVELS IN BINARY TREE ********************************************
Given a non-empty binary tree, return the average value of the nodes on each
level in the form of an array.

Example 1:
- Input:
    3
   / \
  9  20
    /  \
   15   7
- Output: [3, 14.5, 11]

Explanation:
The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level
is 11. Hence return [3, 14.5, 11].
*******************************************************************************/

var averageOfLevels = function(root) {
    let levels = {};

    var traverse = function(node, level=0) {
        if (!levels[level]) levels[level] = [];
        levels[level].push(node.val);

        if (node.left) traverse(node.left, level + 1);
        if (node.right) traverse(node.right, level + 1);
    }

    if (root) traverse(root);

    let sets = Object.values(levels);
    let result = [];

    for (let i = 0; i < sets.length; i++) {
        let average = sets[i].reduce((acc, cur) => acc + cur) / sets[i].length;
        result.push(average)
    }

    return result;
};
