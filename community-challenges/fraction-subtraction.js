// Implement a function that can subtract two reduced fractions and produce a new one.

// Example

// For a = [7, 10] and b = [3, 10], the output should be
// fractionSubtraction(a, b) = [2, 5].

// 7/10 - 3/10 = 4/10 = 2/5, so the answer is [2, 5].

function fractionSubtraction(a, b) {
    const equivFraction1 = [a[0]*b[1], a[1]*b[1]];
    const equivFraction2 = [b[0]*a[1], b[1]*a[1]];
    const subtractedFraction = [equivFraction1[0] - equivFraction2[0], equivFraction1[1]];
    
    const reduceFraction = (f) => {
        let divisor = Math.min(f[0], f[1]);
        
        while(divisor >= 2) {
            if(f[0] % divisor === 0 && f[1] % divisor === 0) {
                return [f[0] / divisor, f[1] / divisor];
            }
            divisor--;
        }
        return f;
    }
    return reduceFraction(subtractedFraction);
}
