// Given an array of strings, return another array containing all of its longest strings.

function allLongestStrings(inputArray) {
    let longestStringLength = inputArray[0].length;
    
    // find longest string length
    for(let i = 1; i < inputArray.length; i++){
        if(inputArray[i].length >= longestStringLength){
            longestStringLength = inputArray[i].length;
        }
    }
    // filter the longest strings into the array
    let longestStrings = inputArray.filter(string => {
        return string.length === longestStringLength;
    });
    
    return longestStrings;
}