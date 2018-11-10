// Some phone usage rate may be described as follows:

// first minute of a call costs min1 cents,
// each minute from the 2nd up to 10th (inclusive) costs min2_10 cents
// each minute after 10th costs min11 cents.

// You have s cents on your account before the call. What is the duration of the longest call (in minutes rounded down to the nearest integer) you can have?

function phoneCall(min1, min2_10, min11, s) {
    
    // not enough money for any call
    if(s < min1)
        return 0;
    // only enough money for 1 minute
    else if(s === min1){
        return 1;
    }
    // less than 11 minutes on call
    else if(Math.floor((s - min1) / min2_10) <= 10){
        return 1 + Math.floor((s - min1)/min2_10);
    }
    // more than 10 minutes on call
    else{
        return 1 + 9 + Math.floor((s - min1 - 9*min2_10)/min11);
    }
}
