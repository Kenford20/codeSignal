// You have k apple boxes full of apples. Each square box of size m contains m × m apples. You just noticed two interesting properties about the boxes:

// The smallest box is size 1, the next one is size 2,..., all the way up to size k.
// Boxes that have an odd size contain only yellow apples. Boxes that have an even size contain only red apples.
// Your task is to calculate the difference between the number of red apples and the number of yellow apples.

function appleBoxes(k) {
    let redApples = 0;
    let yellowApples = 0;
    
    for(let i = 1; i <= k; i++) {
        if(i % 2 === 0) {
            redApples += i * i;
        } else {
            yellowApples += i * i;
        }
    }
    return redApples - yellowApples;
}
