// For a given set of non-negative integers find the smallest non-negative integer not contained in that set.

// In game theory this is known as the mex (minimum excludant) function and it plays an important role.

// Input: a: [1, 2, 3]
// Expected Output: 0

// Input: a: [0, 2, 4, 4, 2, 1, 10]
// Expected Output: 3

function mex(a) {
    let max = Math.max(...a);
    
    for(let i = 0; i <= max; i++) {
        if(!a.includes(i))
            return i;
    }
}
