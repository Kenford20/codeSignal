// Given integers n, l and r, find the number of ways to represent n as a sum of two integers A and B such that l ≤ A ≤ B ≤ r.

// Example

// For n = 6, l = 2, and r = 4, the output should be
// countSumOfTwoRepresentations(n, l, r) = 2.
// These ways are: 2 + 4 = 6 and 3 + 3 = 6.

function countSumOfTwoRepresentations(n, l, r) {
    let ways = 0;

    // set l and r to the largest possible opposing addend
    // i.e: the other addend to 23 to get 57 is 57 - 23 = 34 and vice versa
    r = (r > n - l) ? n - l : r;
    l = n - r;
    
    while(r >= l){
        ways++;
        r--;
        l++;
    }
    return ways;
}
