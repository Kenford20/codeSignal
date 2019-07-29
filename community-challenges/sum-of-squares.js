// Find the sum of squares of all integers from 1 up to and including given N.

// Example

// For n = 5, the output should be
// sumOfSquares(n) = 55.

function sumOfSquares(n) {
    let sum = 0;
    
    for(let i = 1; i <= n; i++) {
        sum += i*i;
    }
    return sum;
}
