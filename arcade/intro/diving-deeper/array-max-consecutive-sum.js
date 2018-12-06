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

// initial solution

// function arrayMaxConsecutiveSum(inputArray, k) {
//     let maxSum = 0;
//     let currentSum = 0;
    
//     for(let i = 0; i <= inputArray.length - k; i++){
//         for(let j = i; j < i + k; j++){
//             currentSum += inputArray[j];   
//         }
//         if(currentSum > maxSum)
//             maxSum = currentSum;
//         currentSum = 0;
//     }
//     return maxSum;
// }

// better execution time
function arrayMaxConsecutiveSum(inputArray, k) {
    let maxSum = 0;
    let currentSum = 0;
    
    // get initial sum
    for(let j = 0; j < k; j++){
        currentSum += inputArray[j];
    }
    
    // new sum will be current sum minus first element plus next element for each kth sequence
    // handles summing repeated numbers for large values of k
    for(let i = 0; i <= inputArray.length - k; i++){ 
        if(currentSum > maxSum)
            maxSum = currentSum;
        
        currentSum -= inputArray[i];
        currentSum += inputArray[i + k];  
    }
    return maxSum;
}

