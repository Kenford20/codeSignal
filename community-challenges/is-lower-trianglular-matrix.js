// Check if the given matrix is lower triangular.
// In linear algebra, a square matrix is called lower triangular if all its entries above the main diagonal are zero.

// Example

// For
// matrix = [[1, 0, 0], 
//           [4, 0, 0], 
//           [0, 3, 3]]
// the output should be isLowerTriangularMatrix(matrix) = true;

// For
// matrix = [[1, 0, 1], 
//           [0, 5, 0], 
//           [2, 0, 3]]
// the output should be isLowerTriangularMatrix(matrix) = false.

function isLowerTriangularMatrix(matrix) {
    for(let row = 0; row < matrix.length; row++) {
        for(let col = row + 1; col < matrix[0].length; col++) {
            if(matrix[row][col] !== 0) {
                return false;
            }
        }
    }
    return true;
}
