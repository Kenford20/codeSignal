// Given integers n, l and r, find the number of ways to represent n as a sum of two integers A and B such that l ≤ A ≤ B ≤ r.

// For n = 6, l = 2, and r = 4, the output should be
// countSumOfTwoRepresentations2(n, l, r) = 2.

// There are just two ways to write 6 as A + B, where 2 ≤ A ≤ B ≤ 4: 6 = 2 + 4 and 6 = 3 + 3.

function countSumOfTwoRepresentations2(n, l, r) {
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
