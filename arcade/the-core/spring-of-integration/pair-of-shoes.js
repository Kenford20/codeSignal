// Yesterday you found some shoes in the back of your closet. Each shoe is described by two values:

// type indicates if it's a left or a right shoe;
// size is the size of the shoe.
// Your task is to check whether it is possible to pair the shoes you found in such a way that each pair consists of a right and a left shoe of an equal size.

// Example

// For shoes = [[0, 21], 
//              [1, 23], 
//              [1, 21], 
//              [0, 23]]

// the output should be
// pairOfShoes(shoes) = true;

function pairOfShoes(shoes) {
    // create arrays of left shoes and right shoes
    let leftShoes = shoes.filter(shoe => shoe[0] === 0);
    let rightShoes = shoes.filter(shoe => shoe[0] === 1);

    if(leftShoes.length !== rightShoes.length) { return false }
    
    // create array of the sizes of all the right shoes
    let rightShoeSizes = rightShoes.map(rightShoe => rightShoe[1]);

    // check that all left shoes have a matching right shoe of the same size
    for(let i = 0; i < leftShoes.length; i++){
        if(rightShoeSizes.indexOf(leftShoes[i][1]) < 0)
            return false;
        // remove a matched right shoe size to handle repeating sizes (since i'm using indexOf)
        rightShoeSizes.splice(rightShoeSizes.indexOf(leftShoes[i][1]), 1);
    }
    return true;
}
