// Given integers x and n, find the largest integer k such that x0+x1+x2+...+xk ≤ n.

// Example

// For x = 2 and n = 5, the output should be
// specialPolynomial(x, n) = 1.

// We have 2^0 + 2^1 < 5 and 2^0 + 2^1 + 2^2 > 5.

function specialPolynomial(x, n) {
    let sum = 0;
    let k = 0;
    
    while(true) {
        sum += Math.pow(x, k);
        if(sum > n) {
            return --k;
        } else {
            k++;
        }
    }
}