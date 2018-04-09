/* NUMBER COMPLIMENT ***********************************************************
Given a positive integer, output its complement number. The complement strategy
is to flip the bits of its binary representation.

Note:
The given integer is guaranteed to fit within the range of a 32-bit signed
integer.

You could assume no leading zero bit in the integer’s binary representation.

Example 1:
- Input: 5
- Output: 2

Explanation: The binary representation of 5 is 101 (no leading zero bits), and
its complement is 010. So you need to output 2.

Example 2:
- Input: 1
- Output: 0

Explanation: The binary representation of 1 is 1 (no leading zero bits), and
its complement is 0. So you need to output 0.
*******************************************************************************/

var findComplement = function(num) {
    if (!num) return 1;

    let n = num;
    let binArr = [];
    let result = 0;

    for (let i = 0; i < 32; i++, binArr.push(n & 1), n >>= 1);
    binArr = binArr.reverse();

    for (var start = 0; !binArr[start]; start++);
    binArr = binArr.slice(start);

    for (let digit in binArr) binArr[digit] ^= 1;

    for (let i = 0; i < binArr.length; i++) {
        result += binArr[i];
        if (i + 1 !== binArr.length) result <<= 1;
    }
    return result;
};
