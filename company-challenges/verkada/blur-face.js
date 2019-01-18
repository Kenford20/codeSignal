// Your Verkada security camera has captured a funny video of a hummingbird. You'd like to post the clip on your social media account, but there were some people visible in the background. Since the image on a Verkada camera is so sharp and crisp, their faces are clearly identifiable, which you think might be an invasion of privacy. So you've decided to blur their faces before posting the clip

// You are given an image, represented as a matrix of integers, where each integer corresponds to a color. The number in the ith (0-based) row and jth (0-based) column represents the color of the pixel in the ith row and jth column of the image.

// Your task is to blur the image. In order to do that, you need to replace each number of the matrix with the average of the numbers in the neighboring cells. We assume that two cells are neighbors if they share at least one corner. The cell itself is not considered part of the average; only the 8 surrounding neighbors (or fewer if the cell is against an edge).

// Example

// For img = [[1, 4], [7, 10]], the output should be blurFaces(img) = [[7, 6], [5, 4]].

// newImg[0][0] = (4 + 7 + 10) / 3 = 21 / 3 = 7
// newImg[0][1] = (1 + 7 + 10) / 3 = 18 / 3 = 6
// newImg[1][0] = (1 + 4 + 10) / 3 = 15 / 3 = 5
// newImg[1][1] = (1 + 4 + 7) / 3 = 12 / 3 = 4

function blurFaces(img) {
    let blurredImg = [];
    let lastRowIndex = img.length - 1;
    let lastColIndex = img[0].length - 1;
    let neighborSum = 0;
    let numNeighbors = 0;

    // one row input
    if(img.length < 2) {
        for(let i = 0; i < img[0].length; i++) {
            if(i === 0) 
                blurredImg.push(img[0][1])
            
            else if(i === img[0].length - 1)
                blurredImg.push(img[0][img[0].length-2])
            else
                blurredImg.push((img[0][i-1] + img[0][i+1]) / 2);
        }
        return [blurredImg];
    }
    
    // one column input
    if(img[0].length < 2) {
        for(let i = 0; i < img.length; i++) {
            if(i === 0) 
                blurredImg.push([img[i+1][0]])
            else if(i === img.length - 1)
                blurredImg.push([img[i-1][0]])
            else
                blurredImg.push([(img[i-1][0] + img[i+1][0]) / 2]);
        }
        return blurredImg;
    }
        
    
    for(let i = 0; i < img.length; i++) {
        let blurredRow = [];
        for(let j = 0; j < img[0].length; j++) {
            // top left corner
            if(i === 0 && j === 0) {
                neighborSum = img[0][1] + img[1][0] + img[1][1];
                numNeighbors = 3;
            }
            // top right corner
            else if(i === 0 && j === lastColIndex) {
                neighborSum = img[0][lastColIndex - 1] + img[1][lastColIndex - 1] + img[1][lastColIndex];
                numNeighbors = 3;
            }
            // top row between corners
            else if(i === 0) {
                neighborSum = img[0][j-1] + img[0][j+1] + img[1][j-1] + img[1][j] + img[1][j+1];
                numNeighbors = 5;
            }
            // bottom left corner
            else if(i === lastRowIndex && j === 0) {
                neighborSum = img[lastRowIndex][1] + img[lastRowIndex-1][0] + img[lastRowIndex-1][1];
                numNeighbors = 3;
            }
            // left edge column
            else if(j === 0) {
                neighborSum = img[i-1][0] + img[i-1][1] + img[i][1] + img[i+1][0] + img[i+1][1];
                numNeighbors = 5;
            }
            // bottom right corner
            else if(i === lastRowIndex && j === lastColIndex) {
                neighborSum = img[lastRowIndex][lastColIndex-1] + img[lastRowIndex-1][lastColIndex] + img[lastRowIndex-1][lastColIndex-1];
                numNeighbors = 3;
            }
            // right edge column
            else if(j === lastColIndex) {
                neighborSum = img[i-1][lastColIndex] + img[i-1][lastColIndex-1] + img[i][lastColIndex-1] + img[i+1][lastColIndex-1] + img[i+1][lastColIndex];
                numNeighbors = 5;
            }
            // bottom row between corners
            else if(i === lastRowIndex) {
                neighborSum = img[lastRowIndex][j-1] + img[lastRowIndex-1][j-1] + img[lastRowIndex-1][j] + img[lastRowIndex-1][j+1] + img[lastRowIndex][j+1];
                numNeighbors = 5;
            }
            // any elements inside of the edges (have 8 surrounding neighbors)
            else {
                neighborSum = img[i-1][j-1] + img[i-1][j] + img[i-1][j+1] + img[i][j-1] + img[i][j+1] + img[i+1][j-1] + img[i+1][j] + img[i+1][j+1];
                numNeighbors = 8;
            }
            blurredRow.push(neighborSum / numNeighbors);
        }
        blurredImg.push(blurredRow);
    }
    return blurredImg;
}
