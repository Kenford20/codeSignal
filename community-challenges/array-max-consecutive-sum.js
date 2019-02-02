// Given array of integers, find the maximal possible sum of some of its k consecutive elements.

// Example

// For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be
// arrayMaxConsecutiveSum(inputArray, k) = 8.
// All possible sums of 2 consecutive elements are:

// 2 + 3 = 5;
// 3 + 5 = 8;
// 5 + 1 = 6;
// 1 + 6 = 7.
// Thus, the answer is 8.

// function arrayMaxConsecutiveSum(inputArray, k) {
//     let consecutiveSum = 0;
//     let consecutiveSums = [];
    
//     for(let i = 0; i <= inputArray.length - k; i++) {
//         for(let j = i; j < i + k; j++) {
//             consecutiveSum += inputArray[j];
//         }
//         consecutiveSums.push(consecutiveSum);
//         consecutiveSum = 0;
//     }
//     return Math.max(...consecutiveSums);
// }

// solution on top failed execution time limit, refactored below
function arrayMaxConsecutiveSum(inputArray, k) {
    let consecutiveSum = 0;
    let consecutiveSums = [];
    
    // push initial consecutive sum up to k
    for(let i = 0; i < k; i++) {
        consecutiveSum += inputArray[i];
    }
    consecutiveSums.push(consecutiveSum);
    
    // all following sums from the initial are just the current one minus the head element and adding the tail element, where k represents the length 
    // all elements in the middle are already summed previously, so no need to reiterate.
    for(let j = k; j < inputArray.length; j++) {
        consecutiveSum -= inputArray[j - k];
        consecutiveSum += inputArray[j];
        consecutiveSums.push(consecutiveSum);
    }
    return Math.max(...consecutiveSums);
}
