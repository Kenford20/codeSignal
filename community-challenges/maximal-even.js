// Pick-out the largest even number from an array of integers

// Example

// For inputArray = [4, 3, 6, 8, 2, 4], the output should be
// maximalEven(inputArray) = 8.

function maximalEven(inputArray) {
    let currMax = Math.max(...inputArray);
    
    while(currMax % 2 !== 0) {
        inputArray.splice(inputArray.indexOf(currMax), 1);
        currMax = Math.max(...inputArray);
    }
    return currMax;
}
