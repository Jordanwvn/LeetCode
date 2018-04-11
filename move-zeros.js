/* MOVE ZEROS ******************************************************************
Given an array nums, write a function to move all 0's to the end of it while
maintaining the relative order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums
should be [1, 3, 12, 0, 0].
*******************************************************************************/

var moveZeroes = function(nums) {
    let zeros = 0;
    for (let i = 0; i < nums.length;) {
        if (nums[i] === 0) {
            zeros ++;
            nums.splice(i, 1);
        } else i++;
    }
    for (let i = 0; i < zeros; i++) nums.push(0);
};
