// Define an integer's roundness as the number of trailing zeroes in it.

// Given an integer n, check if it's possible to increase n's roundness by swapping some pair of its digits.

function increaseNumberRoundness(n) {
    let consecutiveNonZeroes = /^[1-9]+0*$/;
    
    return !consecutiveNonZeroes.test(n);
}