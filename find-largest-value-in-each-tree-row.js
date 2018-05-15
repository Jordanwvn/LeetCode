/* FIND LARGEST VALUE IN EACH TREE ROW *****************************************
You need to find the largest value in each row of a binary tree.

Example:
- Input:

          1
         / \
        3   2
       / \   \
      5   3   9

- Output: [1, 3, 9]
*******************************************************************************/

var largestValues = function(root) {
    let queue = [];
    let tiers = [];

    var traverse = function(node) {

        if (tiers[node.lvl] !== undefined) {
            if (tiers[node.lvl] < node.cur.val)
                tiers[node.lvl] = node.cur.val;
        } else tiers.push(node.cur.val);

        if (node.cur.left) queue.push({
            cur: node.cur.left,
            lvl: node.lvl + 1
        });

        if (node.cur.right) queue.push({
            cur: node.cur.right,
            lvl: node.lvl + 1
        });

        if (queue[0]) traverse (queue.shift());
    }

    if (root) traverse({cur: root, lvl: 0});

    return tiers;
};
