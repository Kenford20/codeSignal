// Given a string inputString and an integer distance, find the number of pairs of equal characters in the inputString delimited by exactly distance characters.

// Example

// For inputString = "abacaba" and distance = 1, the output should be
// countDistantPairs(inputString, distance) = 3.
// Let's list them as a pairs of indices (0-based): [0, 2]: "a" and "a", [2, 4]: "a" and "a" and [4, 6]: "a" and "a".
// For inputString = "abacaba" and distance = 2, the output should be
// countDistantPairs(inputString, distance) = 0.
// There are no equal characters with difference between their indices equals to 2.
// For inputString = "abacaba" and distance = 3, the output should be
// countDistantPairs(inputString, distance) = 3.
// They are: [0, 4]: "a" and "a", [1, 5]: "b" and "b" and [2, 6]: "a" and "a"

function countDistantPairs(inputString, distance) {
    let distantPairs = 0;
    
    for(let i = 0; i < inputString.length - distance; i++) {
        if(inputString[i] === inputString[i+distance+1])
            distantPairs++;
    }
    return distantPairs;
}
