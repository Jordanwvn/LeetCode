/* SUM OF TWO INTEGERS *********************************************************
Calculate the sum of two integers a and b, but you are not allowed to use the
operator + and -.

Example:
Given a = 1 and b = 2, return 3.
*******************************************************************************/

var getSum = function(a, b) {
    if (!b) return a;
    return getSum(a ^ b, (a & b) << 1);
}
