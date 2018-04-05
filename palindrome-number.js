/* PALINDROME NUMBER ***********************************************************
Determine whether an integer is a palindrome. Do this without extra space.
*******************************************************************************/

var isPalindrome = function(x) {
    return x === parseInt([...`${x}`].reverse().join('')) ? true : false;
};
