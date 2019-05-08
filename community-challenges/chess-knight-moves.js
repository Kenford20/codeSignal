// Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.

// The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.

// Example

// For cell = "a1", the output should be
// chessKnightMoves(cell) = 2.

// For cell = "c2", the output should be
// chessKnightMoves(cell) = 6.

function chessKnightMoves(cell) {
    let boardLetters = [null,'a','b','c','d','e','f','g','h'];
    let boardNumbers = [null,1,2,3,4,5,6,7,8];
    let numKnightMoves = 0;
    let horizontal = boardLetters.indexOf(cell[0]);
    let vertical = boardNumbers.indexOf(parseInt(cell[1]));
    
    if(boardLetters[horizontal+2] && boardNumbers[vertical+1]) { numKnightMoves++ }
    if(boardLetters[horizontal+2] && boardNumbers[vertical-1]) { numKnightMoves++ }
    if(boardLetters[horizontal-2] && boardNumbers[vertical+1]) { numKnightMoves++ }
    if(boardLetters[horizontal-2] && boardNumbers[vertical-1]) { numKnightMoves++ }
    if(boardLetters[horizontal+1] && boardNumbers[vertical+2]) { numKnightMoves++ }
    if(boardLetters[horizontal-1] && boardNumbers[vertical+2]) { numKnightMoves++ }
    if(boardLetters[horizontal+1] && boardNumbers[vertical-2]) { numKnightMoves++ }
    if(boardLetters[horizontal-1] && boardNumbers[vertical-2]) { numKnightMoves++ }
    
    return numKnightMoves;
}