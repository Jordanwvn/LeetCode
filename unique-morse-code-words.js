/* UNIQUE MORSE CODE WORDS *****************************************************
Given a list of words, each word can be written as a concatenation of the Morse
code of each letter. For example, "cab" can be written as "-.-.-....-", (which
is the concatenation "-.-." + "-..." + ".-"). We'll call such a concatenation,
the transformation of a word.

Return the number of different transformations among all words we have.

Example:
- Input: words = ["gin", "zen", "gig", "msg"]
- Output: 2

Explanation:
The transformation of each word is:
"gin" -> "--...-."
"zen" -> "--...-."
"gig" -> "--...--."
"msg" -> "--...--."

There are 2 different transformations, "--...-." and "--...--.".
*******************************************************************************/

var uniqueMorseRepresentations = function(words) {
    let code = {
        a: ".-",
        b: "-...",
        c: "-.-.",
        d: "-..",
        e: ".",
        f: "..-.",
        g: "--.",
        h: "....",
        i: "..",
        j: ".---",
        k: "-.-",
        l: ".-..",
        m: "--",
        n: "-.",
        o: "---",
        p: ".--.",
        q: "--.-",
        r: ".-.",
        s: "...",
        t: "-",
        u: "..-",
        v: "...-",
        w: ".--",
        x: "-..-",
        y: "-.--",
        z: "--.."
    };

    let unique = new Map();

    for (let word of words) {
        let morse = '';
        for (let character of word) morse += code[character];
        unique.set(morse, word);
    }
    return unique.size;
};
