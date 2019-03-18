// Find the smallest integer not less than the given limit which is divisible by at least one integer from the given array.

// Example

// For divisors = [2, 3, 4] and start = 13, the output should be
// firstMultiple2(divisors, start) = 14.

function firstMultiple2(divisors, start) {
    while(divisors.every(divisor => start % divisor !== 0)) {
        start++;
    }
    return start;
}
