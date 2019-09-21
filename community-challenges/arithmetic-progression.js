// Given the first two elements of an arithmetic progression, find its nth element.

// Example

// For element1 = 3, element2 = 2, and n = 4, the output should be
// arithmeticProgression(element1, element2, n) = 0.

// The difference between two consecutive elements of the arithmetic progression is element2 - element1 = -1. Thus, the third element of the progression is 1, and the fourth one is 0, which is the answer.

function arithmeticProgression(element1, element2, n) {
    let progression = element2 - element1;
    
    return element1 + progression * (n - 1);
}
