// Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.

// Example

// For a = [2, 1, 3, 5, 3, 2], the output should be
// firstDuplicate(a) = 3.

// There are 2 duplicates: numbers 2 and 3. The second occurrence of 3 has a smaller index than the second occurrence of 2 does, so the answer is 3.

// For a = [2, 4, 3, 5, 1], the output should be
// firstDuplicate(a) = -1.

// initial solution, exceeds execution time limit for last two tests
function firstDuplicate(a) {
    let uniqueNums = [];
    
    for(let i = 0; i < a.length; i++){
        if(uniqueNums.includes(a[i])) return a[i];
        uniqueNums.push(a[i]);
    }
    return -1;
}

// next solution passes using js sets (essentially is doing the same thing in my mind)
// are set methods faster or something?
function firstDuplicate(a) {
    let uniqueNums = new Set();
    
    for(let i = 0; i < a.length; i++){
        if(uniqueNums.has(a[i])) return a[i];
        uniqueNums.add(a[i]);
    }
    return -1; 
}

