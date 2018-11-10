// Given an integer n, return the largest number that contains exactly n digits.

function largestNumber(n) {
    let num = '';
    let digit = 1;
    while(digit <= n){
        num += '9';
        digit++;
    }
    return parseInt(num);
}