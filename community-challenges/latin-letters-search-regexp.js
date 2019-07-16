// Determine if the given string contains at least one English letter.

// Example

// For input = "a_ _2", the output should be
// latinLettersSearchRegExp(input) = true;
// For input = "W2", the output should be
// latinLettersSearchRegExp(input) = true;
// For input = "_1111 ", the output should be
// latinLettersSearchRegExp(input) = false.

function latinLettersSearchRegExp(input) {
    return /[a-zA-Z]/.test(input);
}
