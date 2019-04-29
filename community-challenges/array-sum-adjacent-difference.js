// Given array of integers, find the sum of absolute differences of consecutive numbers.

// Example

// For inputArray = [4, 7, 1, 2], the output should be
// arraySumAdjacentDifference(inputArray) = 10.

// |4 - 7| = 3;
// |7 - 1| = 6;
// |1 - 2| = 1
// So, the answer is 3 + 6 + 1 = 10.

function arraySumAdjacentDifference(inputArray) {
    let absDiffs = [];
    
    for(let i = 0; i <= inputArray.length - 2; i++) {
        absDiffs.push(Math.abs(inputArray[i] - inputArray[i+1]));
    }
    return absDiffs.reduce((a,b) => a+b);
}
