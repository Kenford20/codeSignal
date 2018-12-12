// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

function arrayMaximalAdjacentDifference(inputArray) {
    let largestDiff = 0;
    
    for(let i = 1; i < inputArray.length; i += 2){
        if(Math.abs(inputArray[i] - inputArray[i-1]) > largestDiff)
            largestDiff = Math.abs(inputArray[i] - inputArray[i-1]);
        if(Math.abs(inputArray[i] - inputArray[i+1]) > largestDiff)
            largestDiff = Math.abs(inputArray[i] - inputArray[i+1]);
    }
    return largestDiff;
}
