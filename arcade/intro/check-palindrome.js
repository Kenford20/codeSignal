// Given the string, check if it is a palindrome.

function checkPalindrome(inputString) {
    return inputString === inputString.split('').reverse().join('');
}