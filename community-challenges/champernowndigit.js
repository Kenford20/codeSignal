// The Champernowne constant C10 is defined by concatenating representations of successive integers: 12345678910111213....

// Given an integer n, find the nth digit (1-based) of C10.

// Example

// For n = 11, the output should be
// champernowneDigit(n) = 0.

// The 11th digit of 12345678910111213... is 0.

function champernowneDigit(n) {
    let champerNowneConstant = '';
    
    for(let i = 1; i <= n; i++) {
        champerNowneConstant += i;
    }
    return parseInt(champerNowneConstant[n-1]);
}

