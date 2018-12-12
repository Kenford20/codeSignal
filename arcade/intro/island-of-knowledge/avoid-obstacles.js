// You are given an array of integers representing coordinates of obstacles situated on a straight line.

// Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.

// Find the minimal length of the jump enough to avoid all the obstacles.

function avoidObstacles(inputArray) {
    let max = Math.max.apply(null, inputArray);
    
    for(let jump = 1; jump < max+1; jump++){
        // check if every element in the array is not equally divisible by jump (no collisions with obstacles aka matches)
        if(inputArray.every(num => num%jump !== 0)){
            return jump;   
        }
    }
    // if all elements are divisible, then have to jump over entire line of obstacles aka largest number + 1
    return max+1;
}
