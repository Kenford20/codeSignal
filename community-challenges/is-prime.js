// Implement a function that determines if a given positive integer is a prime or not.

// Example

// For n = 47, the output should be
// isPrime(n) = true;
// For n = 4, the output should be
// isPrime(n) = false.

function isPrime(n) {
    for(let i = 2; i <= Math.floor(n/2); i++) {
        if(n % i === 0) {
            return false;
        }
    }
    return true;
}
