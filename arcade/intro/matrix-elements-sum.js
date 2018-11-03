// After they became famous, the CodeBots all decided to move to a new building and live together. The building is represented by a rectangular matrix of rooms. Each cell in the matrix contains an integer that represents the price of the room. Some rooms are free (their cost is 0), but that's probably because they are haunted, so all the bots are afraid of them. That is why any room that is free or is located anywhere below a free room in the same column is not considered suitable for the bots to live in.

// Help the bots calculate the total price of all the rooms that are suitable for them.

function matrixElementsSum(matrix) {
    let cost = 0;
    for(let i = 0; i < matrix.length; i++){
        for(j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] === 0){
                let ghostRoom = i+1; // index of rooms below ghost room
                while(ghostRoom < matrix.length){
                    matrix[ghostRoom][j] = 0; // cost of rooms below ghost rooms are set to 0
                    ghostRoom++;
                }
            }
            cost += matrix[i][j];
        }
    }
    return cost;
}
