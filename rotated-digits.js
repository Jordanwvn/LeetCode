/* ROTATED DIGITS **************************************************************
X is a good number if after rotating each digit individually by 180 degrees, we
get a valid number that is different from X.  Each digit must be rotated - we
cannot choose to leave it alone.

A number is valid if each digit remains a digit after rotation. 0, 1, and 8
rotate to themselves; 2 and 5 rotate to each other; 6 and 9 rotate to each
other, and the rest of the numbers do not rotate to any other number and become
invalid.

Now given a positive number N, how many numbers X from 1 to N are good?

Example:
- Input: 10
- Output: 4
Explanation:
There are four good numbers in the range [1, 10] : 2, 5, 6, 9.
Note that 1 and 10 are not good numbers, since they remain unchanged after
rotating.
*******************************************************************************/

var rotatedDigits = function(N) {
    let result = 0;
    for (let num = 1; num <= N; num++) {
        let numArr = [...`${num}`];

        let valid = {'2': true, '5': true, '6': true, '9': true};
        let invalid = {'3': true, '4': true, '7': true}
        let flippable = false;

        for (let digit of numArr) {
            if (valid[digit]) flippable = true;
            if (invalid[digit]) {
                flippable = false;
                break;
            }
        };
        if (flippable) result++;
    }
    return result;
};
