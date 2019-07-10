// Given an integer, find the number of the ways to change exactly one digit in it in order to obtain a bigger integer.

// Example

// For value = 10, the output should be
// countWaysToChangeDigit(value) = 17.

function countWaysToChangeDigit(value) {
    value = value + '';
    let ways = 0;
    
    for(let i = 0; i < value.length; i++) {
        ways += 9 - value[i];
    }
    return ways;
}

countWaysToChangeDigit = v => 9 * (v+'').length - [...v+''].reduce((a,b) => +a + +b)
countWaysToChangeDigit = v => [...v+''].map(d => 9-d).reduce((a,b) => a+b)
countWaysToChangeDigit = v => [...v+''].reduce((a,b) => a + 9-b, 0)