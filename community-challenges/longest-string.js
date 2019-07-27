// Find the longest string from the given array.

// Example

// For inputArray = ["a", "ab", "c"], the output should be
// longestString(inputArray) = "ab".

function longestString(inputArray) {
    const lengths = inputArray.map(str => str.length);
    return inputArray[lengths.indexOf(Math.max(...lengths))];
}
