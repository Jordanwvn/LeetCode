/* MAX CONSECUTIVE ONES ********************************************************
Given a binary array, find the maximum number of consecutive 1s in this array.

Example 1:
- Input: [1,1,0,1,1,1]
- Output: 3

Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.
*******************************************************************************/

var findMaxConsecutiveOnes = function(nums) {
    let maxSeen = 0;
    let curSeen = 0;

    for (let num of nums) {
        if (num) {
            curSeen++;
            if (curSeen > maxSeen) maxSeen = curSeen;
        } else curSeen = 0;
    }

    return maxSeen;
};
