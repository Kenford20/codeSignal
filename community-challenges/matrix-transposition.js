// Given a matrix, find its transpose.
// The transpose of an m × n matrix is the n × m matrix formed by turning rows into columns and vice versa.

// Example

// For

// matrix = [[1, 1, 3], 
//           [2, 1, 1]]
// the output should be

// matrixTransposition(matrix) = [[1, 2],
//                                [1, 1],
//                                [3, 1]]

function matrixTransposition(matrix) {
    const output = [];
    let row = [];
    
    for(let i = 0; i < matrix[0].length; i++) {
        row = [];
        for(let j = 0; j < matrix.length; j++) {
            row.push(matrix[j][i]);
        }
        output.push(row);
    }
    return output;
}
