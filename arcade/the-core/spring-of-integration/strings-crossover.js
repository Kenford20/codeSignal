// Define crossover operation over two equal-length strings A and B as follows:

// the result of that operation is a string of the same length as the input strings
// result[i] is either A[i] or B[i], chosen at random
// Given array of strings inputArray and a string result, find for how many pairs of strings from inputArray the result of the crossover operation over them may be equal to result.

// Note that (A, B) and (B, A) are the same pair. Also note that the pair cannot include the same element of the array twice (however, if there are two equal elements in the array, they can form a pair).

// Example

// For inputArray = ["abc", "aaa", "aba", "bab"] and result = "bbb", the output should be
// stringsCrossover(inputArray, result) = 2.

function stringsCrossover(inputArray, result) {
    let matched = true;
    let numMatchedPairs = 0;
    
    for(let i = 0; i < inputArray.length - 1; i++) {
        // get second string in pair
        for(let j = i + 1; j < inputArray.length; j++) {
            matched = true;
            // check if letters from result are contained in either string from the pair
            for(let k = 0; k < result.length; k++) {
                if(inputArray[i][k] != result[k] && inputArray[j][k] != result[k]) {
                    matched = false;
                    break;
                }               
            }
            if(matched)
                numMatchedPairs++;
        }
    }
    return numMatchedPairs;
}
