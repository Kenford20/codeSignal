// Given a string, output its longest prefix which contains only digits.
// A substring of a string is called a prefix if it starts at the string’s first character.
// Example

// For inputString = "123aa1", the output should be
// longestDigitsPrefix(inputString) = "123".

function longestDigitsPrefix(inputString) {
    return /\d/.test(inputString[0]) ? inputString.match(/^\d+/)[0] : '';    
}
