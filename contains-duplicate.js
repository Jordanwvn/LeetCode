/* CONTAINS DUPLICATE **********************************************************
Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the
array, and it should return false if every element is distinct.

Example 1:
- Input: [1,2,3,1]
- Output: true

Example 2:
- Input: [1,2,3,4]
- Output: false

Example 3:
- Input: [1,1,1,3,3,4,3,2,4,2]
- Output: true
*******************************************************************************/

var containsDuplicate = function(nums) {
    let seen = {};

    for (let num of nums) {
        if (!seen[num]) seen[num] = 1;
        else return true;
    }
    return false;
};
