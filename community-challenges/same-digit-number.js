// Given an integer, check that all the digits in the number are the same.

// Example

// For n = 1111, the output should be
// sameDigitNumber(n) = true;
// For n = 1122, the output should be
// sameDigitNumber(n) = false.

function sameDigitNumber(n) {
    n = n.toString();
    let regex = new RegExp(n[0], 'g');
    return n.match(regex).length === n.length;
}

function sameDigitNumber(n) {
    n = n.toString();
    return n.split('').every(digit => digit == n[0])
}
