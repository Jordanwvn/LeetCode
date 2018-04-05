/* REVERSE INTEGER *************************************************************
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:
- Input: 123
- Output:  321

Example 2:
- Input: -123
- Output: -321

Example 3:
- Input: 120
- Output: 21
*******************************************************************************/

var reverse = function(x) {
    let negative = false;
    let numArr = [...`${x}`];

    if (numArr[0] === '-') {
        numArr.shift();
        negative = true;
    }
    numArr = numArr.reverse().join('');

    if (parseInt(numArr) > 2147483647) return 0;

    return negative ? 0 - parseInt(numArr) : parseInt(numArr);
};
