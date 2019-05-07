// Given a rectangular matrix of integers and integers n and m, we are looking for the submatrix of size n × m that has the maximal sum among all submatrices of the given size.

// Example

// For

// matrix = [[1, 12, 11, 10], 
//           [4,  3,  2,  9], 
//           [5,  6,  7,  8]]
// n = 2, and
// m = 1, the output should be
// maxSubmatrixSum(matrix, n, m) = 19.

function maxSubmatrixSum(matrix, n, m) {
    let subMatrixSums = [];

    for(let i = 0; i <= matrix.length - n; i++) {
        let currMatrixSum = 0;
        for(let j = 0; j <= matrix[0].length - m; j++) {   
            
            // submatrices
            for(let x = i; x < (i + n); x++) {
                for(let y = j; y < (j + m); y++) {
                    currMatrixSum += matrix[x][y];
                }
            }
            subMatrixSums.push(currMatrixSum);
            currMatrixSum = 0;
        }
    }
    return Math.max(...subMatrixSums);
}

// refactored
function maxSubmatrixSum(matrix, n, m) {
    let currMaxSum = Number.NEGATIVE_INFINITY;

    for(let i = 0; i <= matrix.length - n; i++) {
        for(let j = 0; j <= matrix[0].length - m; j++) {   
            let currMatrixSum = 0;
            // submatrices
            for(let x = i; x < (i + n); x++) {
                for(let y = j; y < (j + m); y++) {
                    currMatrixSum += matrix[x][y];
                }
            }
            if(currMatrixSum > currMaxSum) {
                currMaxSum = currMatrixSum;
            }
        }
    }
    return currMaxSum;
}


