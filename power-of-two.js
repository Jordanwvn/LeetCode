/* POWER OF TWO ****************************************************************
Given an integer, write a function to determine if it is a power of two.

Example 1:
- Input: 1
- Output: true

Example 2:
- Input: 16
- Output: true

Example 3:
- Input: 218
- Output: false
*******************************************************************************/

var isPowerOfTwo = function(n) {
    if (!n) return false;

    while (!(n & 1)) n >>= 1;
    return !!((n | 1) === 1);
};
