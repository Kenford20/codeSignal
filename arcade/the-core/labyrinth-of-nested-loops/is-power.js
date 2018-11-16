// Determine if the given number is a power of some non-negative integer.

// Example

// For n = 125, the output should be
// isPower(n) = true;
// For n = 72, the output should be
// isPower(n) = false.

function isPower(n) {
    for(let i = 2; i <= Math.sqrt(n); i++){
        let num = i;
        while(n > num){
            num *= i;
        }
        if(num === n)
            return true;
    }
    return false || n === 1;
}
