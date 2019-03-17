// Find the smallest integer that is divisible by all integers on a given interval [left, right].

// Example

// For left = 2 and right = 4, the output should be
// smallestMultiple(left, right) = 12.

function smallestMultiple(left, right) {
    let integers = [];
    let num = 0;
    
    for(let i = left; i <= right; i++) {
        integers.push(i);
    }
    
    while(true) {
        num++;
        if(integers.every(int => num % int === 0))
            return num;
    }
}

// didn't fully complete this one in time :(