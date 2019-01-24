

function packageBoxing(pkg, boxes) {
    let potentialBoxes = [];
    let flippedPkg = [pkg[2], pkg[1], pkg[0]];
    
    for(let i = 0; i < boxes.length; i++) {
        if( (pkg[0] > boxes[i][0] || pkg[1] > boxes[i][1] || pkg[2] > boxes[i][2]) &&
            (flippedPkg[0] > boxes[i][0] || flippedPkg[2] > boxes[i][2]) ){ 
                continue;
                    potentialBoxes.push([500,500,500]);
        } else {
            potentialBoxes.push(boxes[i]);
        }
    }
    
    if(potentialBoxes.length > 1) {
        let volumes = potentialBoxes.map(box => box.reduce((a, b) => a * b));
        return volumes.indexOf(Math.min(...volumes));
    }
    
    return potentialBoxes.length === 0 ? -1 : potentialBoxes[0];
}