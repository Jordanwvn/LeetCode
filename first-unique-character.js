/* FIRST UNIQUE CHARACTER ******************************************************
Given a string, find the first non-repeating character in it and return it's
index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
*******************************************************************************/

var firstUniqChar = function(s) {
    let characters = {};

    for (let i = 0; i < s.length; i++) {
        let c = s.charAt(i);
        characters[c] = characters[c] ? ++characters[c] : 1;
    }

    let result = -1;

    for (let i = 0; i < s.length; i++) {
        if (characters[s.charAt(i)] === 1) {
            result = i;
            break;
        }
    }

    return result;
};
