// Check whether the given string is a subsequence of the plaintext alphabet.

// Example

// For s = "effg", the output should be
// alphabetSubsequence(s) = false;
// For s = "cdce", the output should be
// alphabetSubsequence(s) = false;
// For s = "ace", the output should be
// alphabetSubsequence(s) = true;
// For s = "bxz", the output should be
// alphabetSubsequence(s) = true.

function alphabetSubsequence(s) {
    for(let i = 1; i < s.length; i++) {
        if(s[i].charCodeAt() <= s[i-1].charCodeAt()) {
            return false;
        }
    }
    return true;
}
