/* 1-BIT AND 2-BIT CHARACTERS **************************************************

*******************************************************************************/

var isOneBitCharacter = function(bits) {
    let endingZero = false;
    let oneBit = true;

    bits.forEach(val => {
        endingZero = oneBit ? !val : false;
        oneBit = oneBit ? !val : true;
    });
    return endingZero;
};
