// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

// Example

// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

function sortByHeight(a) {
    let indicesOfTrees = [];
    
    // store all the positions of the trees in the array
    a.map(element => {
        if(a.indexOf(-1) >= 0){
            indicesOfTrees.push(a.indexOf(-1));
            a.splice(a.indexOf(-1),1, -2); // replace -1 with -2 (placeholder for the tree)
        }
    });
    
    let sortedHeights = a.filter(height => {return height>=0}).sort((a,b) => a-b); // sorted heights without the trees
    
    // add the trees back in their respective positions
    for(let i = 0; i < indicesOfTrees.length; i++){
        sortedHeights.splice(indicesOfTrees[i],0,-1);
    }
        
    return sortedHeights;    
}
