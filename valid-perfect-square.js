/* VALID PERFECT SQUARE ********************************************************
Given a positive integer num, write a function which returns True if num is a
perfect square else False.

Note: Do not use any built-in library function such as sqrt.

Example 1:
Input: 16
Returns: True

Example 2:
Input: 14
Returns: False
*******************************************************************************/

var isPerfectSquare = function(num) {
    for (let i = 1, sum = 0; sum <= num; i += 2) {
        sum += i;
        if (sum === num) return true;
    }
    return false;
};
