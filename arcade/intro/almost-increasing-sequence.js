// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

function almostIncreasingSequence(sequence) {
    let elementsRemoved = 0;
    for(let i = 0; i < sequence.length; i++){
        if(sequence[i] <= sequence[i-1]){
            // check if current element is also <= element before 'removed' element
            // and if next element is <= 'removed' element
            if(sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]){
                elementsRemoved ++;
            }
            elementsRemoved++;
        }
               
        if(elementsRemoved > 1){
            return false;
        }
    }
    return true;
}
