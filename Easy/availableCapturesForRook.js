/*

https://leetcode.com/problems/available-captures-for-rook

On an 8 x 8 chessboard, there is one white rook.
There also may be empty squares, white bishops, and black pawns.
These are given as characters 'R', '.', 'B', and 'p' respectively.
Uppercase characters represent white pieces, and lowercase characters represent black pieces.

The rook moves as in the rules of Chess:
it chooses one of four cardinal directions (north, east, west, and south),
then moves in that direction until it chooses to stop, reaches the edge of the board,
or captures an opposite colored pawn by moving to the same square it occupies.
Also, rooks cannot move into the same square as other friendly bishops.

Return the number of pawns the rook can capture in one move.

Example 1:

Input:
[[".",".",".",".",".",".",".","."],
[".",".",".","p",".",".",".","."],
[".",".",".","R",".",".",".","p"],
[".",".",".",".",".",".",".","."],
[".",".",".",".",".",".",".","."],
[".",".",".","p",".",".",".","."],
[".",".",".",".",".",".",".","."],
[".",".",".",".",".",".",".","."]]

Output: 3
Explanation:
In this example the rook is able to capture all the pawns.

*/

const numRookCaptures = (board) => {
  // Find Rook Position
  let rookX = -1;
  let rookY = -1;
  for (let i = 0; i < board.length; i += 1) {
    if (rookX === -1) {
      rookX = board[i].indexOf('R');
      rookY = i;
    }
  }
  // Test Each Position
  let pawnCount = 0;
  let yTest = rookY;
  while (board[yTest][rookX] !== 'p' && board[yTest][rookX] !== 'B' && yTest > 0) {
    yTest -= 1;
    if (board[yTest][rookX] === 'p') pawnCount += 1;
  }
  yTest = rookY;
  while (board[yTest][rookX] !== 'p' && board[yTest][rookX] !== 'B' && yTest < board.length - 1) {
    yTest += 1;
    if (board[yTest][rookX] === 'p') pawnCount += 1;
  }
  let xTest = rookX;
  while (board[rookY][xTest] !== 'p' && board[rookY][xTest] !== 'B' && xTest > 0) {
    xTest -= 1;
    if (board[rookY][xTest] === 'p') pawnCount += 1;
  }
  xTest = rookX;
  while (board[rookY][xTest] !== 'p' && board[rookY][xTest] !== 'B' && xTest < board.length - 1) {
    xTest += 1;
    if (board[rookY][xTest] === 'p') pawnCount += 1;
  }
  return pawnCount;
};
