// Given array of integers, check if it represents either a strictly increasing or a strictly decreasing sequence.

// Example

// For sequence = [1, 4, 5, 7, 9], the output should be
// isMonotonous(sequence) = true;
// For sequence = [0], the output should be
// isMonotonous(sequence) = true;
// For sequence = [3, 3], the output should be
// isMonotonous(sequence) = false.

function isMonotonous(sequence) {
    if(sequence.length === 1) {
        return true;
    } else if(sequence[1] === sequence[0]) {
        return false;
    }
    let isCurrentlyIncreasing = sequence[1] > sequence[0] ? true : false;

    for(let i = 1; i < sequence.length; i++) {
        if(isCurrentlyIncreasing && sequence[i+1] <= sequence[i]) {
            return false;
        } 
        else if(!isCurrentlyIncreasing && sequence[i+1] >= sequence[i]) {
            return false;
        }
    }
    return true;
}
