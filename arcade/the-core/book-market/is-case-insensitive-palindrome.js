// Given a string, check if it can become a palindrome through a case change of some (possibly, none) letters.

// Example

// For inputString = "AaBaa", the output should be
// isCaseInsensitivePalindrome(inputString) = true.

// "aabaa" is a palindrome as well as "AABAA", "aaBaa", etc.

// For inputString = "abac", the output should be
// isCaseInsensitivePalindrome(inputString) = false.

function isCaseInsensitivePalindrome(inputString) {
    return inputString.toLowerCase().split('').reverse().join('') === inputString.toLowerCase();
}