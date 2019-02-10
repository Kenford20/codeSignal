// For an integer k rearrange all the elements of the given array in such way, that:

// all elements that are less than k are placed before elements that are not less than k;
// all elements that are less than k remain in the same order with respect to each other;
// all elements that are not less than k remain in the same order with respect to each other.
// Example

// For k = 5 and elements = [1, 3, 5, 7, 6, 4, 2], the output should be
// splitByValue(k, elements) = [1, 3, 4, 2, 5, 7, 6].

function splitByValue(k, elements) {
    let lessThanK = elements.filter(el => el < k);
    let notLessThanK = elements.filter(el => el >= k);
    
    return [...lessThanK, ...notLessThanK];
}

// first attempt at a leaderboard solution lol. placed 9th at 64 characters
s = splitByValue = (k, e) => 
    [...e.filter(n => n < k), ...e.filter(n => n >= k)]