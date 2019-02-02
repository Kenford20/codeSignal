// Given a list of fractions find the index of the largest one (0-based).

// Example

// For numerators = [5, 2, 5] and denominators = [6, 3, 4], the output should be
// maxFraction(numerators, denominators) = 2.

// 5/4 is the largest fraction, so the answer is 2.

function maxFraction(numerators, denominators) {
    for(let i = 0; i < numerators.length; i++) {
        numerators[i] = numerators[i] / denominators[i];
    }
    
    return numerators.indexOf(Math.max(...numerators));
}
