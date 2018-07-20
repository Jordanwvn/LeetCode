/* FIZZ BUZZ *******************************************************************
Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and
for the multiples of five output “Buzz”. For numbers which are multiples of
both three and five output “FizzBuzz”.

Example:

n = 15,

Return:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]
*******************************************************************************/

public class Solution {
    public IList<string> FizzBuzz(int n) {
        string[] result = new string[n];

        for (int i = 0, j; i < n; i++) {
            j = i + 1;

            if (j % 3 == 0) {
                if (j % 5 == 0) {
                    result[i] = "FizzBuzz";
                } else {
                    result[i] = "Fizz";
                }
            } else {
                if (j % 5 == 0) {
                    result[i] = "Buzz";
                } else {
                    result[i] = j.ToString();
                }
            }
        }
        return result;
    }
}
