/* STUDENT ATTENDANCE RECORD I *************************************************
You are given a string representing an attendance record for a student. The
record only contains the following three characters:
'A' : Absent.
'L' : Late.
'P' : Present.
A student could be rewarded if his attendance record doesn't contain more than
one 'A' (absent) or more than two continuous 'L' (late).

You need to return whether the student could be rewarded according to his
attendance record.

Example 1:
- Input: "PPALLP"
- Output: True

Example 2:
- Input: "PPALLL"
- Output: False
*******************************************************************************/

var checkRecord = function(s) {
    if (s.includes('LLL')) return false;

    let aCount = 0;

    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === 'A') aCount++;
        if (aCount > 1) return false;
    }

    return true;
};
