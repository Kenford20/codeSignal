// The longest diagonals of a square matrix are defined as follows:

// the first longest diagonal goes from the top left corner to the bottom right one;
// the second longest diagonal goes from the top right corner to the bottom left one.
// Given a square matrix, your task is to reverse the order of elements on both of its longest diagonals.

// Example

// For

// matrix = [[1, 2, 3],
//           [4, 5, 6],
//           [7, 8, 9]]
// the output should be

// reverseOnDiagonals(matrix) = [[9, 2, 7],
                    
function reverseOnDiagonals(matrix) {
    let tailIndex = matrix.length - 1;
    
    // swap pairs of elements from opposing corners 
    for(let i = 0; i < matrix.length / 2; i++){
        // first diagonal
        let temp = matrix[i][i];
        matrix[i][i] = matrix[tailIndex][tailIndex]
        matrix[tailIndex][tailIndex] = temp;
        
        // second diagonal
        let temp2 = matrix[i][tailIndex];
        matrix[i][tailIndex] = matrix[tailIndex][i];
        matrix[tailIndex][i] = temp2;
                                      
        tailIndex--;
    }
    return matrix;
}

//[0][0] s [3][3]
//[1][1] s [2][2]

//[0][3] s [3][0]
//[1][2] s [2][1]