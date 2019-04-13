// Find the smallest integer not less than the given limit which is not divisible by any of the integers from the given array.

// Example

// For divisors = [2, 3, 4] and start = 14, the output should be
// firstNotDivisible(divisors, start) = 17.

function firstNotDivisible(divisors, start) {
    while(true) {
        if(divisors.every(divisor => start % divisor !== 0))
            return start;
        start++;
    }
}
