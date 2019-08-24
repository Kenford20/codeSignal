// Given array of integers, for each position i, search among the previous positions for the last (from the left) position that contains a smaller value. Store this value at position i in the answer. If no such value can be found, store -1 instead.

// Example

// For items = [3, 5, 2, 4, 5], the output should be
// arrayPreviousLess(items) = [-1, 3, -1, 2, 4].

function arrayPreviousLess(items) {
    const output = [];
    let lessNum = null;
    
    for(let i = 0; i < items.length; i++) {
        for(let j = i - 1; j >= 0; j--) {
            if(items[j] < items[i]) {
                lessNum = items[j];
                break;
            }
        }
        if(lessNum) {
            output.push(lessNum);
        } else {
            output.push(-1);
        }
        lessNum = null;
    }
    return output;
}
