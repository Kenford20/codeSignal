// Two two-dimensional arrays are isomorphic if they have the same number of rows and each pair of respective rows contains the same number of elements.

// Given two two-dimensional arrays, check if they are isomorphic.

// Example

// array1 = [[1, 1, 1],
//           [0, 0]]

// array2 = [[2, 1, 1],
//           [2, 1]]

// the output should be
// areIsomorphic(array1, array2) = true;

function areIsomorphic(array1, array2) {
    let array1Lengths = array1.map(arr => arr.length);
    let array2Lengths = array2.map(arr => arr.length);
    
    if(array1Lengths.length !== array2Lengths.length) return false;
    
    for(let i = 0; i < array1.length; i++){
        if(array1Lengths[i] !== array2Lengths[i])
            return false;
    }
    return true;
}

