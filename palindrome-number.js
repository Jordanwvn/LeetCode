/* PALINDROME NUMBER ***********************************************************
Determine whether an integer is a palindrome. Do this without extra space.
*******************************************************************************/

var isPalindrome = function(x) {
    for (let start = 0, end = `${x}`.length - 1; start < (`${x}`.length >> 1); start++, end--) {
        if (`${x}`.charAt(start) !== `${x}`.charAt(end)) return false;
    }
    return true;
};
