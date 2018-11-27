// Given an array of 2k integers (for some integer k), perform the following operations until the array contains only one element:

// On the 1st, 3rd, 5th, etc. iterations (1-based) replace each pair of consecutive elements with their sum;
// On the 2nd, 4th, 6th, etc. iterations replace each pair of consecutive elements with their product.
// After the algorithm has finished, there will be a single element left in the array. Return that element.

// Example

// For inputArray = [1, 2, 3, 4, 5, 6, 7, 8], the output should be
// arrayConversion(inputArray) = 186.

// We have [1, 2, 3, 4, 5, 6, 7, 8] -> [3, 7, 11, 15] -> [21, 165] -> [186], so the answer is 186.

function arrayConversion(inputArray) {
    let iterations = Math.log2(inputArray.length);
    
    for(let i = 0; i < iterations; i++){
        for(let j = 0; j < inputArray.length; j += 2){
            if(i % 2 === 0) { // odd iterations
                inputArray.splice(j, 2, inputArray[j] + inputArray[j+1]) // replace pair of elements by the sum of the pair
                j--;
            }
            else { // even iterations
                inputArray.splice(j, 2, inputArray[j] * inputArray[j+1]) // replace pair of elements by the product of the pair
                j--;
            }
        }
    }
    return inputArray[0];
}

 