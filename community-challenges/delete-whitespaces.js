// Given a string, delete whitespaces from it.

// Example

// For inputStr = "a b cd e", the output should be
// deleteWhitespaces(inputStr) = "abcde".

function deleteWhitespaces(inputStr) {
    return inputStr.replace(/\s/g, '');
}
