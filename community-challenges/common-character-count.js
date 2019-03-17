// Given two strings, find the number of common characters between them.

// Example

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// commonCharacterCount(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".

function commonCharacterCount(s1, s2) {
    let numCommonChars = 0;
    let smallerStr = s1.length <= s2.length ? s1.split('') : s2.split('');
    let len = smallerStr.length;
    let biggerStr = s1.length > s2.length ? s1.split('') : s2.split('');
    
    for(let i = 0; i < len; i++) {
        if(biggerStr.indexOf(smallerStr[i]) >= 0) {
            numCommonChars++;
            biggerStr.splice(biggerStr.indexOf(smallerStr[i]), 1, '0');
            smallerStr.splice(i, 1, '');
        }
    }
    return numCommonChars;
}
