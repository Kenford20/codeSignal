// Given an array of strings, return another array containing all of its longest strings.

// Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

function allLongestStrings(inputArray) {
    
    let longestStringLength = 0;
    
    for(let i = 0; i < inputArray.length; i++){
        if(inputArray[i].length > longestStringLength)
            longestStringLength = inputArray[i].length;
    }
    
    return inputArray.filter(string => string.length === longestStringLength);
}
