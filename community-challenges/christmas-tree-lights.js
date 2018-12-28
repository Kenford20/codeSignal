// Christmas is coming! You are going to decorate your Christmas Tree, but to do that you need to estimate the number of garland lights you need to buy. To do that, you draw a scheme of your tree:

//    *
//   ***
//  *****
// *******
//   ...
// You'd like to decorate the tree in such a way that there's a light on every * of the tree. Given n, an integer representing the number of rows in scheme - the height of the tree, your task is to determine how many lights you'll need in total.

// Example

// For n = 2, the output should be
// christmasTreeLights(n) = 4.

//  *
// ***
// This tree has a total of 4 *'s, so you'll need 4 lights.

function christmasTreeLights(n) {
    let numLights = 0;
    let lightsToAdd = 1;
    
    for(let i = 0; i < n; i++){
        numLights += lightsToAdd;
        lightsToAdd += 2;
    }
    return numLights;
}
