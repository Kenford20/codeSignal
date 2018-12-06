// Given array of integers, remove each kth element from it.

// Example

// For inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and k = 3, the output should be
// extractEachKth(inputArray, k) = [1, 2, 4, 5, 7, 8, 10].

function extractEachKth(inputArray, k) {
    let firstIndex = k - 1;
    let length = inputArray.length;
    
    if(k === 1) return [];
    
    for(let i = firstIndex; i < length; i += k){
        inputArray.splice(i, 1);
        i--;
    }
    return inputArray;
}
