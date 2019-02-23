// Two two-dimensional arrays are isomorphic if they have the same number of rows and each pair of respective rows contains the same number of elements.

// Given two two-dimensional arrays, check if they are isomorphic.

// Example

// array1 = [[1, 1, 1],
//           [0, 0]]
// array2 = [[2, 1, 1],
//           [2, 1]]
// the output should be areIsomorphic(array1, array2) = true;

// array1 = [[2],
//           []]
// array2 = [[2]]
// the output should be areIsomorphic(array1, array2) = false.

function areIsomorphic(array1, array2) {
    let lengthsOfArr1 = array1.map(arr => arr.length);
    let lengthsOfArr2 = array2.map(arr => arr.length);
    
    if(lengthsOfArr1.length !== lengthsOfArr2.length)
        return false;
    
    // dimensions of arrays match, check the lengths of rows/cols
    for(let i = 0; i < lengthsOfArr1.length; i++) {
        if(lengthsOfArr1[i] !== lengthsOfArr2[i])
            return false;
    }
    return true;
}
