/* DETECT CAPITALS *************************************************************
Given a word, you need to judge whether the usage of capitals in it is right or
not.

We define the usage of capitals in a word to be right when one of the following
cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital if it has more than one letter,
like "Google".
Otherwise, we define that this word doesn't use capitals in a right way.

Example 1:
- Input: "USA"
- Output: True

Example 2:
- Input: "FlaG"
- Output: False
*******************************************************************************/

var detectCapitalUse = function(word) {
    if (word.charAt(0).toLowerCase() !== word.charAt(0)) {
        let rest = word.slice(1)
        if (rest.charAt(0).toLowerCase() !== rest.charAt(0)) {
            if (
                rest.includes('a') ||
                rest.includes('b') ||
                rest.includes('c') ||
                rest.includes('d') ||
                rest.includes('e') ||
                rest.includes('f') ||
                rest.includes('g') ||
                rest.includes('h') ||
                rest.includes('i') ||
                rest.includes('j') ||
                rest.includes('k') ||
                rest.includes('l') ||
                rest.includes('m') ||
                rest.includes('n') ||
                rest.includes('o') ||
                rest.includes('p') ||
                rest.includes('q') ||
                rest.includes('r') ||
                rest.includes('s') ||
                rest.includes('t') ||
                rest.includes('u') ||
                rest.includes('v') ||
                rest.includes('w') ||
                rest.includes('x') ||
                rest.includes('y') ||
                rest.includes('z')
            ) return false;
        } else {
            if (
                rest.includes('A') ||
                rest.includes('B') ||
                rest.includes('C') ||
                rest.includes('D') ||
                rest.includes('E') ||
                rest.includes('F') ||
                rest.includes('G') ||
                rest.includes('H') ||
                rest.includes('I') ||
                rest.includes('J') ||
                rest.includes('K') ||
                rest.includes('L') ||
                rest.includes('M') ||
                rest.includes('N') ||
                rest.includes('O') ||
                rest.includes('P') ||
                rest.includes('Q') ||
                rest.includes('R') ||
                rest.includes('S') ||
                rest.includes('T') ||
                rest.includes('U') ||
                rest.includes('V') ||
                rest.includes('W') ||
                rest.includes('X') ||
                rest.includes('Y') ||
                rest.includes('Z')
            ) return false;
        }
    } else {
        if (
            word.includes('A') ||
            word.includes('B') ||
            word.includes('C') ||
            word.includes('D') ||
            word.includes('E') ||
            word.includes('F') ||
            word.includes('G') ||
            word.includes('H') ||
            word.includes('I') ||
            word.includes('J') ||
            word.includes('K') ||
            word.includes('L') ||
            word.includes('M') ||
            word.includes('N') ||
            word.includes('O') ||
            word.includes('P') ||
            word.includes('Q') ||
            word.includes('R') ||
            word.includes('S') ||
            word.includes('T') ||
            word.includes('U') ||
            word.includes('V') ||
            word.includes('W') ||
            word.includes('X') ||
            word.includes('Y') ||
            word.includes('Z')
        ) return false;
    }
    return true;
};
