// Given two cells on the standard chess board, determine whether they have the same color or not.

// Example

// For cell1 = "A1" and cell2 = "C3", the output should be
// chessBoardCellColor(cell1, cell2) = true.

// For cell1 = "A1" and cell2 = "H3", the output should be
// chessBoardCellColor(cell1, cell2) = false.

function chessBoardCellColor(cell1, cell2) {
    let letters = 'ABCDEFGH';
    
    let isCell1Odd = cell1[1] % 2 === 1 ? true : false; 
    let isCell2Odd = cell2[1] % 2 === 1 ? true : false; 
    
    // receives a cell letter and returns the color of the cell based on whether its pairing number is even or odd
    function cellColor(letter, isCellNumOdd){
        if(letters.indexOf(letter) % 2 === 0) { // aceg
            return isCellNumOdd ? 'dark' : 'light'
        } else { // bdfh
            return isCellNumOdd ? 'light' : 'dark';
        }
    }
    return cellColor(cell1[0], isCell1Odd) === cellColor(cell2[0], isCell2Odd);
}