// You are standing at a magical well. It has two positive integers written on it: a and b. Each time you cast a magic marble into the well, it gives you a * b dollars and then both a and b increase by 1. You have n magic marbles. How much money will you make?

// Example

// For a = 1, b = 2, and n = 2, the output should be
// magicalWell(a, b, n) = 8.

function magicalWell(a, b, n) {
    let money = 0;
    
    for(let i = 0; i < n; i++){
        money += a * b;
        a++;
        b++;
    }
    return money;
}

