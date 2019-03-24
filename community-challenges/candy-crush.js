// Have you ever played Candy Crush Saga? If so, this task will feel familiar! Determine whether the given gameboard contains a set of 3 or more consecutive candies of the same color in either a row or a column.

// Example

// For

// gameboard = [["R","B","G"], 
//              ["R","Y","B"], 
//              ["R","O","Y"]]
// the output should be
// candyCrush1(gameboard) = true.

// There is a column with three candies of color R (red).

function candyCrush1(gameboard) {    
    for(let i = 0; i < gameboard.length; i++) {
        for(let j = 0; j < gameboard[0].length; j++) {
            if(j < gameboard[0].length - 2) {
                if(gameboard[i][j] === gameboard[i][j+1] && gameboard[i][j] === gameboard[i][j+2])
                    return true;
            }
            
            if(i < gameboard.length - 2) {
                if(gameboard[i][j] === gameboard[i+1][j] && gameboard[i][j] === gameboard[i+2][j])
                    return true;
            }
        }
    }
    return false;
}
