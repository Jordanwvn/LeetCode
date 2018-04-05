/* NUMBER OF LINES TO WRITE STRING *********************************************
We are to write the letters of a given string S, from left to right into lines.
Each line has maximum width 100 units, and if writing a letter would cause the
width of the line to exceed 100 units, it is written on the next line. We are
given an array widths, an array where widths[0] is the width of 'a', widths[1]
is the width of 'b', ..., and widths[25] is the width of 'z'.

Now answer two questions: how many lines have at least one character from S,
and what is the width used by the last such line? Return your answer as an
integer list of length 2.



Example:
- Input: widths =
[10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]
S = "abcdefghijklmnopqrstuvwxyz"
- Output: [3, 60]

Explanation:
All letters have the same length of 10. To write all 26 letters,
we need two full lines and one line with 60 units.

Example:
- Input: widths =
[4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]
S = "bbbcccdddaaa"
- Output: [2, 4]

Explanation:
All letters except 'a' have the same length of 10, and
"bbbcccdddaa" will cover 9 * 10 + 2 * 4 = 98 units.
For the last 'a', it is written on the second line because
there is only 2 units left in the first line.
So the answer is 2 lines, plus 4 units in the second line.
*******************************************************************************/

var numberOfLines = function(widths, S) {
    let alphabet = {
        a: widths[0],
        b: widths[1],
        c: widths[2],
        d: widths[3],
        e: widths[4],
        f: widths[5],
        g: widths[6],
        h: widths[7],
        i: widths[8],
        j: widths[9],
        k: widths[10],
        l: widths[11],
        m: widths[12],
        n: widths[13],
        o: widths[14],
        p: widths[15],
        q: widths[16],
        r: widths[17],
        s: widths[18],
        t: widths[19],
        u: widths[20],
        v: widths[21],
        w: widths[22],
        x: widths[23],
        y: widths[24],
        z: widths[25]
    }

    let current = 0;
    let rows = 1;

    for (let character of S) {
        if (current + alphabet[character] > 100) {
            rows++;
            current = 0;
        }
        current += alphabet[character];
    }

    return [rows, current]
};
