/* SINGLE NUMBER III ***********************************************************
Given an array of numbers nums, in which exactly two elements appear only once
and all the other elements appear exactly twice. Find the two elements that
appear only once.

Example:

- Input:  [1,2,1,3,2,5]
- Output: [3,5]
*******************************************************************************/

var singleNumber = function(nums) {
    let single = {};

    nums.forEach(val => single[val] = single[val] ? null : 1);

    let results = [];

    Object.keys(single).forEach(key => {if (single[key]) results.push(~~key)});

    return results;
};
