// Given an integer n consisting of an even number of digits, swap pairs of adjacent digits in it, i.e. swap the first digit with the second one, the third digit with the fourth one, etc.

// Example

// For n = 1234, the output should be
// swapNeighbouringDigits(n) = 2143.

function swapNeighbouringDigits(n) {
    n = n.toString().split``;
    
    for(let i = 0; i < n.length; i += 2) {
        let temp = n[i];
        n[i] = n[i+1];
        n[i+1] = temp;
    }
    return parseInt(n.join``);
}
