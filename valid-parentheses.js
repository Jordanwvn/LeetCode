/* VALID PARENTHESES ***********************************************************
Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid
but "(]" and "([)]" are not.
*******************************************************************************/

var isValid = function(s) {
    let stack = [];

    for (let character of s) {
        switch (character) {

        case '(':
        case '[':
        case '{':
            stack.push(character);
            break;
        case ')':
            if (stack.pop() !== '(') return false;
            break;
        case ']':
            if (stack.pop() !== '[') return false;
            break;
        case '}':
            if (stack.pop() !== '{') return false;
            break;
        }
    }
    return stack[0] ? false : true;
};
