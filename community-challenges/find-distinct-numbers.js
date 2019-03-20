// Given an array a, your task is to find the distinct numbers in it and return them in the order that they appear in a. The input array might contain duplicate numbers, while the resulting array should contain only one instance of each number.

// Example

// For a = [8, 4, 8, 4, 20], the output should be
// findDistinctNumbers(a) = [8, 4, 20].

function findDistinctNumbers(a) {   
    return a.filter((num, i) => i === a.indexOf(num));
}
