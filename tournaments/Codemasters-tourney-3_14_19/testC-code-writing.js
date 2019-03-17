// The algorithm should return the smallest non-negative integer of N digits length.

function smallestNumber(n) {
    let int = 1;
    
    for(let i = 0; i < n - 1; i++) {
        int *= 10;
    }
    return n === 1 ? 0 : int;
}
