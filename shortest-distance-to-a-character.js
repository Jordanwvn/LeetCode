/* SHORTEST DISTANCE TO A CHARACTER ********************************************
Given a string S and a character C, return an array of integers representing
the shortest distance from the character C in the string.

Example 1:

- Input: S = "loveleetcode", C = 'e'
- Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]


Note:

S string length is in [1, 10000].
C is a single character, and guaranteed to be in string S.
All letters in S and C are lowercase.
*******************************************************************************/

var shortestToChar = function(S, C) {
    let result = [];

    for (let i = 0; i < S.length; i++) {
        for (let count = 0, found = false; found === false; count++) {
            if (
                (i - count >= 0 && S.charAt(i - count) === C) ||
                (i + count < S.length && S.charAt(i + count) === C)
            ) {
                result.push(count);
                found = true;
            }
        }
    }
    return result;
};
