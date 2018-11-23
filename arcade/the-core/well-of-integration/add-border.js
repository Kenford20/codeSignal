// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

// Example For
// picture = ["abc",
//            "ded"]

// the output should be

// addBorder(picture) = ["*****",
//                       "*abc*",
//                       "*ded*",
//                       "*****"]

function addBorder(picture) {
    let topAndBottomBorder = '';

    for(let i = 0; i < picture[0].length + 2; i++){
        topAndBottomBorder += '*';
    }
    
    for(let j = 0; j < picture.length; j++){
        picture[j] = '*' + picture[j];
        picture[j] += '*';
    }
    
    return [topAndBottomBorder, ...picture, topAndBottomBorder];
}



