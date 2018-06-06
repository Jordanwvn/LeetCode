/* INTERSECTION OF TWO ARRAYS **************************************************
Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].
*******************************************************************************/

var intersection = function(nums1, nums2) {
    let nums = {};

    for (let num of nums1) nums[num] = nums[num] + 1 || 1;

    let result = [];

    for (let num of nums2) {
        if (nums[num]) {
            result.push(num);
            nums[num] = null;
        }
    }

    return result;
};
