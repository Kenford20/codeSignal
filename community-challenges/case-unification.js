// Given an initial string, switch case of the minimal possible number of letters to make the whole string written in the upper case or in the lower case.

// Example

// For inputString = "Aba", the output should be
// caseUnification(inputString) = "aba";
// For inputString = "ABa", the output should be
// caseUnification(inputString) = "ABA".

function caseUnification(inputString) {
    inputString = inputString.split``;
    let numLower = 0;
    let numUpper = 0;
    
    const uppercase = str => str.map(char => char.toUpperCase()).join``;
    const lowercase = str => str.map(char => char.toLowerCase()).join``;
    
    for(let i = 0; i < inputString.length; i++) {
        if(inputString[i].charCodeAt() >= 65 && inputString[i].charCodeAt() <= 90) {
            numUpper++;
        } else {
            numLower++;
        }
    }
    return numUpper >= numLower ? uppercase(inputString) : lowercase(inputString);
}
