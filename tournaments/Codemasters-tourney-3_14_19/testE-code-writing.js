// Find the smallest integer not less than the given limit which is divisible by at least one integer from the given array.

function firstMultiple2(divisors, start) {
    while(divisors.every(divisor => start % divisor !== 0)) {
        start += 1;
    }
    return start;
}
