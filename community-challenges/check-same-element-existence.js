// Given two sorted arrays of integers, check if there is at least one element which occurs in both arrays.

// Example

// For arr1 = [1, 2, 3, 5] and arr2 = [1, 4, 5], the output should be
// checkSameElementExistence(arr1, arr2) = true;
// For arr1 = [1, 3, 5] and arr2 = [-2, 0, 2, 4, 6], the output should be
// checkSameElementExistence(arr1, arr2) = false.

function checkSameElementExistence(arr1, arr2) {
    let tailIndex = arr1.length - 1;
    
    for(let i = 0; i < arr1.length; i++) {
        if(arr2.includes(arr1[i]) || arr2.includes(arr1[tailIndex]))
            return true;
        
        tailIndex--;
    }
    return false;
}