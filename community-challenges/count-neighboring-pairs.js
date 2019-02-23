// Given a string, find the number of pairs of equal characters in neighbouring positions.

// Example

// For inputString = "abacaba", the output should be
// countNeighbouringPairs(inputString) = 0;
// For inputString = "aaa", the output should be
// countNeighbouringPairs(inputString) = 2.

function countNeighbouringPairs(inputString) {
    let pairs = 0;
    
    for(let i = 0; i < inputString.length; i++) {
        if(inputString[i+1] === inputString[i])
            pairs++;
    }
    return pairs;
}
