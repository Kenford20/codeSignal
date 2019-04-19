// Given a certain array, find out if it's a permutation of numbers from 1 to a given integer.

// Example

// For n = 4 and inputArray = [1, 3, 2, 4], the output should be
// isPermutation(n, inputArray) = true;
// For n = 3 and inputArray = [2, 3, 2], the output should be
// isPermutation(n, inputArray) = false.

function isPermutation(n, inputArray) {
    for(let i = 1; i <= n; i++) {
        if(inputArray.indexOf(i) < 0)
            return false;
    }
    return true;
}
