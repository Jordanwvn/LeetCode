/* VALID ANAGRAM ***************************************************************
Given two strings s and t , write a function to determine if t is an anagram of
s.

Example 1:
- Input: s = "anagram", t = "nagaram"
- Output: true

Example 2:
- Input: s = "rat", t = "car"
- Output: false
*******************************************************************************/

var isAnagram = (s, t) => `${[...s].sort()}` === `${[...t].sort()}`;
