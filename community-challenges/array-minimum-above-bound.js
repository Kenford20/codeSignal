// Given an array of integers inputArray and an integer bound, find the smallest array element strictly greater than bound.

// Example

// For inputArray = [1, 3, 5, 4, 2, 6] and bound = 3, the output should be
// arrayMinimumAboveBound(inputArray, bound) = 4.

function arrayMinimumAboveBound(inputArray, bound) {
    return Math.min(...inputArray.filter(num => num > bound));
}
