// Check whether the given string is a substring of the plaintext alphabet.

// Example

// For s = "efghi", the output should be
// alphabetSubstring(s) = true;
// For s = "bde", the output should be
// alphabetSubstring(s) = false.

function alphabetSubstring(s) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return alphabet.indexOf(s) >= 0;
}
