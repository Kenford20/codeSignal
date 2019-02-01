// Define l-r-segment number as the number formed by concatenating all the digits from l to r in ascending order.

// Given l and r (l ≤ r), return the l-r-segment number.

// Example

// For l = 2 and r = 4, the output should be
// lrSegmentNumber(l, r) = 234.

function lrSegmentNumber(l, r) {
    let segment = l.toString();
    for(let i = l + 1; i < r; i++) {
        segment += i.toString();
    }
    return l === r ? l : parseInt(segment + r.toString());
}
