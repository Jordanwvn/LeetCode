/* THIRD MAXIMUM NUMBER ********************************************************
Given a non-empty array of integers, return the third maximum number in this
array. If it does not exist, return the maximum number. The time complexity
must be in O(n).

Example 1:
- Input: [3, 2, 1]

- Output: 1

Explanation: The third maximum is 1.

Example 2:
- Input: [1, 2]

- Output: 2

Explanation: The third maximum does not exist, so the maximum (2) is returned
instead.

Example 3:
- Input: [2, 2, 3, 1]

- Output: 1

Explanation: Note that the third maximum here means the third maximum distinct
number.
Both numbers with value 2 are both considered as second maximum.
*******************************************************************************/

var thirdMax = function(nums) {
    let first;
    let second;
    let third;

    nums.forEach(num => {
        if (!first || num > first) {
            if (second !== undefined) third = second;
            if (first !== undefined) second = first;
            first = num;
        }
        else if (!second || num > second) {
            if (second !== undefined && num !== first) third = second;
            if (num !== first) second = num;
        }
        else if (!third || num > third) {
            if (num !== second && num !== first) third = num;
        }
    })

    return third !== undefined ? third : first;
};
