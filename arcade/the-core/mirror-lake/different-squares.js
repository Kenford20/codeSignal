// Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.

// Example

// matrix = [[1, 2, 1],
//           [2, 2, 2],
//           [2, 2, 2],
//           [1, 2, 3],
//           [2, 2, 1]]
// the output should be
// differentSquares(matrix) = 6.

function differentSquares(matrix) {
    let matrices = [];
    
    for(let i = 0; i < matrix.length - 1; i++){
        let grid = '';
        for(let j = 0; j < matrix[0].length - 1; j++){
            grid = matrix[i][j].toString() + matrix[i][j+1] + matrix[i+1][j] + matrix[i+1][j+1];
            
            // push unique 2x2 grids by comparing the concatenation of the numbers as strings
            if(!matrices.includes(grid)) 
               matrices.push(grid);
        }
    }
    return matrices.length;
}