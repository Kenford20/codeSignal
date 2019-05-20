// Given an integer n, check if n = k! for some non-negative integer k.

// Example

// For n = 120, the output should be
// checkFactorial(n) = true.

// Here 120 = 5!.

// For n = 25, the output should be
// checkFactorial(n) = false.

// Here 4! = 24 < 25 < 120 = 5!.

function checkFactorial(n) {
    let factorial = 1;
    let counter = 1;
    
    while(factorial <= n) {
        if(factorial === n) {
            return true;
        }
        factorial *= counter;
        counter++;
    }
    return false;
}
