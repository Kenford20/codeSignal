// Given an array of integers, find the leftmost number that has a decimal representation which doesn't contain any digit more than once. If there is no such number, return -1 instead.

// Example

// For inputArray = [22, 111, 101, 124, 33, 30], the output should be
// differentDigitsNumberSearch(inputArray) = 124;
// For inputArray = [1111, 404], the output should be
// differentDigitsNumberSearch(inputArray) = -1.

function differentDigitsNumberSearch(inputArray) {
    let currentNumber;
    let hasUniqueDigits = false;
    
    for(let i = 0; i < inputArray.length; i++) {
        currentNumber = inputArray[i]+'';
        
        for(let digit of currentNumber) {
            if(currentNumber.indexOf(digit) === currentNumber.lastIndexOf(digit)) {
                hasUniqueDigits = true;
            } else {
                hasUniqueDigits = false;
            }
        }
        
        if(hasUniqueDigits) {
            return +currentNumber;
        }
        hasUniqueDigits = false;
    }
    return -1;
}

function differentDigitsNumberSearch(inputArray) {
    let currentNumber;
    let numberWithUniqueDigits;
    
    for(let i = 0; i < inputArray.length; i++) {
        currentNumber = inputArray[i] + '';
        numberWithUniqueDigits = [...new Set(currentNumber.split``)].join``
        
        if(currentNumber === numberWithUniqueDigits) {
            return +currentNumber;
        }
    }
    return -1;
}


