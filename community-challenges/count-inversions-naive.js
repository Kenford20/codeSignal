// Given an array of integers, find the number of inversions it contains.

// Example

// For inputArray = [1, 3, 2, 0], the output should be
// countInversionsNaive(inputArray) = 4.

function countInversionsNaive(inputArray) {
    let inversions = 0;
    
    for(let i = 0; i < inputArray.length; i++) {
        for(let j = i + 1; j < inputArray.length; j++) {
            if(inputArray[i] > inputArray[j]) {
                inversions++;
            }
        }
    }
    return inversions;
}
