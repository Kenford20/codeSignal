// Given a character, check if it represents an odd digit, an even digit or not a digit at all.

// Example

// For symbol = '5', the output should be
// characterParity(symbol) = "odd";
// For symbol = '8', the output should be
// characterParity(symbol) = "even";
// For symbol = 'q', the output should be
// characterParity(symbol) = "not a digit".

function characterParity(symbol) {
    return /[^0-9]/.test(symbol) ? 'not a digit' :
    parseInt(symbol) % 2 === 0 ? 'even' : 'odd'; 
}
