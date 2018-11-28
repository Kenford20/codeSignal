// Given array of integers, for each position i, search among the previous positions for the last (from the left) position that contains a smaller value. Store this value at position i in the answer. If no such value can be found, store -1 instead.

// Example

// For items = [3, 5, 2, 4, 5], the output should be
// arrayPreviousLess(items) = [-1, 3, -1, 2, 4].

function arrayPreviousLess(items) {
    let output = [-1]; // first item is -1 since theres nothing before it
    let previousItems;
    
    for(let i = 1; i < items.length; i++){
        previousItems = items.slice(0, i); 
        
        // check if every previous item is larger than the current
        if(previousItems.every(item => item >= items[i]))
            output.push(-1); 
        // a smaller previous item exists
        else{
            // iterate through previous items from tail to find first smaller item
            for(let j = previousItems.length - 1; j >= 0; j--){
                if(previousItems[j] < items[i]){
                    output.push(previousItems[j]);
                    break; // exit once the item is found
                }
            }
        }
    }
    return output;
}
