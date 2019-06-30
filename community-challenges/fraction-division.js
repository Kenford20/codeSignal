// Implement a function that can divide two fractions and produce a reduced fraction.

// Example

// For a = [2, 3] and b = [5, 6], the output should be
// fractionDivision(a, b) = [4, 5].

function fractionDivision(a, b) {
    const reduceFraction = f => {
        let divisor = Math.min(f[0], f[1]);
        
        while(divisor >= 2) {
            if(f[0] % divisor == 0 && f[1] % divisor == 0) {
                return [ f[0]/divisor, f[1]/divisor ];
            }
            divisor--;
        }
        return f;
    }
    return reduceFraction([ a[0]*b[1], a[1]*b[0] ]);
}
