/* CONTAINS DUPLICATE II *******************************************************
Given an array of integers and an integer k, find out whether there are two
distinct indices i and j in the array such that nums[i] = nums[j] and the
absolute difference between i and j is at most k.

Example 1:
- Input: [1,2,3,1], k = 3
- Output: true

Example 2:
- Input: [1,0,1,1], k = 1
- Output: true

Example 3:
- Input: [1,2,1], k = 0
- Output: false
*******************************************************************************/

var containsNearbyDuplicate = function(nums, k) {
    let seen = {};

    for (let i = 0; i < nums.length; i++) {
        if (seen[nums[i]] === undefined) seen[nums[i]] = i;
        else if (i - seen[nums[i]] <= k) return true;
        else seen[nums[i]] = i;
    }
    return false;
};
