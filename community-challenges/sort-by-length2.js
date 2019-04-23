// Given an array of strings, sort them in the order of increasing lengths. If two strings have the same length, their relative order must be the same as in the initial array.

// Example

// For

// inputArray = ["abc",
//               "",
//               "aaa",
//               "a",
//               "zz"]
// the output should be

// sortByLength(inputArray) = ["",
//                             "a",
//                             "zz",
//                             "abc",
//                             "aaa"]

function sortByLength(inputArray) {
    let strLengths = inputArray.map(str => str.length).sort((a,b) => a - b);
    let sortedStrings = [];
    
    for(let i = 0; i < strLengths.length; i++){
        let currShortestStr = inputArray.findIndex(str => str.length === strLengths[i]);
        sortedStrings.push(inputArray[currShortestStr]);
        inputArray.splice(currShortestStr, 1);
    }
    return sortedStrings;
}