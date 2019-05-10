// Given a sequence determine if it's an arithmetic progression or not.
// A sequence is called an arithmetic progression if its elements are evenly spaced, i.e. the difference between any two consecutive elements is the same.
// Example

// For sequence = [1, 4, 7], the output should be
// isArithmeticProgression(sequence) = true;
// For sequence = [2, 4, 7], the output should be
// isArithmeticProgression(sequence) = false.

function isArithmeticProgression(sequence) {
    let space = sequence[sequence.length-1] - sequence[sequence.length-2];
    
    for(let i = 0; i < sequence.length - 2; i++) {
        if(sequence[i+1] - sequence[i] !== space) {
            return false;
        }
    }
    return true;
}
