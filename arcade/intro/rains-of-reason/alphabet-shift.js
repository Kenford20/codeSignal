// Given a string, replace each its character by the next one in the English alphabet (z would be replaced by a).

// Example

// For inputString = "crazy", the output should be
// alphabeticShift(inputString) = "dsbaz".

function alphabeticShift(inputString) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    return inputString.split('').map(letter => alphabet[(alphabet.indexOf(letter) + 1) % 26]).join('');
}