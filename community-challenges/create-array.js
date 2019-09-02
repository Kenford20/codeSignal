// Given an integer size, return array of length size filled with 1s.

// Example

// For size = 4, the output should be
// createArray(size) = [1, 1, 1, 1].

function createArray(size) {
    const ones = [];
    
    for(let i = 0; i < size; i++) {
        ones.push(1);
    }
    return ones;
}

function createArray(size) {
    return [...new Array(size)].map(f => 1)
}
