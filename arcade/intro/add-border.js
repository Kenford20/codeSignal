// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

function addBorder(picture) {
    let topBottomBorder = '';
    
    for(let i = 0; i < picture.length; i++){
        picture[i] = "*" + picture[i] + "*";
    }

    for(let i = 0; i < picture[0].length; i++){
        topBottomBorder += '*';
    }
    picture.unshift(topBottomBorder);
    picture.push(topBottomBorder);
    return picture;
}
