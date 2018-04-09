/* DISTRIBUTE CANDIES **********************************************************
Given an integer array with even length, where different numbers in this array
represent different kinds of candies. Each number means one candy of the
corresponding kind. You need to distribute these candies equally in number to
brother and sister. Return the maximum number of kinds of candies the sister
could gain.

Example 1:
- Input: candies = [1,1,2,2,3,3]
- Output: 3

Explanation:
There are three different kinds of candies (1, 2 and 3), and two candies for
each kind.
Optimal distribution: The sister has candies [1,2,3] and the brother has
candies [1,2,3], too.
The sister has three different kinds of candies.

Example 2:
- Input: candies = [1,1,2,3]
- Output: 2

Explanation: For example, the sister has candies [2,3] and the brother has
candies [1,1].
The sister has two different kinds of candies, the brother has only one kind of
candies.
*******************************************************************************/

var distributeCandies = function(candies) {
    let unique = {};
    let total = 0;
    let different = 0;

    for (let candy of candies) {
        total++;
        if(!unique[candy]) different++;
        unique[candy] ? unique[candy]++ : unique[candy] = 1;
    }

    return different > (total / 2) ? Math.floor(total / 2) : different
};
