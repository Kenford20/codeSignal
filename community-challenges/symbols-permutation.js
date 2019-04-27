// Determine if it is possible to rearrange the characters in a string to obtain another string.

// Example

// For word1 = "abc" and word2 = "cab", the output should be
// symbolsPermutation(word1, word2) = true;
// For word1 = "aaaa" and word2 = "aaa", the output should be
// symbolsPermutation(word1, word2) = false.

function symbolsPermutation(word1, word2) {
    let charsW1 = word1.split('').sort();
    let charsW2 = word2.split('').sort();
    
    if(charsW1.length !== charsW2.length) {
        return false;
    } else {
        for(let i = 0; i < charsW1.length; i++) {
            if(charsW1[i] !== charsW2[i]) {
                return false;
            }
        }
    }
    return true;
}
