/* ADD DIGITS ******************************************************************

*******************************************************************************/

var addDigits = num =>
    num < 10
        ? num
        : addDigits([...`${num}`].reduce((acc, cur) => ~~acc + ~~cur) | 0);