// Given an integer n, find the minimal k such that

// k = m! (where m! = 1 * 2 * ... * m) for some integer m;
// k >= n.

// In other words, find the smallest factorial which is not less than n.

function leastFactorial(n) {
    let factorial = 1;
    let counter = 1;
    while(factorial < n){
        factorial *= counter;
        counter++;
    }
    return factorial;
}