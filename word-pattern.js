/* WORD PATTERN ****************************************************************
Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter
in pattern and a non-empty word in str.

Example 1:
- Input: pattern = "abba", str = "dog cat cat dog"
- Output: true

Example 2:
- Input:pattern = "abba", str = "dog cat cat fish"
- Output: false

Example 3:
- Input: pattern = "aaaa", str = "dog cat cat dog"
- Output: false

Example 4:
- Input: pattern = "abba", str = "dog dog dog dog"
- Output: false
*******************************************************************************/

var wordPattern = function(pattern, str) {
    let words = {};
    let patterns = {};

    str = str.split(' ');

    if (pattern.length !== str.length) return false;

    for (let i = 0; i < str.length; i++) {
        if (!words[str[i]] && !patterns[pattern.charAt(i)]) {
            words[str[i]] = pattern.charAt(i);
            patterns[pattern.charAt(i)] = str[i];
        } else if (words[str[i]] !== pattern.charAt(i)) {
            return false;
        }
    }
    return true;
};
