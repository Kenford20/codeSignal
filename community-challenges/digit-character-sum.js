// Given two chars each representing a one-digit number, return a string which represents the sum of these numbers.

// Example

// For ch1 = '2' and ch2 = '5', the output should be
// digitCharactersSum(ch1, ch2) = "7".

function digitCharactersSum(ch1, ch2) {
    return (parseInt(ch1) + parseInt(ch2)).toString();
}
