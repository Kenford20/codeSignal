// Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with digits so that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid contains all of the digits from 1 to 9.

// This algorithm should check if the given grid of numbers represents a correct solution to Sudoku.

// Example

// For the first example below, the output should be true. For the other grid, the output should be false: each of the nine 3 × 3 sub-grids should contain all of the digits from 1 to 9.

function sudoku(grid) {
    let firstGrid3x3 = [];
    let secondGrid3x3 = [];
    let thirdGrid3x3 = [];
    
    let col1 = [], col2 = [], col3 = [], col4 = [], col5 = [], col6 = [], col7 = [], col8 = [], col9 = [];
    
    // takes an array and filters out any repeated numbers (unique set) and returns a boolean (whether array is unique)
    function isUniqueArray(arr){
        return arr.filter((number, index, arr) => index === arr.indexOf(number)).length === 9;
    }

    for(let i = 0; i < 9; i++) {
        // check if each row is unique
        if(!isUniqueArray(grid[i]))
            return false;
        
        for(let j = 0; j < 9; j++){
            // create three 3x3 grids
            if(j < 3)
                firstGrid3x3.push(grid[i][j]);
            else if(j < 6)
                secondGrid3x3.push(grid[i][j]);
            else
                thirdGrid3x3.push(grid[i][j]);
            
            // create 9 arrays representing each column of numbers
            col1.push(grid[i][0]);
            col2.push(grid[i][1]);
            col3.push(grid[i][2]);
            col4.push(grid[i][3]);
            col5.push(grid[i][4]);
            col6.push(grid[i][5]);
            col7.push(grid[i][6]);
            col8.push(grid[i][7]);
            col9.push(grid[i][8]);
        }
        // 3x3 grid break points
        if(i == 2 || i == 5 || i === 8){
            // check if any 3x3 grids are unique
            if(!isUniqueArray(firstGrid3x3) || !isUniqueArray(secondGrid3x3) || !isUniqueArray(thirdGrid3x3))
                return false;
            // reset grids 
            else{
                firstGrid3x3 = [];
                secondGrid3x3 = [];
                thirdGrid3x3 = [];
            }
        }
    }
    // check if each column is unique
    if(!isUniqueArray(col1) || !isUniqueArray(col2) || !isUniqueArray(col3) || !isUniqueArray(col4) || !isUniqueArray(col5) || !isUniqueArray(col6) || !isUniqueArray(col7) || !isUniqueArray(col8) || !isUniqueArray(col9))
       return false;
    
    return true;
}