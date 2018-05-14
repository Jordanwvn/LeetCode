/* POWER OF THREE **************************************************************
Given an integer, write a function to determine if it is a power of three.
*******************************************************************************/

var isPowerOfThree = function(n) {
    if (!n) return false;

    while (!(n % 3)) n /= 3;
    return !!(n === 1)
};
