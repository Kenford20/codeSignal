// Find the number of elements that are contained in both of the given arrays.

// Example

// For a = [1, 2, 3] and b = [3, 4, 5], the output should be
// sameElementsNaive(a, b) = 1.

function sameElementsNaive(a, b) {
    let count = 0;
    let smaller = a.length >= b.length ? a : b;
    let bigger = a === smaller ? b : a;
    
    for(let i = 0; i < smaller.length; i++) {
        if(bigger.includes(smaller[i])) {
            count++;
        }
    }
    return count;
}
