// Given a reduced improper fraction output it as a reduced mixed fraction.

// Example

// For a = [7, 2], the output should be
// improperFractionToMixed(a) = [3, 1, 2].

// Explanation: 7/2 = 3 + 1/2.

function improperFractionToMixed(a) {
    let wholes = Math.floor(a[0] / a[1]);
    let denom = a[1];
    let numerator = a[0] - wholes * a[1];
    
    function reduceFraction(num, den) {
        let divisor = num;        
        
        while(true) {
            if((num % divisor === 0) && (den % divisor === 0)) {
                return divisor;
            } else if(divisor === 1) {
                return 1;
            }
            divisor--;
        }
    }
    
    if(numerator === 1) {
        return [wholes, numerator, denom]
    } else {
        return [
            wholes, 
            numerator/reduceFraction(numerator, denom), 
            denom/reduceFraction(numerator, denom)
        ];
    }
}