// Consider a sequence of numbers a0, a1, ..., an, in which an element is equal to the sum of squared digits of the previous element. The sequence ends once an element that has already been in the sequence appears again.

// Given the first element a0, find the length of the sequence.

function squareDigitsSequence(a0) {
    let allSums = [a0];
    let currentSum = a0;
    
    while(true){
        let sumOfSquares = 0;
        currentSum = currentSum.toString().split(''); // split into digits
        // find sum of digits squared
        for(let i = 0; i < currentSum.length; i++){
            sumOfSquares += Math.pow(parseInt(currentSum[i]), 2);
        }
        // check if sum has matched any previous sums
        if(allSums.every(oldSums => oldSums !== sumOfSquares))
            allSums.push(sumOfSquares); // push all unmatched sums into an array
        else return allSums.length + 1;
    
        currentSum = sumOfSquares;
    }
}