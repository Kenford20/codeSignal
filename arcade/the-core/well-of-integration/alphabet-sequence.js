// Check whether the given string is a subsequence of the plaintext alphabet.

// Example

// For s = "effg" or s = "cdce", the output should be
// alphabetSubsequence(s) = false;
// For s = "ace" or s = "bxz", the output should be
// alphabetSubsequence(s) = true.

function alphabetSubsequence(s) {
    for(let i = 0; i < s.length - 1; i++){
        if(s[i].charCodeAt() >= s[i+1].charCodeAt())
            return false
    }
    return true;
}
