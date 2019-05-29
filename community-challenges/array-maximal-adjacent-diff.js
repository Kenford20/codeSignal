// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

// Example

// For inputArray = [2, 4, 1, 0], the output should be
// arrayMaximalAdjacentDifference(inputArray) = 3.

function arrayMaximalAdjacentDifference(inputArray) {
    let maxDiff = Math.abs(inputArray[0] - inputArray[1]);
    
    for(let i = 1; i <= inputArray.length - 2; i++) {
        let currDiff = Math.abs(inputArray[i] - inputArray[i+1]);
        if(currDiff > maxDiff) {
            maxDiff = currDiff;
        }
    }
    return maxDiff;
}
