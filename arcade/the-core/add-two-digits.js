// You are given a two-digit integer n. Return the sum of its digits.

function addTwoDigits(n) {
    //return Math.floor(n % 10 + n / 10 % 10);
    return n.toString().split('').reduce((sum, val) => {return parseInt(sum) + parseInt(val)});
}