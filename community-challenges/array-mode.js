// Given array of integers, find its mode.

// Example

// For sequence = [1, 3, 3, 3, 1], the output should be
// arrayMode(sequence) = 3;
// For sequence = [1, 3, 2, 1], the output should be
// arrayMode(sequence) = 1.

function arrayMode(sequence) {
    let uniqueNumbers = sequence.filter((num, i) => sequence.indexOf(num) === i);
    let numOccurrences = [];
    
    for(let i = 0; i < uniqueNumbers.length; i++) {
        numOccurrences.push(sequence.filter(num => num === uniqueNumbers[i]).length);
    }
    return uniqueNumbers[numOccurrences.indexOf(Math.max(...numOccurrences))];
}
