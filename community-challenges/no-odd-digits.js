// Given a non-negative integer number, remove all of its odd digits (if all of the digits are removed, return zero).

function noOddDigits(n) {
    n = n.toString().replace(/[13579]/g, '');
    
    return n.length === 0 ? 0 : parseInt(n);
}
