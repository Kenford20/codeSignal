// Note: Try to solve this task in-place (with O(1) additional memory), since this is what you'll be asked to do during an interview.

// You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).

// Example

// For

// a = [[1, 2, 3],
//      [4, 5, 6],
//      [7, 8, 9]]
// the output should be

// rotateImage(a) =
//     [[7, 4, 1],
//      [8, 5, 2],
//      [9, 6, 3]]

function rotateImage(a) {    
    // iterate through number of nested square grids within outermost one to rotate them all one by one
    for(let j = 0; j < Math.floor(a.length / 2); j++){
        let tailIndex = a.length - 1 - j; // decrement once each time loop iterates to get to next inner grid

        // rotate corners 
        let topLeft = a[j][j];
        let topRight = a[j][tailIndex];
        let bottomRight = a[tailIndex][tailIndex];
        let bottomLeft = a[tailIndex][j];
        a[j][j] = bottomLeft;
        a[j][tailIndex] = topLeft;
        a[tailIndex][tailIndex] = topRight;
        a[tailIndex][j] = bottomRight;
        
        // rotate all elements between the four corners of each nested square grid, starting from top row then  gets replaced by the elements in the preceding side (left column for top row), then continue clockwise
        if(j < Math.ceil(a.length / 2) - 1){ // innermost square grid will only be a 2by2 for even lengthed square arrays, therefore the logic below is not necessary as the corners are rotated above, so this ultimately ignores last iteration for even lengthed inputs
            for(let i = j + 1; i <= a.length - 2 - j; i++){
                // temp values store current state of each element from each side of square grid
                let temp1 = a[0 + j][i];
                let temp2 = a[i][a.length - 1 - j];
                let temp3 = a[a.length - 1 - j][tailIndex - 1];
                let temp4 = a[tailIndex - 1][0 + j];
                // replace top left element with bottom left, top right with top left, etc. then iterate clockwise to fully complete the rotation
                a[0 + j][i] = temp4;
                a[i][a.length - 1 - j] = temp1;
                a[a.length - 1 - j][tailIndex - 1] = temp2;
                a[tailIndex - 1][0 + j] = temp3;   
                tailIndex--;
            }
        }
    }
    return a;
}