// After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.

// Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a 0).

// Example
// matrix = [[0, 1, 1, 2], 
//           [0, 5, 0, 0], 
//           [2, 0, 3, 3]]
// the output should be
// matrixElementsSum(matrix) = 9.

// There are several haunted rooms, so we'll disregard them as well as any rooms beneath them. Thus, the answer is 1 + 5 + 1 + 2 = 9.

function matrixElementsSum(matrix) {
    let codeBotsRooms = 0;
    let ghostAbove = false;
    
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            // check all the rooms above the current room
            for(let k = 0; k < i; k++) {
                if(matrix[k][j] === 0)
                    ghostAbove = true;
            }
            if(!ghostAbove)
               codeBotsRooms += matrix[i][j]; 

            ghostAbove = false;
        }
    }
    return codeBotsRooms;
}
