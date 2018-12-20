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
    let lengths = inputArray.map(str => str.length).sort((a,b) => a - b);
    let index = 0;
    let sortedStrings = [];
    
    for(let i = 0; i < lengths.length; i++){
        while(lengths[i] !== inputArray[index].length){
            index++;
        }
        sortedStrings.push(inputArray[index]);
        inputArray.splice(index, 1);
        index = 0;
    }
    return sortedStrings;
}
