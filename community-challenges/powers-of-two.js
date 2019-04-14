// Every positive integer can be uniquely represented as a sum of different positive powers of two.

// Given a number n, return a sorted array of different powers of two that sum up to n.

// Example

// For n = 5, the output should be powersOfTwo(n) = [1, 4].

function powersOfTwo(n) {
    n = n.toString(2);
    let binaryPlaceValue = 0;
    let powersOf2 = [];
    
    for(let i = n.length - 1; i >= 0; i--) {
        if(n[i] == 1)
            powersOf2.push(Math.pow(2, binaryPlaceValue));
        
        binaryPlaceValue++;
    }
    return powersOf2;
}