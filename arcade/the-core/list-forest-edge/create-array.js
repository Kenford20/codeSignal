// Given an integer size, return array of length size filled with 1s.

// Example

// For size = 4, the output should be
// createArray(size) = [1, 1, 1, 1].

function createArray(size) {
    let arrayOf1s = [];
    for(let i = 0; i < size; i++){
        arrayOf1s.push(1);
    }
    return arrayOf1s;
}
