// Implement a function that can sum two reduced fractions and produce a new one.

// Example

// For a = [3, 5] and b = [7, 5], the output should be
// fractionSum(a, b) = [2, 1].

// 3 / 5 + 7 / 5 = 10 / 5 = 2 / 1, so the answer is [2, 1].

function fractionSum(a, b) {
    let sumNumerators = a[0] + b[0];
    
    if(a[1] === b[1])
        return [sumNumerators / Math.min(sumNumerators, a[1]), a[1] / Math.min(sumNumerators, a[1])];
    
    function findEquivFraction(f1, f2) {
        return [f1[0]*f2[1] + f2[0]*f1[1], f1[1] * f2[1]];
    }
    let equivFraction = findEquivFraction(a, b);
    
    for(let i = Math.min(equivFraction[0], equivFraction[1]); i > 0; i--) {
        if(equivFraction[0] % i === 0 && equivFraction[1] % i === 0) {
            equivFraction[0] = equivFraction[0] / i;
            equivFraction[1] = equivFraction[1] / i;
            break;
        } 
    }
    return equivFraction;
}
