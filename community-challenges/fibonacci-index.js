// Consider the Fibonacci sequence: 0 1 1 2 3 5 8 13 21 ...

// We can see that 7 is the smallest 0-based index k for which F(k) has exactly 2 decimal digits.
// What is the smallest index k for which F(k) has exactly n decimal digits?

// Example

// For n = 1, the output should be
// fibonacciIndex(n) = 0;
// For n = 2, the output should be
// fibonacciIndex(n) = 7.

function fibonacciIndex(n) {
    let prevNum = 0;
    let currentNum = 1;
    let nextNum = 0;
    let index = 1;
    
    if(n === 1) return 0;
    
    while(n !== nextNum.toString().length) {
        nextNum = prevNum + currentNum;
        prevNum = currentNum;
        currentNum = nextNum;
        index++;
    }
    return index;
}
