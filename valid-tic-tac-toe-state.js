/* VALID TIC-TAC-TOE STATE *****************************************************
A Tic-Tac-Toe board is given as a string array board. Return True if and only
if it is possible to reach this board position during the course of a valid
tic-tac-toe game.

The board is a 3 x 3 array, and consists of characters " ", "X", and "O".  The
" " character represents an empty square.

Here are the rules of Tic-Tac-Toe:

Players take turns placing characters into empty squares (" ").
The first player always places "X" characters, while the second player always
places "O" characters.
"X" and "O" characters are always placed into empty squares, never filled ones.
The game ends when there are 3 of the same (non-empty) character filling any
row, column, or diagonal.
The game also ends if all squares are non-empty.
No more moves can be played if the game is over.

Example 1:
- Input: board = ["O  ", "   ", "   "]
- Output: false

Explanation: The first player always plays "X".

Example 2:
- Input: board = ["XOX", " X ", "   "]
- Output: false

Explanation: Players take turns making moves.

Example 3:
- Input: board = ["XXX", "   ", "OOO"]
- Output: false

Example 4:
- Input: board = ["XOX", "O O", "XOX"]
- Output: true
*******************************************************************************/

var validTicTacToe = function(board) {
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    var win = function(board, sign) {
        for (let i = 0; i < 8; i++) {
            if (
                board[wins[i][0]] === sign &&
                board[wins[i][1]] === sign &&
                board[wins[i][2]] === sign
            ) return true;
        }
        return false;
    }

    let xNum = 0;
    let oNum = 0;
    let boardArr = board.join('').split('');

    for (let i = 0; i < 9; i++) {
        if (boardArr[i] === 'X') xNum++;
        if (boardArr[i] === 'O') oNum++;
    }

    if (xNum === oNum || xNum === oNum + 1) {
        if (win(boardArr, 'O')) {
            return win(boardArr, 'X') ? false : !!(oNum === xNum);
        }
        if (win(boardArr, 'X') && xNum === oNum) return false;
        return true;
    }
    return false;
};
