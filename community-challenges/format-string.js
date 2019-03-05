// Remove extra white-spaces from the given string.

// Example

// For input = " abc   a aa  a a ", the output should be
// formatString(input) = "abc a aa a a".

function formatString(input) {
    return input.split(' ').filter(charSequence => charSequence !== '').join(' ');
 }
 