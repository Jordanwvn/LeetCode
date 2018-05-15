/* MINESWEEPER *****************************************************************
You are given a 2D char matrix representing the game board. 'M' represents an
unrevealed mine, 'E' represents an unrevealed empty square, 'B' represents a
revealed blank square that has no adjacent (above, below, left, right, and all
4 diagonals) mines, digit ('1' to '8') represents how many mines are adjacent
to this revealed square, and finally 'X' represents a revealed mine.

Now given the next click position (row and column indices) among all the
unrevealed squares ('M' or 'E'), return the board after revealing this position
according to the following rules:

If a mine ('M') is revealed, then the game is over - change it to 'X'.
If an empty square ('E') with no adjacent mines is revealed, then change it to
revealed blank ('B') and all of its adjacent unrevealed squares should be
revealed recursively.
If an empty square ('E') with at least one adjacent mine is revealed, then
change it to a digit ('1' to '8') representing the number of adjacent mines.
Return the board when no more squares will be revealed.

Example 1:
- Input:

[['E', 'E', 'E', 'E', 'E'],
 ['E', 'E', 'M', 'E', 'E'],
 ['E', 'E', 'E', 'E', 'E'],
 ['E', 'E', 'E', 'E', 'E']]

Click : [3,0]

- Output:

[['B', '1', 'E', '1', 'B'],
 ['B', '1', 'M', '1', 'B'],
 ['B', '1', '1', '1', 'B'],
 ['B', 'B', 'B', 'B', 'B']]

Example 2:
- Input:

[['B', '1', 'E', '1', 'B'],
 ['B', '1', 'M', '1', 'B'],
 ['B', '1', '1', '1', 'B'],
 ['B', 'B', 'B', 'B', 'B']]

Click : [1,2]

- Output:

[['B', '1', 'E', '1', 'B'],
 ['B', '1', 'X', '1', 'B'],
 ['B', '1', '1', '1', 'B'],
 ['B', 'B', 'B', 'B', 'B']]
*******************************************************************************/

var updateBoard = function(board, click) {

    let traversed = {};
    let queue = [];

    traversed[`${click[0]}, ${click[1]}`] = true;

    var squareExists = (x, y) => board[x] !== undefined && board[x][y] !== undefined;

    var checkForMine = (x, y) => (squareExists(x, y) && board[x][y] === 'M') ? 1 : 0;

    var eachDirection = function (x, y, cb) {
        cb (x    , y    );
        cb (x - 1, y - 1);
        cb (x - 1, y    );
        cb (x - 1, y + 1);
        cb (x    , y + 1);
        cb (x + 1, y + 1);
        cb (x + 1, y    );
        cb (x + 1, y - 1);
        cb (x    , y - 1);
    }

    var handleDirection = function (x, y) {
        if (squareExists(x, y)) {
            if (!traversed[`${x}, ${y}`]) {
                traversed[`${x}, ${y}`] = true;
                queue.push([x, y]);
            }
        }
    }

    var traverseBoard = function (x, y) {
        let neighborMines = 0;

        eachDirection(x, y, (dirA, dirB) => {
            neighborMines += checkForMine (dirA, dirB);
        });

        if (!neighborMines) {
            eachDirection(x, y, (dirA, dirB) => {handleDirection(dirA, dirB)})
        }

        if (board[x][y] !== 'M') {
            board[x][y] = neighborMines ? `${neighborMines}` : 'B';
        }

        if (queue[0]) {
            let newLocation = queue.shift();
            traverseBoard(newLocation[0], newLocation[1]);
        }
    }

    traverseBoard(click[0], click[1]);

    if (board[click[0]][click[1]] === 'M') board[click[0]][click[1]] = 'X';

    return board;
};
