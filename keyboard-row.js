/* KEYBOARD ROW ****************************************************************
Given a List of words, return the words that can be typed using letters of
alphabet on only one row's of American keyboard.

Example 1:

- Input: ["Hello", "Alaska", "Dad", "Peace"]
- Output: ["Alaska", "Dad"]
*******************************************************************************/

var findWords = function(words) {
    let keyboard = [
        {q: 1, w: 1, e: 1, r: 1, t: 1, y: 1, u: 1, i: 1, o: 1, p: 1},
        {a: 1, s: 1, d: 1, f: 1, g: 1, h: 1, j: 1, j: 1, k: 1, l: 1},
        {z: 1, x: 1, c: 1, v: 1, b: 1, n: 1, m: 1}
    ];

    let row = 0;
    let result = [];

    for (let word of words) {
        let first = word.charAt(0).toLowerCase();

        switch(true) {

        case !!keyboard[0][first]:
            row = 0;
            break;

        case !!keyboard[1][first]:
            row = 1;
            break;

        case !!keyboard[2][first]:
            row = 2;
            break;
        }

        let valid = true;

        for (let letter of word) {
            let lower = letter.toLowerCase();
            if (!keyboard[row][lower]) valid = false;
        }
        if (valid) result.push(word);
    }
    return result;
};
