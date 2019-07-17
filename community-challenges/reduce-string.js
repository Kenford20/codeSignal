// You are given a string. Remove its first and last characters until the string is empty or the first and the last characters are not equal. Output the resulting string.

// Example

// For inputString = "abacaba", the output should be
// reduceString(inputString) = "".

// Explanation: "bacab" -> "aca" -> "c" -> "".

// For inputString = "12133221", the output should be
// reduceString(inputString) = "1332".

function reduceString(inputString) {
    let str = inputString.split``;
    
    while(str[0] === str[str.length-1]) {
        if(str.length === 0) {
            return "";
        }
        str.pop();
        str.shift();
    }
    return str.join``;
}
