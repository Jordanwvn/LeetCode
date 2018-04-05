/* ROMAN TO INTEGER ************************************************************
Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999.
*******************************************************************************/

var romanToInt = function(s) {
    let conversion = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let num = 0;

    for (let roman = [...s]; roman[0]; roman.shift()) {
        conversion[`${roman[0]}${roman[1]}`]
            ? (
                num += conversion[`${roman[0]}${roman[1]}`],
                roman.shift()
            ) : num += conversion[roman[0]];
    }
    return num;
};
