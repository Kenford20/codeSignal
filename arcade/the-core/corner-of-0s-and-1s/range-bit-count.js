// You are given two numbers a and b where 0 ≤ a ≤ b. Imagine you construct an array of all the integers from a to b inclusive. You need to count the number of 1s in the binary representations of all the numbers in the array.

function rangeBitCount(a, b) {
    let bitCounter = 0;
    for(let i = a; i <= b; i++){
        for(let j = 0; j < i.toString(2).length; j++){
            if(i.toString(2)[j] == 1){
                bitCounter++;
            }
        }
    }
    return bitCounter;
}