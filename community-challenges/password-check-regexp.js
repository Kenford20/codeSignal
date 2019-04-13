// A password is complex enough, if it meets all of the following conditions:

// its length is at least 5 characters;
// it contains at least one capital letter;
// it contains at least one small letter;
// it contains at least one digit.
// Determine whether a given password is complex enough.

// Example

// For inputString = "my.Password123", the output should be
// passwordCheckRegExp(inputString) = true;
// For inputString = "my.password123", the output should be
// passwordCheckRegExp(inputString) = false.

function passwordCheckRegExp(inputString) {
    let hasCapital = /[A-Z]/;
    let hasLowercase = /[a-z]/;
    let hasDigit = /[0-9]/;
    
    return hasCapital.test(inputString) && hasLowercase.test(inputString) && hasDigit.test(inputString) && inputString.length >= 5;
}

