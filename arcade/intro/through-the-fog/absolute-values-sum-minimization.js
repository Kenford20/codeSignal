// Given a sorted array of integers a, find an integer x from a such that the value of

// abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
// is the smallest possible (here abs denotes the absolute value).
// If there are several possible answers, output the smallest one.

// Example

// For a = [2, 4, 7], the output should be
// absoluteValuesSumMinimization(a) = 4.

function absoluteValuesSumMinimization(a) {
    let currentX;
    let minimalX = a[0];
    let minimalSum = 0;
    let currentSum = 0;
    
    for(let i = 0; i < a.length; i++){
        currentX = a[i];
        // calculate absolute sum of with current value of x in a
        for(let j = 0; j < a.length; j++){
            if(i === 0)
                minimalSum += Math.abs(a[j] - currentX);
            else
                currentSum += Math.abs(a[j] - currentX);
        }
        // smallest possible X will be assigned according to smallest possible sum
        if(i !== 0 && currentSum < minimalSum){
            minimalSum = currentSum;
            minimalX = currentX;
        }   
        currentSum = 0;
    }
    return minimalX;
}
