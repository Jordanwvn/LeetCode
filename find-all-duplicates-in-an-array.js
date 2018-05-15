/* FIND ALL DUPLICATES IN AN ARRAY *********************************************
Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements
appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

Example:
- Input:
[4,3,2,7,8,2,3,1]

- Output:
[2,3]
*******************************************************************************/

var findDuplicates = function(nums) {
    let seen = {};
    let results = [];

    for (let i = 0; i < nums.length; i++) {
        if (seen[nums[i]]) results.push(nums[i])
        else seen[nums[i]] = true;
    }

    return results;
};