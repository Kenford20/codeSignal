// Given an array of integers, find the product of its elements.

// Example

// For inputArray = [1, 3, 2, 10], the output should be
// arrayElementsProduct(inputArray) = 60.

function arrayElementsProduct(inputArray) {
    return inputArray.reduce((a, b) => a * b);
}
