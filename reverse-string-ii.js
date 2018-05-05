/* REVERSE STRING II ***********************************************************
Given a string and an integer k, you need to reverse the first k characters for
every 2k characters counting from the start of the string. If there are less
than k characters left, reverse all of them. If there are less than 2k but
greater than or equal to k characters, then reverse the first k characters and
left the other as original.

Example:
- Input: s = "abcdefg", k = 2
- Output: "bacdfeg"
*******************************************************************************/

var reverseStr = function(s, k) {
    for (let i = 0; i < s.length; i += (k * 2)) {
        s = `
            ${s.slice(0, i)}
            ${[...s.slice(i, i + k)].reverse().join('')}
            ${s.slice(i + k)}
        `;
    }
    return s;
};
