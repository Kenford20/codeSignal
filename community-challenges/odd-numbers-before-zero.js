// Given an array of integers, count the odd numbers before the first (i.e. leftmost) occurrence of zero.

// Example

// For sequence = [1, 2, 3, 0, 4, 5, 6, 0, 1], the output should be
// oddNumbersBeforeZero(sequence) = 2.

function oddNumbersBeforeZero(sequence) {
    return sequence.slice(0, sequence.indexOf(0)).filter(int => int % 2 === 1).length;
}
