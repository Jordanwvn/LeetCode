/* TOEPLITZ MATRIX *************************************************************
A matrix is Toeplitz if every diagonal from top-left to bottom-right has the
same element.

Now given an M x N matrix, return True if and only if the matrix is Toeplitz.

Example 1:

- Input: matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
- Output: True
Explanation:
1234
5123
9512

In the above grid, the diagonals are "[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]",
"[3, 3]", "[4]", and in each diagonal all elements are the same, so the answer
is True.

Example 2:

- Input: matrix = [[1,2],[2,2]]
- Output: False
Explanation:
The diagonal "[1, 2]" has different elements.
*******************************************************************************/

var isToeplitzMatrix = function(matrix) {
    let toeplitz = true;

    var validDiagonal = function(x, y, expected) {
        while (matrix[x] !== undefined && matrix[x][y] !== undefined) {
            if (matrix[x][y] !== expected) return false;
            x++;
            y++;
        }
        return true;
    }

    for (let x = 0; x < matrix.length; x++) {
        if (!validDiagonal(x, 0, matrix[x][0])) {
            toeplitz = false;
            break;
        }
    }

    for (let y = 0; y < matrix[0].length; y++) {
        if (!validDiagonal(0, y, matrix[0][y])) {
            toeplitz = false;
            break;
        }
    }

    return toeplitz;
};
