// The algorithm should return the smallest non-negative integer of N digits length.

// Example

// For n = 2, the output should be
// smallestNumber(n) = 10.

function smallestNumber(n) {
    if(n <= 1) return 0;
    let num = 1
    
    while(n > 1) {
        n--;
        num *= 10;
    }
    return num;
}
