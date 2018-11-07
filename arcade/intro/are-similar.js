// Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

// Given two arrays a and b, check whether they are similar.

function areSimilar(a, b) {
    let numsUnmatched = 0;
    let unmatchedIndex1 = -1;
    let unmatchedIndex2 = -1;
    
    // find the number of mismatches between both arrays
    for(let i = 0; i < a.length; i++){
        if(a[i] !== b[i]){
            numsUnmatched++;
            if(numsUnmatched === 1)
                unmatchedIndex1 = i; 
            else if(numsUnmatched === 2)
                unmatchedIndex2 = i;
            else return false; // if more than 2 mismatches, then no swapping can be done to match them
        }  
    }
    // return true if arrays are all matched or if the two mismatched nums exist in both arrays at the mismatched index
    if(numsUnmatched === 0 || (a[unmatchedIndex1] === b[unmatchedIndex2]) && a[unmatchedIndex2] === b[unmatchedIndex1]) return true;
    
    return false;
}

// 1 2 3 4 4 2
// 1 2 3 4 2 3