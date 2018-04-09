/* LONGEST COMMON PREFIX *******************************************************
Write a function to find the longest common prefix string amongst an array of
strings.
*******************************************************************************/

var longestCommonPrefix = function(strs) {
    if (!strs[0]) return '';
    let result = '';

    for (let i = 0, flag = true; (flag) && (i < strs[0].length); i++) {
        let common = strs[0].charAt(i);

        for (let str of strs) {
            if (str.charAt(i) !== common) flag = false;
        }
        if (flag) result += common;
    }
    return result;
};
