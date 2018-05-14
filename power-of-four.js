/* POWER OF FOUR ***************************************************************
Given an integer (signed 32 bits), write a function to check whether it is a
power of 4.

Example:
Given num = 16, return true. Given num = 5, return false.
*******************************************************************************/

var isPowerOfFour = function(num) {
    if (!num) return false;

    while (!(num & 1) && !(num & 2)) num >>= 2;
    return !!((num | 1) === 1 && (num & 2) === 0);
};
