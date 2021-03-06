// Given array of integers lengths, create an array of arrays output such that output[i] consists of lengths[i] elements and output[i][j] = j.

// Example

// For lengths = [1, 2, 0, 4], the output should be

// create2DArray(lengths) = [[0], 
//                           [0, 1], 
//                           [], 
//                           [0, 1, 2, 3]]

function create2DArray(lengths) {
    let arrayOfArrays = [];
    let innerArray = [];
    
    for(let i = 0; i < lengths.length; i++) {
        innerArray = [];
        for(let j = 0; j < lengths[i]; j++) {
            innerArray.push(j);
        }
        arrayOfArrays.push(innerArray);
    }
    return arrayOfArrays;
}
